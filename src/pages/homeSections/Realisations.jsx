import React, { useEffect, useState, useMemo } from 'react';
import './realisations.scss';

const Realisations = () => {
    const text = "Réalisations";

    useEffect(() => {
        const animateText = () => {
            const letterElements = document.querySelectorAll('.letter');
            letterElements.forEach((letter, index) => {
                letter.style.setProperty('--i', index + 1);
                setTimeout(() => {
                    letter.classList.add('animate');
                }, index * 100); // Ajoutez un délai de 100 ms entre chaque lettre
            });
        };

        animateText();
    }, []);

    const paragraphs = useMemo(() => [
        `<span class="titleTransition">Patience :</span><br />
            La programmation et la résolution de problèmes informatiques peuvent être frustrantes.<br />
            Il est essentiel de rester calme et patient lorsqu'on est confronté à des difficultés.`,
        `<span class="titleTransition">Autonomie :</span><br />
            Les développeurs web doivent être capables de travailler de manière indépendante et prendre des initiatives pour résoudre des problèmes.`,
        `<span class="titleTransition">Créativité :</span><br />
            Être capable de penser de manière créative est essentiel pour concevoir des solutions innovantes et résoudre des problèmes complexes.`,
        `<span class="titleTransition">Attention aux détails :</span><br />
            Les petits détails peuvent avoir un impact important sur le fonctionnement d'un site web.<br />
            Une grande attention aux détails est donc essentielle pour éviter les erreurs.`,
        `<span class="titleTransition">Esprit d'équipe :</span><br />
            Travailler en équipe est souvent nécessaire pour développer des projets web.<br />
            Savoir collaborer, écouter les autres et communiquer efficacement est donc important.`,
        `<span class="titleTransition">Flexibilité :</span><br />
            Le domaine du développement web évolue rapidement, et il est essentiel d'être ouvert au changement et de s'adapter aux nouvelles technologies et méthodes.`,
        `<span class="titleTransition">Gestion du temps :</span><br />
            Les développeurs web doivent être capables de gérer leur temps efficacement pour respecter les délais et les priorités.`,
        `<span class="titleTransition">Communication :</span><br />
            La capacité à communiquer clairement, que ce soit avec des collègues, des clients ou des utilisateurs, est cruciale.`,
        `<span class="titleTransition">Respect des normes et des bonnes pratiques :</span><br />
            Un bon développeur web doit être soucieux de la qualité du code, du respect des normes de l'industrie et de l'adoption des bonnes pratiques de développement.`,
        `<span class="titleTransition">Curiosité :</span><br />
            La technologie évolue rapidement, et les développeurs web doivent être curieux et désireux d'apprendre constamment de nouvelles choses.`,
        `<span class="titleTransition">Résolution de problèmes :</span><br />
            La capacité à identifier, analyser et résoudre des problèmes est au cœur du travail d'un développeur web.`,
        `<span class="titleTransition">Éthique professionnelle :</span><br />
            Les développeurs web doivent faire preuve d'intégrité, respecter les normes de confidentialité et traiter éthiquement les données des utilisateurs.`,
        `<span class="titleTransition">Gestion du stress :</span><br />
        Le développement web peut être stressant, en particulier lorsque des délais sont serrés.<br />
        Savoir gérer le stress est essentiel pour maintenir la qualité du travail.`,
        `<span class="titleTransition">Adaptabilité :</span><br />
            Être capable de s'adapter à différents projets, langages de programmation et technologies est important pour rester compétitif.`,
        `<span class="titleTransition">Orientation utilisateur :</span><br />
            Garder à l'esprit les besoins et les expériences des utilisateurs finaux lors du développement est essentiel pour créer des sites web conviviaux.`
    ], [])

    const [currentParagraph, setCurrentParagraph] = useState(0);

    useEffect(() => {
        const paragraphInterval = setInterval(() => {
            setCurrentParagraph((prevParagraph) =>
                prevParagraph < paragraphs.length - 1 ? prevParagraph + 1 : 0
            );
        }, 6000); // Change paragraph every 10 seconds

        return () => {
            clearInterval(paragraphInterval);
        };
    }, [paragraphs]);


    return (
        <>
            <div className="realisations">
                <div className='waviy'>
                    <h3>
                        {text.split('').map((letter, index) => (
                            <span key={index} className='letter animate'>{letter}</span>
                        ))}
                    </h3>
                </div>
                <div className='projects'>
                    <div className='project'>
                        <div className="cardFront">
                            <img src="./images/holyLogo.png" alt="" />
                        </div>
                        <div className="cardBack">
                            <img src="./images/holySite.png" alt="" />
                            <a className='btnBackCard' href="https://github.com/MichaelDesco/holyBurgerFront">Voir le code du Front</a>
                            <a className='btnBackCard' href="https://github.com/MichaelDesco/holyBurgerApiRest">Voir le code du back</a>
                        </div>
                    </div>
                    <div className='project'>
                        <div className="cardFront">
                            <img src="./images/cospaceHouse.gif" alt="" />
                        </div>
                        <div className="cardBack"></div>
                    </div>
                    <div className='project'>
                        <div className="cardFront">
                            <i className='fas fa-arrow-up' />
                        </div>
                        <div className="cardBack"></div>
                    </div>
                    <div className='project'>
                        <div className="cardFront"></div>
                        <div className="cardBack"></div>
                    </div>
                </div>
            </div>
            <div className='transition'>
                {paragraphs.map((paragraph, index) => (
                    <p
                    key={index}
                    className={`transition-paragraph ${index === currentParagraph ? 'show' : ''} ${index !== currentParagraph ? 'fade-out' : ''}`}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                ></p>
                ))}
            </div>
        </>
    )
}
export default Realisations;


