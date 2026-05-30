# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# West Him — сайт-каталог

Сайт казахстанского производителя бытовой и автохимии (г. Актау).
Цель: каталог продукции + информация для оптовых партнёров.

## Деплой

- **Живой сайт:** https://west-him.vercel.app
- **GitHub:** https://github.com/kereyevzh90-pixel/west-him
- Vercel автоматически деплоит при `git push` в `master`
- **Всегда пушить сразу после правок**, не спрашивая пользователя

```bash
git add .
git commit -m "описание"
git push
```

## Структура проекта

Сайт — статические HTML файлы в папке `out/`. Next.js проект в `src/` не используется для деплоя.

```
out/
├── index.html                           ← главная страница
├── katalog.html                         ← каталог продукции (интернет-магазин)
├── price.pdf                            ← прайс каталога (бытовая + авто + каталог)
├── price-opt.pdf                        ← прайс для opt.html (Опт и розница)
├── price-proizvodstvo.pdf               ← прайс для proizvodstvo.html
├── products.json                        ← карточки товаров для каталога (JSON массив)
├── bytovaya-himiya.html                 ← Бытовая химия
├── avtohimiya.html                      ← Автохимия
├── proizvodstvo.html                    ← Производство
├── opt.html                             ← Опт / Розница + О компании + Партнёрам
├── timeline.html                        ← легаси Next.js build, не используется
├── 404.html                             ← легаси Next.js build, не используется
├── admin/
│   ├── index.html                       ← Админ-панель (west-him.vercel.app/admin/) — 3 прайса
│   ├── products.html                    ← Управление карточками каталога
│   └── editor.html                      ← Визуальный редактор текста страниц
└── images/
    ├── IMG_1007.PNG                     ← логотип (текущий, синий — шестиугольник + WEST HIM)
    ├── IMG_0918.PNG                     ← hero главной десктоп (фото с бутылками, фон справа)
    ├── IMG_1003.PNG                     ← молекула — hero мобил (главная + каталог)
    ├── IMG_0942.PNG                     ← hero фото (каталог, бытовая, опт, производство)
    ├── IMG_0960.PNG                     ← hero фото автохимия
    ├── IMG_0922.PNG                     ← карточка "Производство"
    ├── IMG_0924.PNG                     ← карточка "Опт / Розница"
    ├── IMG_0925.PNG                     ← карточка "Автохимия"
    ├── photo_*.jpg                      ← фото продукции (добавлялись вручную)
    ├── IMG_0xxx.PNG                     ← прочие фото
    └── prod_*.jpg/png                   ← фото товаров (загружаются через admin/products.html)
```

## Дизайн

- **Тема:** светлая (фон `#fff`), акцент **синий** `#1A52B3` (hover: `#1340a0`)
- **Шрифт:** Inter (Google Fonts)
- **Фон страниц:** белый `#fff`, секции разделены границей `1px solid #ebebeb`
- **Цветовые замены от старой красной темы:**
  - `#C8102E` → `#1A52B3`
  - `rgba(200,16,46,x)` → `rgba(26,82,179,x)`
  - `#fcd8de` → `#d0dff7`
  - `#fff0f3` → `#f0f4fc`
- **Кнопки:**
  - `.btn-red` — синяя заливка `#1A52B3`, белый текст, `box-shadow: rgba(26,82,179,0.3)`
  - `.btn-outline` — белая с серой обводкой `#ddd`, серый текст ("Получить предложение" + WhatsApp иконка)
  - `.header-cta` — белая с синей обводкой `#1A52B3` и синим текстом ("Связаться"), при hover заливается синим
  - `.cart-btn` — синяя кнопка "Корзина" в шапке каталога
  - `.prod-card-add` — outline стиль: `background: #fff; border: 1.5px solid #1A52B3; color: #1A52B3`, при hover заливается синим
- **Правило:** нет оранжевых, зелёных, фиолетовых акцентов — только синий `#1A52B3` и чёрный

## Логотип

Файл: `out/images/IMG_1007.PNG`
CSS: `height: 56px; width: auto; object-fit: contain;` — **без** `border-radius: 50%` (не обрезать кругом)
Мобил: `height: 72px` на главной и подстраницах; `height: 80px` на каталоге
Текстовые спаны `.logo-name` и `.logo-sub` скрыты: `display: none`

