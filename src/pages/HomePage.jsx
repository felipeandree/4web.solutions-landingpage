function HomePage() {
    return (
        <section className="home-page">
            <div className="home-page__overlay" />
            <img src="/logo.svg" alt="4web" className="home-page__logo" />
            <h1 className="home-page__title">Até quando</h1>
            <p className="home-page__subtitle">
                seu negócio vai ficar no deserto?
            </p>
            <a className="home-page__cta" href="#sobre">
                Conheça nosso trabalho
            </a>
        </section>
    );
}

export default HomePage;
