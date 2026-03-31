function ContatoPage() {
    return (
        <section className="contato-page">
            <div className="contato-page__grid">
                <article className="contato-copy">
                    <h1>Vamos transformar sua ideia em realidade.</h1>
                    <p>
                        Pronto para começar seu próximo projeto digital? Entre
                        em contato conosco hoje para uma consulta gratuita e
                        descubra como a 4web pode ajudar sua empresa a crescer.
                    </p>
                </article>

                <form className="contato-form">
                    <input
                        type="text"
                        placeholder="Nome Completo"
                        aria-label="Nome Completo"
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        aria-label="E-mail"
                    />
                    <input
                        type="tel"
                        placeholder="Telefone"
                        aria-label="Telefone"
                    />
                    <textarea
                        rows="6"
                        placeholder="Mensagem"
                        aria-label="Mensagem"
                    />
                    <button type="submit">Enviar Mensagem</button>
                </form>
            </div>

            <div className="contato-page__footer">
                <p>contato@4web.com.br</p>
                <p>(11) 99999-9999</p>
            </div>
        </section>
    );
}

export default ContatoPage;