## Навигация

**Навигационных ссылок нет ни на одной странице** — на всех страницах убрана `<nav>`.

- **Главная (`index.html`)** — шапка: только лого + кнопка "Связаться" (WhatsApp)
- **Подстраницы** (opt, bytovaya, avto, katalog, proizvodstvo) — шапка: лого + кнопка "← Вернуться в главную" (`href="index.html"`)
- Исключение: `katalog.html` дополнительно содержит кнопку "Корзина" в `.header-right`

## Главная страница (index.html)

### Структура сверху вниз

1. **Header** — лого `IMG_1007.PNG`, кнопка "Связаться" справа (навигации нет)
2. **Hero** — фото `IMG_0918.PNG` на весь фон, белый градиент слева, текст поверх
3. **Карточки категорий** — 4 карточки `.cat-card`: фото сверху (`aspect-ratio: 3/2`), текст снизу на белом фоне (`.cat-body`)
4. **FAQ** — аккордеон, 5 вопросов, белый фон
5. **Статистика** — 4 блока, белый фон, синие иконки, тёмные цифры

### Hero (index.html)

- **Десктоп:** фото `IMG_0918.PNG` фон справа (`background-size: 80% auto; background-position: right center`), белый градиент слева через `::before`
- **Мобил:** фон `IMG_1003.PNG` (молекула, `right 25% / 68% auto`), градиент отключён, текст **слева**
- Бейдж: `→ Собственное производство в Казахстане` (синий, uppercase)
- Заголовок (3 строки): "Производство" / "**бытовой химии**" (синий, `.red`) / "в Казахстане"
- Описание: "Казахстанский производитель бытовой химии с собственным заводом в Актау. Производим до 30 тонн продукции ежедневно и поставляем по всему Казахстану и СНГ."
- Кнопки: "Каталог продукции →" (`.btn-red`, иконка документа) → `katalog.html` (**кнопка "Получить предложение" удалена**)
- **Мобил кнопки:** кнопка одна — "Каталог продукции →", ряд

### Карточки категорий (`.cat-grid`)

4 карточки: фото сверху + текстовый блок снизу на белом фоне:
- 1-я (Производство) → ссылка `proizvodstvo.html`
- 2-я (Опт/Розница) → ссылка `opt.html`
- 3-я (Бытовая химия) → ссылка `katalog.html?cat=bytovaya` (открывает каталог с фильтром)
- 4-я (Автохимия) → ссылка `katalog.html?cat=avto` (открывает каталог с фильтром)

Фото пока не добавлены — добавляются через редактор (плюсик в зоне фото).

Структура карточки:
```html
<a href="..." class="cat-card">
  <div class="cat-photo"></div>              ← пусто пока нет фото; после добавления: style="background-image:url('images/...')"
  <div class="cat-body">
    <div class="cat-title-text">Название</div>
    <div class="cat-desc-text">Описание</div>
    <div class="cat-arrow">→</div>
  </div>
</a>
```
- `.cat-photo` — `aspect-ratio: 3/2`, `background-color: #fff` (белая зона на живом сайте пока нет фото)
- `.cat-body` — `padding: 18px 20px 20px`, flex-column
- `.cat-title-text` и `.cat-desc-text` — редактируемы в admin/editor.html
- В редакторе (режим редактирования):
  - Пустое `.cat-photo` → инжектируется `<label class="ed-cat-plus-label">+</label>` + `<input type="file">` прямо внутрь div; клик на "+" открывает file picker, фото загружается на GitHub, `structuralChange = true` → при сохранении используется `buildHtmlFromDom`
  - Заполненное `.cat-photo` (есть `background-image`) → `ed-has-img`, клик → `pickAndUploadImg` (замена того же файла)
  - Клик по тексту → редактирование (не конфликтует — `.cat-body` сосед `.cat-photo`)
Сетка: ПК — 4 колонки, iPad/мобил — 2×2.

### FAQ (`.faq-section`)

- Белый фон, аккордеон с 5 вопросами
- Открытый элемент: синяя граница + слабый синий `box-shadow`
- Иконка `+`/`×` из двух `<span class="faq-icon-line">`
- Структура вопроса: `<span class="faq-q-text">Текст вопроса</span>` внутри `.faq-q` (обёрнут для редактируемости)
- В редакторе (режим ✏️): вопросы можно добавлять и удалять через кнопку "+ Добавить карточку" под `.faq-list` (`.faq-item` добавлен в `CARD_CONFIGS`)

