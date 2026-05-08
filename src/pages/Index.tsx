import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/fb4832ed-b079-4808-9c7e-fb1b049edc24/files/e30032a6-647f-419a-b184-df641c937cbf.jpg";
const IMG2 = "https://cdn.poehali.dev/projects/fb4832ed-b079-4808-9c7e-fb1b049edc24/files/d81c3586-8c2a-40e8-b1a6-d8726300ed82.jpg";
const IMG3 = "https://cdn.poehali.dev/projects/fb4832ed-b079-4808-9c7e-fb1b049edc24/files/ff76c059-298c-43fe-a13c-8c6a8da616f7.jpg";

const NAV_LINKS = ["Главная", "Каталог", "Услуги", "Акции", "О нас", "Отзывы", "Контакты"];

const PRODUCTS = [
  { id: 1, name: "Набор «Золотой вечер»", price: 4900, size: "small", type: "luxury", img: HERO_IMG, badge: "Хит продаж" },
  { id: 2, name: "Набор «Гурман»", price: 8500, size: "medium", type: "food", img: IMG3, badge: "Новинка" },
  { id: 3, name: "Набор «Элегантность»", price: 6200, size: "small", type: "beauty", img: IMG2, badge: null },
  { id: 4, name: "Набор «VIP Корзина»", price: 14900, size: "large", type: "luxury", img: IMG3, badge: "Премиум" },
  { id: 5, name: "Набор «Весенний»", price: 3200, size: "small", type: "food", img: HERO_IMG, badge: null },
  { id: 6, name: "Набор «SPA Ритуал»", price: 7800, size: "medium", type: "beauty", img: IMG2, badge: "Топ выбор" },
];

const SERVICES = [
  { icon: "Gift", title: "Индивидуальная сборка", desc: "Создадим набор под ваши пожелания и бюджет" },
  { icon: "Truck", title: "Курьерская доставка", desc: "Быстрая доставка по городу с красивой упаковкой" },
  { icon: "Palette", title: "Брендирование", desc: "Корпоративные наборы с вашим логотипом" },
  { icon: "MessageSquare", title: "Консультация", desc: "Поможем выбрать идеальный подарок для любого случая" },
];

const REVIEWS = [
  { name: "Анна Смирнова", role: "Постоянный клиент", text: "Заказывала наборы для всей команды на Новый год. Качество упаковки и содержимого на высшем уровне! Все остались в восторге.", stars: 5 },
  { name: "Дмитрий Козлов", role: "Корпоративный заказ", text: "Брендировали наборы под наш корпоратив. Логотип выполнен идеально, всё в срок и с отличным сервисом.", stars: 5 },
  { name: "Елена Петрова", role: "Частный заказ", text: "Подарок маме на юбилей — слёзы радости! Такого внимания к деталям я не ожидала. Буду заказывать снова.", stars: 5 },
];

const PROMO = [
  { label: "-20%", title: "Корпоративным клиентам", desc: "При заказе от 10 наборов", color: "from-amber-700 to-amber-500" },
  { label: "🎁", title: "Бесплатная доставка", desc: "При заказе от 5 000 ₽", color: "from-zinc-700 to-zinc-500" },
  { label: "-15%", title: "Именинникам", desc: "Скидка в день рождения", color: "from-amber-800 to-yellow-600" },
];

const TYPE_LABELS: Record<string, string> = { all: "Все", luxury: "Премиум", food: "Гастро", beauty: "Beauty" };
const SIZE_LABELS: Record<string, string> = { all: "Все размеры", small: "Мини", medium: "Стандарт", large: "Большой" };

