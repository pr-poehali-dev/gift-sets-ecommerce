import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/fb4832ed-b079-4808-9c7e-fb1b049edc24/files/09735e53-c888-4ea8-ab50-14ce0f883723.jpg";
const IMG2 = "https://cdn.poehali.dev/projects/fb4832ed-b079-4808-9c7e-fb1b049edc24/files/60053843-f22f-40d4-b0db-2948b6cdb5ac.jpg";
const IMG3 = "https://cdn.poehali.dev/projects/fb4832ed-b079-4808-9c7e-fb1b049edc24/files/b85e388b-3c61-4643-892b-2365d22f1eae.jpg";

const NAV_LINKS = ["Главная", "Каталог", "Услуги", "Акции", "О нас", "Отзывы", "Контакты"];

const PRODUCTS = [
  { id: 1, name: "«Утро в саду»", price: 4900, size: "small", type: "beauty", img: HERO_IMG, badge: "Хит" },
  { id: 2, name: "«Забота о себе»", price: 7800, size: "medium", type: "beauty", img: IMG3, badge: "Любимый" },
  { id: 3, name: "«Домашний уют»", price: 8500, size: "medium", type: "food", img: IMG2, badge: "Новинка" },
  { id: 4, name: "«Весенний ритуал»", price: 6200, size: "small", type: "beauty", img: IMG3, badge: null },
  { id: 5, name: "«Тёплые объятия»", price: 3200, size: "small", type: "food", img: HERO_IMG, badge: null },
  { id: 6, name: "«Корзина заботы»", price: 14900, size: "large", type: "food", img: IMG2, badge: "Для команды" },
];

const SERVICES = [
  { icon: "Heart", title: "С заботой о клиенте", desc: "Подберём набор, который скажет «мы думаем о вас» лучше любых слов" },
  { icon: "Truck", title: "Доставка с теплом", desc: "Привезём в срок, в красивой упаковке — как будто лично из рук" },
  { icon: "Sparkles", title: "Брендирование", desc: "Ваш логотип, ваши цвета — подарок станет частью вашей истории" },
  { icon: "MessageCircle", title: "Живая консультация", desc: "Расскажите о получателе — мы предложим то, что тронет сердце" },
];

const REVIEWS = [
  { name: "Анна Смирнова", role: "Владелец салона красоты", text: "Дарю наборы своим клиентам на дни рождения. Они в таком восторге — возвращаются снова и снова. Это лучшая инвестиция в лояльность.", stars: 5 },
  { name: "Дмитрий Козлов", role: "Директор компании", text: "Подарили сотрудникам на годовщину. Люди писали слова благодарности — такого раньше не было. Атмосфера в команде изменилась.", stars: 5 },
  { name: "Елена Петрова", role: "Предприниматель", text: "Дарю клиентам после первой сделки. Это маленький жест, но он создаёт такие отношения, которые не купишь за рекламный бюджет.", stars: 5 },
];

const PROMO = [
  { emoji: "🌸", label: "-20%", title: "10 и более наборов", desc: "Для клиентских подарков от всей команды" },
  { emoji: "🎀", label: "Бесплатно", title: "Красивая упаковка", desc: "Лента, открытка и крафт-бумага в подарок" },
  { emoji: "✨", label: "-15%", title: "Постоянным клиентам", desc: "Скидка с третьего заказа" },
];