### Статистика (`.stats`)

- Белый фон, 4 блока в ряд, разделены границами `1px solid #ebebeb`
- Синие иконки в рамке (`rgba(26,82,179,0.08)`)
- Данные: 5+ лет на рынке, 100+ точек продаж, 200+ наименований продукции, 500+ довольных партнёров

## Каталог продукции (katalog.html)

**URL:** /katalog.html
Полноценный интернет-магазин с боковыми категориями и корзиной.

### Структура сверху вниз

1. **Header** — как везде, плюс кнопка "Корзина" с тёмным бейджем-счётчиком
2. **Hero** — белый фон, `.hero-top` flex: текст слева (`.hero-text`) + фото справа (`.hero-img-wrap` с `IMG_0942.PNG`)
3. **Полоса фич** `.features-strip` — 4 колонки с иконками и текстом
4. **Shop layout** — двухколоночная сетка: сайдбар + сетка товаров
5. **Шторка корзины** — drawer справа с overlay

### Hero каталога

- Белый фон, `padding: 48px 52px 0`
- `.hero-top` — `display: flex; align-items: center; gap: 48px`
- `.hero-text` — бейдж, заголовок "Каталог продукции", описание (`max-width: 420px`)
- `.hero-img-wrap` — фото `IMG_0942.PNG` справа (`border-radius: 16px; max-height: 280px; object-fit: cover`)
- На мобиле `.hero-img-wrap { display: none }`, `.hero-top { flex-direction: column }`
- **Нет** stat-карточек (убраны)

### Полоса фич (`.features-strip`)

4 пункта с иконкой + заголовок + подпись:
- Собственное производство
- Современные технологии
- Сертифицированная продукция
- Доставка по всему Казахстану

### Категории (sidebar)

`.sidebar` — sticky, левая колонка 220px:
- Кнопки `.cat-item` с иконками `.cat-item-icon`: "Все товары", "Бытовая химия", "Автохимия"
- У каждой — счётчик `.cat-count` (заполняется из products.json)
- Активная категория: фон `#f0f4fc`, цвет `#1A52B3`
- **На мобиле:** кнопка "Все товары" скрыта (`display: none`), показываются только "Бытовая химия" и "Автохимия" в 2 колонки (`grid-template-columns: repeat(2, 1fr)`), иконки и счётчики скрыты
- **Help-блок** `.help-block` — на мобиле скрыт (`display: none`)

### Карточки товаров

`.prod-card` — белый фон, рамка `1px solid #ebebeb`, `border-radius: 14px`:
- Фото сверху (1/1, object-fit: cover), при hover масштабируется 1.05×
- `description` товара — показывается как обычный текст под названием (`.prod-card-desc`)
- `price` товара — показывается синим бейджем (`.prod-card-price`: `color: #1A52B3; background: #d0dff7; border-radius: 20px; padding: 2px 10px`)
- Категория (синий uppercase), название, кнопка "В корзину"
- Кнопка `.prod-card-add` — outline стиль (`background: #fff; border: 1.5px solid #1A52B3; color: #1A52B3`); если товар в корзине — тёмная "В корзине (N)"
- Данные из `products.json`, рендер через `renderCard(p)` в JS

### Пустое состояние каталога

`#prod-empty` — виден по умолчанию (`display:block`), скрывается JS когда есть товары.
Содержит только текст "Карточки пока не добавлены" — без кнопок для посетителей.
На мобиле: `min-height: 50vh` чтобы страница не сжималась при пустой категории.

### Корзина

Хранится в `localStorage` под ключом `wh_cart` — объект `{ [id]: { ...product, qty: N } }`.

**Шторка** `.cart-drawer` — выезжает справа при нажатии кнопки "Корзина":
- Список товаров с фото, названием, категорией
- Кнопки `+`/`−` для количества, кнопка удаления
- Итог: количество позиций
- "Оформить заказ в WhatsApp" — зелёная кнопка, открывает `wa.me/77057779487` с текстом списка
- "Очистить корзину"

