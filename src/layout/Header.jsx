import "./header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faUsers, faFeatherPointed } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return (
        <>
            <div className="headerTop">
                <img src="../images/avatar.png" alt="" />
                <div className="headerTitle">
                    <div className="headerNameLink">
                        <h1><span>Bonjour,  </span> je suis Descorcier Michaël</h1>
                        <a className="iconSocial" href="https://www.linkedin.com/in/michael-descorcier-40568a84/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className="iconSocial" href="https://github.com/MichaelDesco"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="iconSocial" href="https://discord.gg/xCNP9ZKe"><FontAwesomeIcon icon={faDiscord} /></a>
                        <a className="iconSocial" href="https://teams.live.com/l/invite/FEA02ekIpBnM_IatwE"><FontAwesomeIcon icon={faUsers} /></a>
                    </div>
                    <h2>DÉVELOPPEUR D'APPLICATION WEB</h2>
                </div>
                <a href="#contact" className="btnContact">
                    <p>Contactez-moi</p>
                    <FontAwesomeIcon className="fa-feather-pointed" icon={faFeatherPointed} />
                </a>
            </div>
        </>
    )
}

export default Header;