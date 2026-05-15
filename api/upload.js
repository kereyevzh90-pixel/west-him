const OWNER  = 'kereyevzh90-pixel';
const REPO   = 'west-him';
const BRANCH = 'master';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')   return res.status(405).end();

  const { password, path, content } = req.body || {};

  if (!password || password !== process.env.ADMIN_PASSWORD)
    return res.status(401).json({ error: 'Неверный пароль' });

  if (!path || !content)
    return res.status(400).json({ error: 'Не передан путь или файл' });

  const token = process.env.GITHUB_TOKEN;
  if (!token)
    return res.status(500).json({ error: 'GITHUB_TOKEN не настроен на сервере' });

  const apiBase = `https://api.github.com/repos/${OWNER}/${REPO}/contents`;
  const headers = {
    Authorization: `token ${token}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
    'User-Agent': 'west-him-admin',
  };

  // Получаем текущий SHA файла (нужен для обновления)
  let sha = null;
  const getRes = await fetch(`${apiBase}/${path}?ref=${BRANCH}`, { headers });
  if (getRes.ok) {
    const data = await getRes.json();
    sha = data.sha;
  }

  // Загружаем файл в GitHub
  const body = {
    message: `Admin: обновлён ${path.split('/').pop()}`,
    content,
    branch: BRANCH,
    ...(sha ? { sha } : {}),
  };

  const putRes = await fetch(`${apiBase}/${path}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  });

  if (!putRes.ok) {
    const err = await putRes.json().catch(() => ({}));
    return res.status(putRes.status).json({ error: err.message || `GitHub HTTP ${putRes.status}` });
  }

  return res.status(200).json({ ok: true });
};