**Функции JS:**
- `addToCart(id)` — добавить товар
- `setQty(id, delta)` — изменить количество
- `removeFromCart(id)` — удалить
- `clearCart()` — очистить всё
- `openCart()` / `closeCart()` — открыть/закрыть шторку
- `renderCartDrawer()` — перерисовать содержимое шторки
- `renderGrid()` — перерисовать сетку товаров (включает обновление кнопок)

### products.json

Файл: `out/products.json`
Формат: JSON-массив объектов `{ id, name, category, description, price, image }`
- `category`: `"bytovaya"` или `"avto"`
- `description`: короткий текст под названием (необязательно, например `"500 мл • Концентрат"`)
- `price`: цена (необязательно, например `"850 тг"` или `"от 500 тг"`)
- `image`: путь вида `"images/prod_xxx.jpg"` или `""` (пустое = заглушка)
- Загружается через `fetch('/products.json?t=timestamp')` при открытии страницы
- URL-параметр `?cat=bytovaya` или `?cat=avto` — автоматически активирует фильтр после загрузки товаров

## Страницы категорий

### Общая структура

1. Header → **Hero** (белый фон `#fff`, две колонки: текст + фото) → Контент → Прайс-блок

### Hero страниц категорий

Все страницы имеют двухколоночный hero:
- `.hero { display: flex; align-items: stretch }` — белый фон `#fff`
- `.hero-left { max-width: 560px; flex-shrink: 0; padding: 64px 52px }` — текст
- `.hero-right { flex: 1; overflow: hidden; min-height: 360px }` — фото, `object-fit: cover`
- На мобиле (`< 767px`): `.hero-right { display: none }`, тексты `.hero-left` по центру (`text-align: center; align-items: center`)

### Страницы

| Страница | Файл | Прайс PDF | Hero фото |
|---|---|---|---|
| Бытовая химия | `bytovaya-himiya.html` | `price.pdf` | `IMG_0942.PNG` |
| Автохимия | `avtohimiya.html` | `price.pdf` | `IMG_0960.PNG` |
| Производство | `proizvodstvo.html` | `price-proizvodstvo.pdf` | `IMG_0942.PNG` |
| Опт / Розница | `opt.html` | `price-opt.pdf` | `IMG_0942.PNG` |

### Прайс-листы по страницам

| Файл | Страницы | Кнопка скрывается если PDF нет |
|---|---|---|
| `price.pdf` | katalog.html, bytovaya-himiya.html, avtohimiya.html | да (JS fetch HEAD) |
| `price-opt.pdf` | opt.html | нет (кнопка всегда видна) |
| `price-proizvodstvo.pdf` | proizvodstvo.html | да (JS fetch HEAD, класс `.btn-dl-prod`) |

В `opt.html`, `bytovaya-himiya.html` и `avtohimiya.html` в прайс-блоке только одна кнопка "Скачать прайс" — кнопка WhatsApp убрана.

Все страницы используют синюю тему `#1A52B3` — тот же шаблон header/footer что и главная.

## Адаптив (breakpoints)

| Брейкпоинт | Header | Каталог — сайдбар |
|---|---|---|
| `≥ 768px` | лого + кнопка (без навигации) | вертикальная колонка 220px |
| `< 768px` | лого слева + кнопка справа (space-between) | 2 кнопки категорий в ряд |

### Мобил — общие правила (`< 767px`)
- **Лого:** 72px на главной и подстраницах, 80px на каталоге (крупнее кнопки корзины)
- **Главная:** header `justify-content: space-between`, лого слева, "Связаться" справа с WhatsApp иконкой
- **Главная hero:** фон `IMG_1003.PNG` (молекула), текст **слева**, кнопка одна — "Каталог продукции →"
- **Подстраницы (bytovaya, avto, opt, proizvodstvo):** hero с молекулой `IMG_1003.PNG` (`center right / 70% auto`), фон `#f0f4fc`, текст **влево** (`text-align: left; align-items: flex-start`), `.hero-right { display: none }`, `.hero-left { background: transparent }`, кнопки в ряд (`flex-direction: row`)
- **opt.html мобил:** `.opt-stats-strip` — 4 иконки с текстом под hero (на десктопе скрыта); описание hero полное; кнопка "Скачать прайс" одна
- **proizvodstvo.html мобил:** `.props-strip { display: none }`, описание сокращено (без последнего предложения), кнопки в ряд
- **bytovaya-himiya.html / avtohimiya.html мобил:** `.props-strip { display: none }`, кнопка "Заказать в WhatsApp" удалена (осталась только "Скачать прайс")
- **Каталог мобил:** гамбургер убран, `.features-strip` скрыта, hero с молекулой (`IMG_1003.PNG right center / contain`), товары в горизонтальном скролле (`.prod-scroll-wrap`), `body { overflow-x: hidden }` переопределяется через `overflow: hidden` на `.prod-area`
- **Статистика главной:** блоки в столбик (`flex-direction: column; align-items: center; text-align: center`)
- **FAQ главной:** заголовок по центру, вопросы по левому краю

