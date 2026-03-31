import { useEffect, useMemo, useRef, useState } from "react";

const projects = [
    {
        title: "Criação de e-commerce",
        description:
            "Em parceria com a plataforma Yampi estruturamos sua loja virtual com rapidez e baixo custo, clique para ver um exemplo.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Cardapio digital",
        description:
            "Criacao de cardapio integrado ao WhatsApp com sistema de delivery para aumentar a conversão do seu negocio.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Landing page",
        description:
            "Desenvolvemos cuidadosamente páginas de captação de leads para produtos, serviços e materiais digitais.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
];

function TrabalhosPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const dragStartXRef = useRef(null);
    const currentProject = useMemo(
        () => projects[currentIndex],
        [currentIndex],
    );

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 4500);

        return () => window.clearInterval(intervalId);
    }, []);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1,
        );
    };

    const handlePointerDown = (event) => {
        dragStartXRef.current = event.clientX;
    };

    const handlePointerUp = (event) => {
        if (dragStartXRef.current === null) {
            return;
        }

        const deltaX = event.clientX - dragStartXRef.current;
        dragStartXRef.current = null;

        if (Math.abs(deltaX) < 40) {
            return;
        }

        if (deltaX < 0) {
            goToNext();
        } else {
            goToPrev();
        }
    };

    const handlePointerCancel = () => {
        dragStartXRef.current = null;
    };

    return (
        <section className="trabalhos-page">
            <div
                className="trabalhos-slider"
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerCancel}
            >
                <div className="trabalhos-slider__image-wrap">
                    <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="trabalhos-slider__image"
                    />
                </div>

                <div className="trabalhos-slider__content">
                    <h1>{currentProject.title}</h1>
                    <p>{currentProject.description}</p>
                    <button type="button" className="trabalhos-slider__button">
                        Veja mais
                    </button>
                </div>

                <div
                    className="trabalhos-slider__controls"
                    aria-label="Controles do carrossel"
                >
                    <button
                        type="button"
                        className="trabalhos-slider__nav"
                        onClick={goToPrev}
                        aria-label="Projeto anterior"
                    >
                        ‹
                    </button>
                    <div
                        className="trabalhos-slider__dots"
                        aria-label="Selecao de projeto"
                    >
                        {projects.map((project, index) => (
                            <button
                                type="button"
                                key={project.title}
                                className={`trabalhos-slider__dot ${
                                    currentIndex === index ? "is-active" : ""
                                }`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Ver projeto ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        className="trabalhos-slider__nav"
                        onClick={goToNext}
                        aria-label="Proximo projeto"
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
}

export default TrabalhosPage;
