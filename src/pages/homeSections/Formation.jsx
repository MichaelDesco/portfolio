import './formation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";


const Formation = () => {
    return (
        <>
            <div className='formation'>
                <div className='parcours'>
                    <div className='introParcours'>
                        <h3>Mon parcours de formation</h3>
                        <div className='experience'>
                            <img src="./images/avista.png" alt="" />
                            <div className='experienceInfo'>
                                <p>Stage développeur full stack</p>
                                <p>17 juillet 2023 - 15 septembre 2023</p>
                            </div>
                        </div>
                        <div className='experience'>
                            <img src="./images/piscine.png" alt="" />
                            <div className='experienceInfo'>
                                <p>Formation développeur d'application web & mobile</p>
                                <p>Titre RNCP niveau III obtenue en juillet 2023</p>
                                <p>16 janvier 2023 - 15 septembre 2023</p>
                            </div>
                        </div>
                        <div className='experience'>
                            <img src="./images/egs.png" alt="" />
                            <div className='experienceInfo'>
                                <p>Immersion au métier de développeur web</p>
                                <p>01 octobre 2023 - 31 octobre 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className='cvParcours'>
                        <h3>Mon CV</h3>
                        <img src="./images/cvDescoMike.jpg" alt="" />
                        <a className='cvDownload' href="https://drive.google.com/u/0/uc?id=1vFbr8QnHCRlOvbqwvLZPNgj5_XGc9Ch2&export=download">
                            <FontAwesomeIcon className='fa-download fa-bounce' icon={faDownload} />
                        </a>
                    </div>
                </div>
            </div>
            <div className='objectif'>
            <h4>Objectif</h4>
            <p>
                <span className='mot mot1'>BACHELOR </span> 
                <span className='mot mot2'>DÉVELOPPEUR </span> 
                <span className='mot mot3'>WEB</span>
            </p>
            </div>
        </>
    )
}
export default Formation;