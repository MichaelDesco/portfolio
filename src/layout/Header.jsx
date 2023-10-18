import "./header.scss";

const Header = () => {
    return (
        <>
            <div className="headerTop">
                <img src="../images/avatar.png" alt="" />
                <div className="headerTitle">
                    <h1>Descorcier Michaël</h1>
                    <h2>Développeur d'application Web & Mobile</h2>
                </div>
                <a href="#contact" className="btnContact">Contactez-moi</a>
            </div>
        </>
    )
}

export default Header;