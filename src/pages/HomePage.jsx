import { useEffect, useRef, useState } from 'react';

function HomePage() {
    const heroRef = useRef(null);
    const [isIntroReady, setIsIntroReady] = useState(false);

    useEffect(() => {
        let frameId = 0;
        let introTimerId = 0;

        const updateParallax = () => {
            frameId = 0;

            if (!heroRef.current) {
                return;
            }

            const viewportHeight = window.innerHeight || 1;
            const progress = Math.min(window.scrollY / (viewportHeight * 1.2), 1);

            heroRef.current.style.setProperty(
                '--parallax-progress',
                progress.toFixed(4)
            );
        };

        const scheduleUpdate = () => {
            if (frameId) {
                return;
            }

            frameId = window.requestAnimationFrame(updateParallax);
        };

        updateParallax();
        introTimerId = window.setTimeout(() => {
            setIsIntroReady(true);
        }, 80);

        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);

        return () => {
            if (frameId) {
                window.cancelAnimationFrame(frameId);
            }

            window.clearTimeout(introTimerId);
            window.removeEventListener('scroll', scheduleUpdate);
            window.removeEventListener('resize', scheduleUpdate);
        };
    }, []);

    return (
        <section
            className={`home-page${isIntroReady ? ' is-intro-ready' : ''}`}
            ref={heroRef}
        >
            <div className="home-page__sky" />
            <div className="home-page__cloud home-page__cloud--left" />
            <div className="home-page__cloud home-page__cloud--right" />
            <div className="home-page__dune home-page__dune--back" />
            <div className="home-page__dune home-page__dune--mid" />
            <div className="home-page__dune home-page__dune--front" />
            <div className="home-page__overlay" />

            <div className="home-page__content">
                <img src="/logo.svg" alt="4web" className="home-page__logo" />
                <h1 className="home-page__title">Até quando</h1>
                <p className="home-page__subtitle">
                    seu negócio vai ficar no deserto?
                </p>
                <a className="home-page__cta" href="#sobre">
                    Conheça nosso trabalho
                </a>
            </div>
        </section>
    );
}

export default HomePage;
