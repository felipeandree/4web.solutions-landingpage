function Footer() {
    return (
        <footer className="border-t border-slate-800/80 bg-slate-950">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
                <p>
                    © {new Date().getFullYear()} 4web. Todos os direitos
                    reservados.
                </p>
                <p>
                    Sites, sistemas e automações para empresas que querem
                    crescer.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