const Index = () => {
  const [activeSection, setActiveSection] = useState("Главная");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filterType, setFilterType] = useState("all");
  const [filterSize, setFilterSize] = useState("all");
  const [filterPrice, setFilterPrice] = useState(20000);

  const filtered = PRODUCTS.filter(p =>
    (filterType === "all" || p.type === filterType) &&
    (filterSize === "all" || p.size === filterSize) &&
    p.price <= filterPrice
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e8dcc8]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8dcc8] flex items-center justify-center">
              <Icon name="Crown" size={16} className="text-[#0d0d0d]" />
            </div>
            <span className="text-xl font-bold tracking-wider text-[#c9a84c]" style={{ fontFamily: "'Playfair Display', serif" }}>GIFTURA</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`text-xs tracking-widest uppercase transition-colors hover:text-[#c9a84c] ${activeSection === link ? "text-[#c9a84c]" : "text-[#a89070]"}`}
                style={{ fontFamily: "sans-serif" }}
              >
                {link}
              </button>
            ))}
          </div>
          <button className="md:hidden text-[#c9a84c]" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-[#0d0d0d] border-t border-[#c9a84c]/20 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <button key={link} onClick={() => scrollTo(link)} className="text-left text-xs tracking-widest uppercase text-[#a89070] hover:text-[#c9a84c] transition-colors" style={{ fontFamily: "sans-serif" }}>
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="Главная" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/60 via-[#0d0d0d]/40 to-[#0d0d0d]" />
        </div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: "sans-serif" }}>Премиальные подарки</span>
            <div className="h-px w-16 bg-[#c9a84c]" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6 text-[#e8dcc8]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Подарки,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] via-[#e8dcc8] to-[#a87c3c]">которые запомнят</span>
          </h1>
          <p className="text-[#a89070] text-lg md:text-xl tracking-wide mb-10 font-light leading-relaxed" style={{ fontFamily: "sans-serif" }}>
            Эксклюзивные подарочные наборы ручной сборки<br className="hidden md:block" />
            для особых моментов и дорогих людей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo("Каталог")} className="px-10 py-4 bg-gradient-to-r from-[#c9a84c] to-[#a87c3c] text-[#0d0d0d] font-semibold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity" style={{ fontFamily: "sans-serif" }}>
              Смотреть каталог
            </button>
            <button onClick={() => scrollTo("Контакты")} className="px-10 py-4 border border-[#c9a84c]/50 text-[#c9a84c] text-sm tracking-widest uppercase hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all" style={{ fontFamily: "sans-serif" }}>
              Заказать звонок
            </button>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[["500+", "клиентов"], ["98%", "довольны"], ["5 лет", "на рынке"]].map(([val, lbl]) => (
              <div key={lbl} className="text-center">
                <div className="text-3xl font-bold text-[#c9a84c]" style={{ fontFamily: "'Playfair Display', serif" }}>{val}</div>
                <div className="text-[#a89070] text-xs tracking-wider uppercase mt-1" style={{ fontFamily: "sans-serif" }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-[#c9a84c]/60" />
        </div>
      </section>

      {/* CATALOG */}
      <section id="Каталог" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#c9a84c]/50" />
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: "sans-serif" }}>Наш выбор</span>
            <div className="h-px w-12 bg-[#c9a84c]/50" />
          </div>
          <h2 className="text-5xl font-bold text-[#e8dcc8] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Каталог наборов</h2>
          <p className="text-[#a89070] font-light" style={{ fontFamily: "sans-serif" }}>Каждый набор — история, рассказанная с любовью</p>
        </div>

        {/* FILTERS */}
        <div className="bg-[#1a1610] border border-[#c9a84c]/20 p-6 mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-[#c9a84c] text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "sans-serif" }}>Тип подарка</label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(TYPE_LABELS).map(([k, v]) => (
                <button key={k} onClick={() => setFilterType(k)}
                  className={`px-4 py-2 text-xs tracking-wider uppercase transition-all ${filterType === k ? "bg-[#c9a84c] text-[#0d0d0d] font-semibold" : "border border-[#c9a84c]/30 text-[#a89070] hover:border-[#c9a84c]/60"}`}
                  style={{ fontFamily: "sans-serif" }}>
                  {v}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-[#c9a84c] text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "sans-serif" }}>Размер набора</label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(SIZE_LABELS).map(([k, v]) => (
                <button key={k} onClick={() => setFilterSize(k)}
                  className={`px-4 py-2 text-xs tracking-wider uppercase transition-all ${filterSize === k ? "bg-[#c9a84c] text-[#0d0d0d] font-semibold" : "border border-[#c9a84c]/30 text-[#a89070] hover:border-[#c9a84c]/60"}`}
                  style={{ fontFamily: "sans-serif" }}>
                  {v}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-[#c9a84c] text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "sans-serif" }}>
              До {filterPrice.toLocaleString("ru")} ₽
            </label>
            <input
              type="range" min={1000} max={20000} step={500}
              value={filterPrice}
              onChange={e => setFilterPrice(+e.target.value)}
              className="w-full accent-[#c9a84c]"
            />
            <div className="flex justify-between text-[#a89070] text-xs mt-1" style={{ fontFamily: "sans-serif" }}>
              <span>1 000 ₽</span>
              <span>20 000 ₽</span>
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <div key={p.id} className="group relative bg-[#111009] border border-[#c9a84c]/15 hover:border-[#c9a84c]/50 transition-all duration-500 overflow-hidden">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 to-transparent" />
                {p.badge && (
                  <div className="absolute top-4 left-4 bg-[#c9a84c] text-[#0d0d0d] text-xs px-3 py-1 font-semibold tracking-wider uppercase" style={{ fontFamily: "sans-serif" }}>
                    {p.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl text-[#e8dcc8] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-[#c9a84c] font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{p.price.toLocaleString("ru")} ₽</span>
                  <button className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#a89070] hover:text-[#c9a84c] transition-colors border-b border-transparent hover:border-[#c9a84c]" style={{ fontFamily: "sans-serif" }}>
                    В корзину <Icon name="ShoppingBag" size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#a89070]" style={{ fontFamily: "sans-serif" }}>Нет наборов по выбранным фильтрам</div>
        )}
      </section>

      {/* SERVICES */}
      <section id="Услуги" className="py-24 bg-[#0a0900] border-y border-[#c9a84c]/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#c9a84c]/50" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: "sans-serif" }}>Что мы делаем</span>
              <div className="h-px w-12 bg-[#c9a84c]/50" />
            </div>
            <h2 className="text-5xl font-bold text-[#e8dcc8] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Наши услуги</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(s => (
              <div key={s.title} className="group p-8 border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 bg-[#111009] transition-all duration-300 text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 flex items-center justify-center group-hover:from-[#c9a84c]/30 transition-all">
                  <Icon name={s.icon} size={24} className="text-[#c9a84c]" />
                </div>
                <h3 className="text-xl text-[#e8dcc8] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{s.title}</h3>
                <p className="text-[#a89070] text-sm font-light leading-relaxed" style={{ fontFamily: "sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section id="Акции" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#c9a84c]/50" />
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: "sans-serif" }}>Специальные предложения</span>
            <div className="h-px w-12 bg-[#c9a84c]/50" />
          </div>
          <h2 className="text-5xl font-bold text-[#e8dcc8] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Акции</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROMO.map(pr => (
            <div key={pr.title} className={`relative overflow-hidden bg-gradient-to-br ${pr.color} p-8 border border-[#c9a84c]/20`}>
              <div className="absolute top-0 right-0 w-32 h-32 border border-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border border-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="text-5xl font-bold text-[#e8dcc8] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{pr.label}</div>
                <h3 className="text-xl text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{pr.title}</h3>
                <p className="text-white/70 text-sm font-light" style={{ fontFamily: "sans-serif" }}>{pr.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="О нас" className="py-24 bg-[#0a0900] border-y border-[#c9a84c]/15">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border border-[#c9a84c]/20" />
            <img src={IMG2} alt="О нас" className="relative z-10 w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c9a84c]/10 border border-[#c9a84c]/30" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#c9a84c]/50" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: "sans-serif" }}>Наша история</span>
            </div>
            <h2 className="text-5xl font-bold text-[#e8dcc8] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>О нас</h2>
            <p className="text-[#a89070] font-light leading-relaxed mb-6" style={{ fontFamily: "sans-serif" }}>
              Мы верим, что каждый подарок — это послание. За 5 лет работы мы создали более 10 000 наборов, каждый из которых несёт частичку тепла и внимания.
            </p>
            <p className="text-[#a89070] font-light leading-relaxed mb-8" style={{ fontFamily: "sans-serif" }}>
              Наши мастера тщательно отбирают каждый элемент набора, создавая гармоничную историю из текстур, ароматов и вкусов. Это не просто подарок — это опыт.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[["10 000+", "наборов создано"], ["50+", "партнёров"], ["3", "города доставки"], ["100%", "ручная сборка"]].map(([v, l]) => (
                <div key={l} className="border-l-2 border-[#c9a84c] pl-4">
                  <div className="text-2xl font-bold text-[#c9a84c]" style={{ fontFamily: "'Playfair Display', serif" }}>{v}</div>
                  <div className="text-[#a89070] text-xs uppercase tracking-wider mt-1" style={{ fontFamily: "sans-serif" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="Отзывы" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#c9a84c]/50" />
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: "sans-serif" }}>Что говорят клиенты</span>
            <div className="h-px w-12 bg-[#c9a84c]/50" />
          </div>
          <h2 className="text-5xl font-bold text-[#e8dcc8] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Отзывы</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map(r => (
            <div key={r.name} className="bg-[#111009] border border-[#c9a84c]/20 p-8 hover:border-[#c9a84c]/40 transition-all">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <span key={i} className="text-[#c9a84c] text-sm">★</span>
                ))}
              </div>
              <p className="text-[#a89070] font-light leading-relaxed mb-6 italic" style={{ fontFamily: "sans-serif" }}>«{r.text}»</p>
              <div className="border-t border-[#c9a84c]/20 pt-5">
                <div className="text-[#e8dcc8] font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>{r.name}</div>
                <div className="text-[#a89070] text-xs tracking-wider uppercase mt-1" style={{ fontFamily: "sans-serif" }}>{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="Контакты" className="py-24 bg-[#0a0900] border-t border-[#c9a84c]/15">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#c9a84c]/50" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: "sans-serif" }}>Свяжитесь с нами</span>
            </div>
            <h2 className="text-5xl font-bold text-[#e8dcc8] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Контакты</h2>
            <div className="space-y-6">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (999) 123-45-67" },
                { icon: "Mail", label: "Email", value: "info@giftura.ru" },
                { icon: "MapPin", label: "Адрес", value: "Москва, ул. Кузнецкий Мост, 10" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Вс: 10:00 – 21:00" },
              ].map(c => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={18} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="text-[#c9a84c] text-xs tracking-widest uppercase" style={{ fontFamily: "sans-serif" }}>{c.label}</div>
                    <div className="text-[#e8dcc8] text-lg mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#111009] border border-[#c9a84c]/20 p-8">
            <h3 className="text-2xl text-[#e8dcc8] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Оставить заявку</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-[#c9a84c] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "sans-serif" }}>Ваше имя</label>
                <input type="text" placeholder="Александра" className="w-full bg-[#0d0d0d] border border-[#c9a84c]/30 px-4 py-3 text-[#e8dcc8] placeholder-[#a89070]/50 focus:outline-none focus:border-[#c9a84c] transition-colors" style={{ fontFamily: "sans-serif" }} />
              </div>
              <div>
                <label className="block text-[#c9a84c] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "sans-serif" }}>Телефон</label>
                <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full bg-[#0d0d0d] border border-[#c9a84c]/30 px-4 py-3 text-[#e8dcc8] placeholder-[#a89070]/50 focus:outline-none focus:border-[#c9a84c] transition-colors" style={{ fontFamily: "sans-serif" }} />
              </div>
              <div>
                <label className="block text-[#c9a84c] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "sans-serif" }}>Сообщение</label>
                <textarea rows={4} placeholder="Расскажите о вашем пожелании..." className="w-full bg-[#0d0d0d] border border-[#c9a84c]/30 px-4 py-3 text-[#e8dcc8] placeholder-[#a89070]/50 focus:outline-none focus:border-[#c9a84c] transition-colors resize-none" style={{ fontFamily: "sans-serif" }} />
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-[#c9a84c] to-[#a87c3c] text-[#0d0d0d] font-semibold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity" style={{ fontFamily: "sans-serif" }}>
                Отправить заявку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-[#c9a84c]/15 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8dcc8] flex items-center justify-center">
            <Icon name="Crown" size={12} className="text-[#0d0d0d]" />
          </div>
          <span className="text-lg font-bold text-[#c9a84c]" style={{ fontFamily: "'Playfair Display', serif" }}>GIFTURA</span>
        </div>
        <p className="text-[#a89070] text-xs tracking-wider" style={{ fontFamily: "sans-serif" }}>© 2024 GIFTURA — Премиальные подарочные наборы. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;