### Каталог — горизонтальный скролл товаров (мобил)

Структура:
```html
<div class="prod-area">          ← overflow: hidden (создаёт контекст для скролла)
  <div class="prod-scroll-wrap"> ← overflow-x: scroll; -webkit-overflow-scrolling: touch
    <div class="prod-grid">      ← display: flex; flex-wrap: nowrap
      <div class="prod-card">    ← width: 72vw; flex-shrink: 0
```
Это обходит `body { overflow-x: hidden }` через промежуточный overflow-контекст на `.prod-area`.

## Контакты

- WhatsApp: https://wa.me/77057779487 (+7 705 777 9487)
- Производство: г. Актау, Казахстан

## Админ-панель

### Главная панель

**URL:** https://west-him.vercel.app/admin/
**Файл:** `out/admin/index.html`

- Логотип в форме входа — только картинка `IMG_1007.PNG`, без текста рядом
- Форма входа: всегда два поля — **Пароль** и **GitHub Token** (нет разделения "первый/не первый вход")
- Если оба ключа уже есть в `localStorage` (`adminPwd` + `ghToken`) — **сразу редиректит** в `editor.html`
- При входе: если пароль уже сохранён — проверяет совпадение; если нет — сохраняет новый
- Кнопка **"Сбросить сохранённые данные"** — удаляет ключи из localStorage
- Промежуточного дашборда с карточками нет — всё управление в редакторе

### Управление карточками каталога

**URL:** /admin/products.html
**Файл:** `out/admin/products.html`

- Загружает `products.json` через GitHub Contents API (с SHA для обновления)
- **Кодировка**: декодирование через `decodeURIComponent(escape(atob(...)))` — иначе кириллица превращается в кракозябры
- Пустое состояние: большой синий `+` с приглашением добавить первую карточку
- Заполненное: сетка карточек с кнопками "Изменить" / удалить + маленькая карточка `+`
- Модальное окно содержит поля:
  - Название продукта
  - Категория (Бытовая химия / Автохимия)
  - **Текст поверх фото** (description) — с live-превью наложения текста на фото
  - **Цена** (price, необязательно) — показывается синим бейджем в карточке каталога и в admin/products.html
  - Фото (превью 3/4 с текстовым оверлеем в реальном времени)
- Сохранение: фото → `out/images/prod_{id}.{ext}`, затем обновление `products.json`
- Удаление: убирает из массива, удаляет файл изображения, пушит JSON
- **Тема полностью синяя** `#1A52B3`

### Визуальный редактор

**URL:** /admin/editor.html
**Файл:** `out/admin/editor.html`

