const services = [
    {
        title: "Criação de e-commerce",
        description:
            "Em parceria com plataformas especializadas, estruturamos lojas virtuais com rapidez e baixo custo para acelerar vendas.",
    },
    {
        title: "Cardapio digital",
        description:
            "Desenvolvimento de cardápio integrado ao WhatsApp e sistema de delivery para aumentar conversão e recorrência.",
    },
    {
        title: "Landing page",
        description:
            "Páginas focadas em captação de leads para produtos, serviços e campanhas com comunicação clara e direta.",
    },
];

function ServicosPage() {
    return (
        <section className="servicos-page">
            <div className="servicos-page__heading">
                <h1>Criação positiva de valor.</h1>
                <p>
                    Fazemos para sua empresa melhorar no digital e vender mais.
                    Soluçoes práticas com foco em performance.
                </p>
            </div>

            <div className="servicos-grid">
                {services.map((service) => (
                    <article key={service.title} className="service-card">
                        <div className="service-card__media" />
                        <div className="service-card__body">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ServicosPage;