const TYPE_LABELS: Record<string, string> = { all: "Все", beauty: "Уход", food: "Гастро", luxury: "Премиум" };
const SIZE_LABELS: Record<string, string> = { all: "Любой", small: "Мини", medium: "Стандарт", large: "Большой" };

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
    <div className="min-h-screen bg-[#faf8f5] text-[#3d3530]" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e8ddd5]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="https://cdn.poehali.dev/projects/fb4832ed-b079-4808-9c7e-fb1b049edc24/bucket/a9c9e628-8217-4130-b22d-6c3a8293c5ad.jpg"
              alt="Всегда Такая"
              className="h-28 w-auto object-contain"
              style={{ filter: "sepia(60%) saturate(0.8) brightness(0.6) hue-rotate(320deg)" }}
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`text-sm transition-colors ${activeSection === link ? "text-[#c07a5a]" : "text-[#8a7a72] hover:text-[#3d3530]"}`}
              >
                {link}
              </button>
            ))}
          </div>
          <button className="md:hidden text-[#8a7a72]" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-[#faf8f5] border-t border-[#e8ddd5] px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <button key={link} onClick={() => scrollTo(link)} className="text-left text-sm text-[#8a7a72] hover:text-[#3d3530] transition-colors">
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="Главная" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* bg blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#f5e6dc]/60 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#e8f0e8]/50 blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#f5e6dc] text-[#c07a5a] text-xs px-4 py-2 rounded-full mb-8 font-medium">
              <span>🌷</span> Подарки с заботой — для ваших клиентов
            </div>
            <h1 className="text-5xl md:text-6xl font-medium leading-[1.15] mb-6 text-[#3d3530]" style={{ fontFamily: "'Fraunces', serif" }}>
              Когда хочется<br />
              сказать{" "}
              <em className="text-[#c07a5a] not-italic">«вы важны»</em>
            </h1>
            <p className="text-[#8a7a72] text-lg leading-relaxed mb-10 max-w-md">
              Мы собираем подарочные наборы, которые предприниматели дарят клиентам и сотрудникам — и люди это чувствуют.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("Каталог")}
                className="px-8 py-4 bg-[#c07a5a] text-white text-sm font-medium rounded-full hover:bg-[#a8674a] transition-colors"
              >
                Выбрать набор
              </button>
              <button
                onClick={() => scrollTo("Контакты")}
                className="px-8 py-4 border border-[#d4c4bc] text-[#8a7a72] text-sm font-medium rounded-full hover:border-[#c07a5a] hover:text-[#c07a5a] transition-colors"
              >
                Получить консультацию
              </button>
            </div>
            <div className="mt-12 flex gap-10">
              {[["500+", "довольных клиентов"], ["98%", "хотят снова"], ["5 лет", "с любовью"]].map(([v, l]) => (
                <div key={l}>
                  <div className="text-2xl font-semibold text-[#3d3530]" style={{ fontFamily: "'Fraunces', serif" }}>{v}</div>
                  <div className="text-[#a89890] text-xs mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f5e6dc]/40 to-[#e8f0e8]/40 rounded-3xl" />
            <img
              src={HERO_IMG}
              alt="Подарочный набор"
              className="relative z-10 w-full rounded-3xl object-cover aspect-[4/5] shadow-[0_20px_60px_rgba(192,122,90,0.15)]"
            />
            <div className="absolute -bottom-4 -left-4 z-20 bg-white rounded-2xl px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="text-xs text-[#a89890] mb-1">Следующий заказ</div>
              <div className="text-sm font-medium text-[#3d3530]">«Утро в саду» · 4 900 ₽</div>
              <div className="mt-2 flex gap-1">
                {[1,2,3,4,5].map(i => <span key={i} className="text-[#e8a87c] text-xs">★</span>)}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 z-20 bg-[#e8f5e8] rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="text-2xl">🎀</div>
              <div className="text-xs text-[#5a7a5a] font-medium mt-1">Упаковка<br/>в подарок</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY GIFT */}
      <section className="py-20 bg-[#f5f0eb]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#8a7a72] text-sm uppercase tracking-widest mb-4">Почему это работает</p>
          <h2 className="text-4xl font-medium text-[#3d3530] mb-14" style={{ fontFamily: "'Fraunces', serif" }}>
            Подарок говорит то, что сложно выразить словами
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: "💛", title: "Клиент чувствует заботу", desc: "Люди помнят не прайс-лист — они помнят ощущение. Подарок создаёт его." },
              { emoji: "🔁", title: "Возвращаются сами", desc: "Компании, дарящие наборы клиентам, получают повторные обращения на 40% чаще." },
              { emoji: "🌿", title: "Ваш бренд становится живым", desc: "Набор с вашей открыткой — это часть вашей истории, которую человек унесёт домой." },
            ].map(c => (
              <div key={c.title} className="bg-white rounded-2xl p-8 text-left shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <div className="text-3xl mb-5">{c.emoji}</div>
                <h3 className="text-[#3d3530] font-medium text-lg mb-3" style={{ fontFamily: "'Fraunces', serif" }}>{c.title}</h3>
                <p className="text-[#8a7a72] text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="Каталог" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#8a7a72] text-sm uppercase tracking-widest mb-3">Наши наборы</p>
          <h2 className="text-4xl font-medium text-[#3d3530]" style={{ fontFamily: "'Fraunces', serif" }}>Каталог</h2>
        </div>

        {/* FILTERS */}
        <div className="bg-[#f5f0eb] rounded-2xl p-5 mb-10 flex flex-wrap gap-6 items-end">
          <div>
            <label className="block text-[#a89890] text-xs uppercase tracking-wider mb-2">Тип набора</label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(TYPE_LABELS).map(([k, v]) => (
                <button key={k} onClick={() => setFilterType(k)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${filterType === k ? "bg-[#c07a5a] text-white" : "bg-white text-[#8a7a72] hover:bg-[#e8ddd5]"}`}>
                  {v}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-[#a89890] text-xs uppercase tracking-wider mb-2">Размер</label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(SIZE_LABELS).map(([k, v]) => (
                <button key={k} onClick={() => setFilterSize(k)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${filterSize === k ? "bg-[#c07a5a] text-white" : "bg-white text-[#8a7a72] hover:bg-[#e8ddd5]"}`}>
                  {v}
                </button>
              ))}
            </div>
          </div>
          <div className="min-w-[200px]">
            <label className="block text-[#a89890] text-xs uppercase tracking-wider mb-2">
              До {filterPrice.toLocaleString("ru")} ₽
            </label>
            <input type="range" min={1000} max={20000} step={500} value={filterPrice}
              onChange={e => setFilterPrice(+e.target.value)}
              className="w-full accent-[#c07a5a]" />
            <div className="flex justify-between text-[#c4b4aa] text-xs mt-1">
              <span>1 000 ₽</span><span>20 000 ₽</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <div key={p.id} className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(192,122,90,0.15)] transition-all duration-500">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {p.badge && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#c07a5a] text-xs px-3 py-1 rounded-full font-medium">
                    {p.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg text-[#3d3530] mb-1 font-medium" style={{ fontFamily: "'Fraunces', serif" }}>{p.name}</h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xl font-semibold text-[#3d3530]">{p.price.toLocaleString("ru")} ₽</span>
                  <button className="flex items-center gap-2 text-sm text-[#c07a5a] hover:text-[#a8674a] transition-colors font-medium">
                    Выбрать <Icon name="ArrowRight" size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#a89890]">Нет наборов по выбранным фильтрам</div>
        )}
      </section>

      {/* SERVICES */}
      <section id="Услуги" className="py-24 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#8a7a72] text-sm uppercase tracking-widest mb-3">Как мы работаем</p>
            <h2 className="text-4xl font-medium text-[#3d3530]" style={{ fontFamily: "'Fraunces', serif" }}>Наши услуги</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(s => (
              <div key={s.title} className="bg-white rounded-2xl p-8 hover:shadow-[0_8px_30px_rgba(192,122,90,0.12)] transition-all duration-300">
                <div className="w-12 h-12 mb-5 rounded-xl bg-[#f5e6dc] flex items-center justify-center">
                  <Icon name={s.icon} size={22} className="text-[#c07a5a]" />
                </div>
                <h3 className="text-[#3d3530] font-medium mb-3" style={{ fontFamily: "'Fraunces', serif" }}>{s.title}</h3>
                <p className="text-[#8a7a72] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section id="Акции" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#8a7a72] text-sm uppercase tracking-widest mb-3">Специальные условия</p>
          <h2 className="text-4xl font-medium text-[#3d3530]" style={{ fontFamily: "'Fraunces', serif" }}>Акции</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROMO.map(pr => (
            <div key={pr.title} className="bg-gradient-to-br from-[#fdf6f2] to-[#f5ede7] rounded-2xl p-8 border border-[#e8ddd5]">
              <div className="text-4xl mb-4">{pr.emoji}</div>
              <div className="text-2xl font-semibold text-[#c07a5a] mb-2" style={{ fontFamily: "'Fraunces', serif" }}>{pr.label}</div>
              <h3 className="text-[#3d3530] font-medium text-lg mb-2">{pr.title}</h3>
              <p className="text-[#8a7a72] text-sm">{pr.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="О нас" className="py-24 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={IMG2} alt="О нас" className="w-full rounded-3xl object-cover aspect-[4/3] shadow-[0_20px_60px_rgba(0,0,0,0.08)]" />
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-6 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="text-3xl mb-1">🌿</div>
              <div className="text-sm font-medium text-[#3d3530]">Всё ручной сборки</div>
              <div className="text-xs text-[#a89890] mt-0.5">с любовью к деталям</div>
            </div>
          </div>
          <div>
            <p className="text-[#8a7a72] text-sm uppercase tracking-widest mb-4">Наша история</p>
            <h2 className="text-4xl font-medium text-[#3d3530] mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
              Мы верим, что<br />забота — это язык
            </h2>
            <p className="text-[#8a7a72] leading-relaxed mb-5">
              5 лет назад мы начали с одного ящика и большой идеи: подарок должен говорить «я подумал о тебе». С тех пор мы создали больше 10 000 наборов — каждый собирался вручную.
            </p>
            <p className="text-[#8a7a72] leading-relaxed mb-8">
              Сегодня к нам приходят предприниматели, которые хотят укрепить отношения с клиентами без пафоса — просто с теплом.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[["10 000+", "наборов собрано"], ["50+", "партнёров"], ["3 города", "доставки"], ["100%", "ручная сборка"]].map(([v, l]) => (
                <div key={l} className="bg-white rounded-xl px-5 py-4 border border-[#e8ddd5]">
                  <div className="text-xl font-semibold text-[#c07a5a]" style={{ fontFamily: "'Fraunces', serif" }}>{v}</div>
                  <div className="text-[#a89890] text-xs mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="Отзывы" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#8a7a72] text-sm uppercase tracking-widest mb-3">Говорят клиенты</p>
          <h2 className="text-4xl font-medium text-[#3d3530]" style={{ fontFamily: "'Fraunces', serif" }}>Отзывы</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map(r => (
            <div key={r.name} className="bg-[#fdf6f2] rounded-2xl p-8 border border-[#e8ddd5]">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <span key={i} className="text-[#e8a87c] text-sm">★</span>
                ))}
              </div>
              <p className="text-[#5a4e48] leading-relaxed mb-6 text-sm">«{r.text}»</p>
              <div className="border-t border-[#e8ddd5] pt-5">
                <div className="text-[#3d3530] font-medium text-sm">{r.name}</div>
                <div className="text-[#a89890] text-xs mt-0.5">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="Контакты" className="py-24 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#8a7a72] text-sm uppercase tracking-widest mb-4">Напишите нам</p>
            <h2 className="text-4xl font-medium text-[#3d3530] mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
              Расскажите о ваших клиентах — мы подберём то, что их тронет
            </h2>
            <p className="text-[#8a7a72] leading-relaxed mb-10">
              Вам не нужно знать заранее, что именно. Просто расскажите о людях — мы знаем, как сделать им приятно.
            </p>
            <div className="space-y-5">
              {[
                { icon: "Phone", label: "+7 (999) 123-45-67" },
                { icon: "Mail", label: "info@giftura.ru" },
                { icon: "MapPin", label: "Москва, Кузнецкий Мост, 10" },
                { icon: "Clock", label: "Пн–Вс: 10:00 – 21:00" },
              ].map(c => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#e8ddd5] flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={17} className="text-[#c07a5a]" />
                  </div>
                  <span className="text-[#5a4e48] text-sm">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.06)]">
            <h3 className="text-xl font-medium text-[#3d3530] mb-6" style={{ fontFamily: "'Fraunces', serif" }}>Оставить заявку</h3>
            <div className="space-y-4">
              {[
                { label: "Ваше имя", type: "text", placeholder: "Александра" },
                { label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-[#a89890] text-xs mb-1.5">{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder}
                    className="w-full bg-[#faf8f5] border border-[#e8ddd5] rounded-xl px-4 py-3 text-[#3d3530] text-sm placeholder-[#c4b4aa] focus:outline-none focus:border-[#c07a5a] transition-colors" />
                </div>
              ))}
              <div>
                <label className="block text-[#a89890] text-xs mb-1.5">Расскажите о получателях</label>
                <textarea rows={4} placeholder="Например: 15 клиентов, женщины 30–45 лет, хочется что-то уютное и ароматное..."
                  className="w-full bg-[#faf8f5] border border-[#e8ddd5] rounded-xl px-4 py-3 text-[#3d3530] text-sm placeholder-[#c4b4aa] focus:outline-none focus:border-[#c07a5a] transition-colors resize-none" />
              </div>
              <button className="w-full py-4 bg-[#c07a5a] text-white text-sm font-medium rounded-xl hover:bg-[#a8674a] transition-colors">
                Отправить заявку 🌸
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-[#e8ddd5] text-center bg-[#faf8f5]">
        <div className="flex items-center justify-center mb-3">
          <img
            src="https://cdn.poehali.dev/projects/fb4832ed-b079-4808-9c7e-fb1b049edc24/bucket/a9c9e628-8217-4130-b22d-6c3a8293c5ad.jpg"
            alt="Всегда Такая"
            className="h-20 w-auto object-contain"
            style={{ filter: "sepia(60%) saturate(0.8) brightness(0.6) hue-rotate(320deg)" }}
          />
        </div>
        <p className="text-[#a89890] text-xs">© 2024 Giftura — подарки с заботой. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;