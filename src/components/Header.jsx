import { useEffect, useState } from "react";

const links = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#trabalhos", label: "Trabalhos" },
    { href: "#contato", label: "Contato" },
];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeHref, setActiveHref] = useState("#home");

    useEffect(() => {
        const sections = links
            .map((link) => document.querySelector(link.href))
            .filter(Boolean);

        if (!sections.length) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio,
                    );

                if (visibleEntries.length) {
                    setActiveHref(`#${visibleEntries[0].target.id}`);
                }
            },
            {
                root: null,
                threshold: [0.35, 0.55, 0.75],
                rootMargin: "-90px 0px -40% 0px",
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <header className="topbar">
            <nav className="topbar__inner" aria-label="Navegacao principal">
                <a
                    href="#home"
                    className="brand"
                    onClick={() => {
                        setActiveHref("#home");
                        setIsMenuOpen(false);
                    }}
                >
                    <img src="/logo.svg" alt="4web" className="brand__logo" />
                </a>

                <button
                    type="button"
                    className="topbar__menu-button"
                    aria-label="Abrir menu"
                    onClick={() => setIsMenuOpen((value) => !value)}
                >
                    Menu
                </button>

                <ul className={`topbar__links ${isMenuOpen ? "is-open" : ""}`}>
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => {
                                    setActiveHref(link.href);
                                    setIsMenuOpen(false);
                                }}
                                className={`topbar__link ${
                                    activeHref === link.href ? "is-active" : ""
                                }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