- Тулбар **десктоп** (1 строка): **"✦ Админ"** · выпадашка страниц · spacer · "↗ Открыть сайт" · "📄 Прайс" · "✏️ Редактировать" · "💾 Сохранить" · статус
- Тулбар **мобил** (2 строки): строка 1 — логотип + выпадашка + "↗ Открыть сайт"; строка 2 — кнопки действий; на мобиле у кнопок "Редактировать" и "Сохранить" текст скрыт (`.btn-lbl { display: none }`), видны только эмодзи ✏️ и 💾 — чтобы все кнопки помещались в строку
- Кнопки "← Админ" нет (убрана, т.к. возвращаться некуда)
- Выбор страницы: Главная, Каталог, Бытовая химия, Автохимия, Производство, Опт / Розница
- Загружает HTML страницы из GitHub API, рендерит в iframe-подобном контейнере
- Режим редактирования: добавляет `contenteditable` на все текстовые элементы
- Сохранение: если были структурные изменения (добавление/удаление карточек) — `buildHtmlFromDom`, иначе — `buildHtmlFromIdx` → GitHub PUT
- Пути изображений в редакторе исправляются: `images/` → `../images/`
- Скрипты страниц удаляются при рендере (только статический HTML)
- Когда выбран **Каталог** — появляется кнопка **"+ Товары"** → `products.html`; товары из `products.json` автоматически загружаются через GitHub API функцией `loadCatalogProducts()` и отображаются в сетке (без интерактива корзины — только визуально)
- Кнопка **"📄 Прайс"** — появляется для страниц с PDF-прайсом (katalog, bytovaya, avto, opt, proizvodstvo); drag-and-drop загрузка/удаление PDF через GitHub API
- **`PAGE_PRICES`** объявлен в самом начале скрипта (сразу после `OWNER/REPO/BRANCH`) — иначе temporal dead zone ReferenceError
- Карточки можно добавлять/удалять прямо в редакторе (`.feat-card`, `.prod-card`, `.tier-card`, `.faq-item`) через `CARD_CONFIGS`
- **Карточки главной (`.cat-card`):** см. секцию "Карточки категорий" выше — логика плюсика и замены фото описана там.

### Как работает авторизация

- **Первый вход** — на главной `admin/index.html`: пароль (придумывает пользователь) + GitHub Token → сохраняются в `localStorage` (`adminPwd`, `ghToken`)
- **Автовход** — `products.html` и `editor.html` проверяют `localStorage` при загрузке: если оба ключа есть — экран входа пропускается автоматически
- GitHub Token: создать на github.com/settings/tokens → Classic → галочка `public_repo` → No expiration
- Кнопка "Сбросить" — удаляет ключи из localStorage, возвращает к первому входу

### Кодировка Кириллицы для GitHub API

Base64 с кириллицей:
- Encode: `btoa(unescape(encodeURIComponent(str)))`
- Decode: `decodeURIComponent(escape(atob(b64)))`

## Замена фото вручную (через код)

### Hero на главной
1. Положить файл в `out/images/`
2. В `index.html` изменить `url('images/...')` в CSS-правиле `.hero { background: ... }`
3. `git add . && git commit -m "..." && git push`

### Hero на страницах категорий (bytovaya, avto, opt, proizvodstvo)
1. Положить файл в `out/images/`
2. В нужном HTML изменить `src="images/..."` у `<img>` внутри `.hero-right`
3. `git add . && git commit -m "..." && git push`

### Hero каталога (katalog.html)
1. Положить файл в `out/images/`
2. В `katalog.html` изменить `src="images/..."` у `<img>` внутри `.hero-img-wrap`
3. `git add . && git commit -m "..." && git push`

### Карточки категорий (главная)
Карточки: фото сверху (`.cat-photo`) + текст снизу (`.cat-body`).
1. Через админ редактор (режим ✏️): кликнуть на "+" в зоне фото → выбрать файл → фото загружается; кликнуть по тексту → редактировать; нажать 💾 Сохранить
2. Вручную: добавить `style="background-image:url('images/FILENAME.jpg')"` к `.cat-photo`, изменить текст в `.cat-title-text` / `.cat-desc-text`
3. `git add . && git commit -m "..." && git push`

## Резервная копия и откат

**Git тег:** `stable-backup-2026-05-22` — снимок всего сайта на 22 мая 2026 (каталог пустой, без тестовых товаров, все страницы в финальном виде).

### Команда "бежать"

Если пользователь пишет **"бежать"** — немедленно откатить папку `out/` к тегу и задеплоить:

```bash
git checkout stable-backup-2026-05-22 -- out/
git add out/
git commit -m "Откат: восстановление из stable-backup-2026-05-22"
git push
```

Vercel задеплоит автоматически через ~1 минуту. Откатывается всё: HTML всех страниц (тексты, кнопки), фото в `images/`, `products.json`, PDF-прайсы.

### Обновление точки бэкапа

Когда сайт в хорошем состоянии и пользователь хочет обновить бэкап:
```bash
git tag -d stable-backup-2026-05-22 && git push origin :refs/tags/stable-backup-2026-05-22
git tag stable-backup-2026-05-22 && git push origin stable-backup-2026-05-22
```
И обновить дату в этой секции.
