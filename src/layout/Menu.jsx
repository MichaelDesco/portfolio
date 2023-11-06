import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './menu.scss';

const Menu = () => {
    const [isSticky, setIsSticky] = useState(false);
    const backToTopRef = useRef(null);
    const btnContactRef = useRef(null);

    useEffect(() => {
        const backToTop = backToTopRef.current;
        const btnContact = btnContactRef.current;
        const handleScroll = () => {
            if (backToTop && btnContact && window.scrollY > 100) { // Modifiez 100 selon votre préférence
                setIsSticky(true);
                backToTop.style.display = "block";
                btnContact.style.display = "block"
            } else if (backToTop) {
                setIsSticky(false);
                backToTop.style.display = "none";
                btnContact.style.display = "none"
            }
        };

        const handleBackToTopClick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth', // Pour une animation de défilement en douceur
            });
        }

        window.addEventListener('scroll', handleScroll);
        backToTop.addEventListener('click', handleBackToTopClick);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            backToTop.removeEventListener('click', handleBackToTopClick);
        };
    }, []);

    return (
        <>
            <nav className={`navHeader${isSticky ? ' sticky' : ''}`}>
                <ul>
                    <li><a href="#profile" className="btnMenu">Profile</a></li>
                    <li><a href="#formation" className="btnMenu">Formation</a></li>
                    <li><a href="#realisations" className="btnMenu">Réalisations</a></li>
                    <li><a href="#langages" className="btnMenu">Langages</a></li>
                    <li><a href="#technologies" className="btnMenu">Technologies</a></li>
                    <li ref={btnContactRef}><a href="#contact" className='btnMenu'>Contactez-moi</a></li>
                    <FontAwesomeIcon icon={faArrowUp} ref={backToTopRef} className='fa-solid fa-beat-fade' />
                </ul>
            </nav>
        </>
    );
};

export default Menu;


