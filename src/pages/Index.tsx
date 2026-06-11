export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">FLAME*BITE</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Акции</a>
          <a href="#">Адрес</a>
        </nav>
        <a href="https://t.me/flamebite" target="_blank" rel="noopener noreferrer"><button className="btn-cta">Заказать</button></a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              СОЧНО,
              <br />
              ДЕРЗКО, <span>ВКУСНО</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Настоящие смэш-бургеры из мраморной говядины. Никакой воды — только мясо, огонь и фирменный соус. Ретро-вайб, который хочется пережить снова.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="https://t.me/flamebite" target="_blank" rel="noopener noreferrer">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                  Заказать сейчас
                </button>
              </a>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ТОЛЬКО
              <br />
              ГОВЯДИНА
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #СМЭШБУРГЕР
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ОГОНЬ🔥
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * FLAMEBITE * СМЭШ-БУРГЕРЫ ИЗ МРАМОРНОЙ ГОВЯДИНЫ * ОТКРЫТЫ ДО 23:00 * ТОЛЬКО ОГОНЬ * FLAMEBITE * СМЭШ-БУРГЕРЫ ИЗ МРАМОРНОЙ ГОВЯДИНЫ * ОТКРЫТЫ ДО 23:00 * ТОЛЬКО ОГОНЬ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТЫ МЕНЮ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/c7bc3abf-1ddf-4145-8fa9-d14f7776c3f6/files/c0fcdf33-0494-4c4b-8ca8-a646f913cb9e.jpg"
                alt="Смэш Классик"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Смэш Классик</h3>
                  <span className="price">490 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Двойной смэш из мраморной говядины, фирменный соус, маринованные огурцы, карамелизованный лук на бриоши.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Острое
              </span>
              <img
                src="https://cdn.poehali.dev/projects/c7bc3abf-1ddf-4145-8fa9-d14f7776c3f6/files/83fec758-0b9f-4ba4-b33e-49ef5fe13245.jpg"
                alt="Огненный Чикен"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Огненный Чикен</h3>
                  <span className="price">450 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Хрустящая курица, халапеньо, соус шрирача, коул-слоу — для тех, кто не боится жара.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Народный выбор
              </span>
              <img
                src="https://cdn.poehali.dev/projects/c7bc3abf-1ddf-4145-8fa9-d14f7776c3f6/files/db7f4b43-06dc-4506-bbb4-2d5d0d0bed6a.jpg"
                alt="FlameBite"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>FlameBite</h3>
                  <span className="price">550 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Фирменный бургер: двойная котлета, трюфельный соус, чеддер, свежие томаты и айсберг. Без компромиссов.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "#8B4513", color: "white" }}>
                Новинка
              </span>
              <img
                src="https://cdn.poehali.dev/projects/c7bc3abf-1ddf-4145-8fa9-d14f7776c3f6/files/70bae675-8407-46cc-9e4b-7c4437b9fc34.jpg"
                alt="Смоки Бэкон"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Смоки Бэкон</h3>
                  <span className="price">520 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Говядина смэш, хрустящий бекон, BBQ-соус, чеддер, карамелизованный лук. Дымно и по-настоящему.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "#556B2F", color: "white" }}>
                Вегетарианское
              </span>
              <img
                src="https://cdn.poehali.dev/projects/c7bc3abf-1ddf-4145-8fa9-d14f7776c3f6/files/5c4d2c68-40d9-4202-a995-64624d2e846f.jpg"
                alt="Гриб Швейцар"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Гриб Швейцар</h3>
                  <span className="price">420 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Жареные шампиньоны, швейцарский сыр, чесночный айоли, руккола. Не мясо — но тоже огонь.
                </p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--primary)", color: "white" }}>
                Хардкор
              </span>
              <img
                src="https://cdn.poehali.dev/projects/c7bc3abf-1ddf-4145-8fa9-d14f7776c3f6/files/85de4934-9657-4962-8a63-7d1de077a3c3.jpg"
                alt="Дабл Дэмидж"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Дабл Дэмидж</h3>
                  <span className="price">690 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Две котлеты смэш, двойной чеддер, фирменный соус, маринованные огурцы — максимальный урон по аппетиту.
                </p>
              </div>
            </div>

            {/* Item 7 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "#2c2c2c", color: "#d4af37" }}>
                Премиум
              </span>
              <img
                src="https://cdn.poehali.dev/projects/c7bc3abf-1ddf-4145-8fa9-d14f7776c3f6/files/10c846f0-2794-469e-97a9-a175b6de6521.jpg"
                alt="Чёрный Трюфель"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Чёрный Трюфель</h3>
                  <span className="price">790 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Смэш из мраморной говядины, бри, трюфельный соус, руккола, карамелизованный лук. Бургер с характером.
                </p>
              </div>
            </div>

            {/* Item 8 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "#b85c00", color: "white" }}>
                Тяжёлый
              </span>
              <img
                src="https://cdn.poehali.dev/projects/c7bc3abf-1ddf-4145-8fa9-d14f7776c3f6/files/cf66816a-0418-4df8-8217-571fa97ec9d3.jpg"
                alt="Пулд Порк"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Пулд Порк</h3>
                  <span className="price">570 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Свинина томлёная 12 часов, коул-слоу, маринованный халапеньо, мёд-горчица. Тот самый вайб.
                </p>
              </div>
            </div>

            {/* Item 9 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)", color: "white" }}>
                Море
              </span>
              <img
                src="https://cdn.poehali.dev/projects/c7bc3abf-1ddf-4145-8fa9-d14f7776c3f6/files/e9d9ac41-ca72-4aff-87ac-3a0773ce13e6.jpg"
                alt="Шримп Байт"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Шримп Байт</h3>
                  <span className="price">620 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Хрустящие тигровые креветки, острый майонез, авокадо, айсберг и лайм. Море в каждом укусе.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МЕСТО, ГДЕ ВКУСНО.</h2>
            <p className="vibe-text">
              Мы не просто бургерная. Мы — место, куда хочется возвращаться. Ретро-вайб 70-х, хрустящие котлеты на живом огне и атмосфера, где всё — по-настоящему. Без понтов, зато со вкусом.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О нас
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @FLAMEBITE
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">FLAME*BITE</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Бургерная с ретро-душой. Настоящее мясо, живой огонь и вайб 70-х. С 2024, но ощущается как 1974.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Условия
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн-Вс: 09:00 - 23:00</li>
            <li>Без выходных</li>
          </ul>
          <h4 style={{ marginTop: "20px" }}>Адрес</h4>
          <ul>
            <li>пр. Ленина, 22</li>
            <li style={{ marginTop: "10px" }}>
              <a
                href="https://yandex.ru/maps/?text=проспект+Ленина+22"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
                style={{ display: "inline-block", fontSize: "12px", padding: "8px 16px", textDecoration: "none" }}
              >
                Как добраться
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2024 FLAMEBITE</span>
          <span>БУРГЕРЫ БЕЗ КОМПРОМИССОВ</span>
          <span>VK / TG / TK</span>
        </div>
      </footer>
    </>
  );
}