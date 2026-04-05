function ContatoPage() {
    return (
        <section className="contato-page">
            <div className="contato-page__grid">
                <article className="contato-copy">
                    <p className="contato-copy__eyebrow">Contato</p>
                    <h1>Vamos transformar sua ideia em realidade.</h1>
                    <p>
                        Pronto para começar seu proximo projeto digital? Entre
                        em contato conosco hoje para uma consulta gratuita e
                        descubra como a 4web pode ajudar sua empresa a crescer.
                    </p>

                    <div className="contato-highlights">
                        <div className="contato-highlight">
                            <strong>Resposta objetiva</strong>
                            <span>
                                Alinhamos metas, prazo e escopo logo no primeiro
                                contato.
                            </span>
                        </div>
                        <div className="contato-highlight">
                            <strong>Solucoes sob medida</strong>
                            <span>
                                Sites, landing pages e experiencias digitais
                                pensadas para conversao.
                            </span>
                        </div>
                    </div>
                </article>

                <form className="contato-form">
                    <div className="contato-form__header">
                        <p className="contato-form__kicker">Fale com a 4web</p>
                        <h2>Conte um pouco sobre o seu projeto</h2>
                    </div>

                    <label className="contato-form__field">
                        <span>Nome completo</span>
                        <input
                            type="text"
                            placeholder="Como podemos te chamar?"
                            aria-label="Nome Completo"
                        />
                    </label>

                    <div className="contato-form__row">
                        <label className="contato-form__field">
                            <span>E-mail</span>
                            <input
                                type="email"
                                placeholder="voce@empresa.com"
                                aria-label="E-mail"
                            />
                        </label>

                        <label className="contato-form__field">
                            <span>Telefone</span>
                            <input
                                type="tel"
                                placeholder="(11) 99999-9999"
                                aria-label="Telefone"
                            />
                        </label>
                    </div>

                    <label className="contato-form__field">
                        <span>Mensagem</span>
                        <textarea
                            rows="6"
                            placeholder="Descreva seu desafio, objetivo ou ideia principal."
                            aria-label="Mensagem"
                        />
                    </label>

                    <button type="submit">Enviar mensagem</button>
                </form>
            </div>

            <div className="contato-page__footer">
                <div className="contato-card">
                    <span className="contato-card__label">E-mail</span>
                    <p>contato@4web.com.br</p>
                </div>
                <div className="contato-card">
                    <span className="contato-card__label">Telefone</span>
                    <p>(11) 99999-9999</p>
                </div>
            </div>
        </section>
    );
}

export default ContatoPage;
