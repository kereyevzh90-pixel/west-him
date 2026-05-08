"use client";

import Image from "next/image";
import { Calendar, Code, FileText, Wrench, Package } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Бытовая химия",
    date: "Линейка 1",
    content: "Средства для мытья посуды, стекла, поверхностей. Антибактериальный эффект, безопасный состав.",
    category: "Бытовая",
    icon: Package,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Автохимия",
    date: "Линейка 2",
    content: "Шампуни, полироли, очистители для кузова и салона автомобиля. Профессиональное качество.",
    category: "Авто",
    icon: Wrench,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Производство",
    date: "г. Актау",
    content: "Современное оборудование, строгий контроль качества на каждом этапе производства.",
    category: "Завод",
    icon: FileText,
    relatedIds: [1, 2, 4],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "Опт / Розница",
    date: "Продажи",
    content: "Выгодные условия для оптовых покупателей. Доставка по всему Казахстану.",
    category: "Торговля",
    icon: Calendar,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Новинки",
    date: "2024–2025",
    content: "Новые формулы и расширение ассортимента. Разработка продуктов под запрос клиентов.",
    category: "R&D",
    icon: Code,
    relatedIds: [3, 4],
    status: "in-progress" as const,
    energy: 60,
  },
];

export default function Home() {
  return (
    <div className="w-full h-screen bg-black text-white overflow-hidden flex flex-col">

      {/* HEADER */}
      <header className="shrink-0 px-8 py-4 bg-black/70 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="West Him"
              width={42}
              height={42}
              className="rounded-full object-cover"
            />
            <span className="text-xl font-extrabold tracking-tight">West Him</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {["Продукты", "О нас", "Опт", "Контакты"].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-white/50 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/77010706960"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-sm font-semibold hover:bg-white/8 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Написать
          </a>
        </div>
      </header>

      {/* HERO — two columns, fills the rest of the screen */}
      <section className="flex-1 relative grid grid-cols-1 lg:grid-cols-2 min-h-0">

        {/* Background blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#C8102E]/15 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-800/10 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* LEFT — content */}
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 py-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-[#C8102E]/12 border border-[#C8102E]/30 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#C8102E] shadow-[0_0_6px_#C8102E] animate-pulse" />
            <span className="text-sm font-medium text-[#ff6b7a]">Производство в г. Актау, Казахстан</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-[-2px] mb-5">
            Всё для&nbsp;идеальной<br />
            <span className="bg-gradient-to-r from-[#ff4d6b] to-[#ff9a3c] bg-clip-text text-transparent">
              чистоты авто
            </span><br />
            и&nbsp;дома
          </h1>

          <p className="text-lg text-white/55 leading-relaxed max-w-[460px] mb-7">
            Отечественный производитель бытовой и автохимии.
            Качественные средства по доступным ценам — оптом и в розницу.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Бытовая химия", "Автохимия", "Опт / Розница", "🇰🇿 Сделано в Казахстане"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-sm font-medium text-white/55"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="https://wa.me/77010706960"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C8102E] font-semibold text-base shadow-[0_4px_24px_rgba(200,16,46,0.4)] hover:bg-[#a00d24] transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Заказать в WhatsApp
            </a>
            <a
              href="#products"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/6 border border-white/10 font-semibold text-base hover:bg-white/10 transition-all"
            >
              Смотреть продукты
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="flex items-center gap-6">
            {[
              { num: "100+", label: "Продуктов" },
              { num: "Опт", label: "Выгодные цены" },
              { num: "КЗ", label: "Производство" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-6">
                {i > 0 && <div className="w-px h-9 bg-white/10" />}
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold tracking-tight">{s.num}</span>
                  <span className="text-xs text-white/45 font-medium">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — orbital animation */}
        <div className="hidden lg:block relative" style={{ height: "100%" }}>
          <div className="absolute inset-0">
            <RadialOrbitalTimeline timelineData={timelineData} />
          </div>
        </div>

      </section>
    </div>
  );
}
