import './profile.scss'

const Profile = () => {
    return (
        <>
            <div className="profile">
                <div className='apropos'>
                    <h3>A propos de moi</h3>
                    <p>Bonjour, je suis Michaël Descorcier, développeur web junior tout récemment diplômé.</p>
                    <p>Mes expériences professionnel varié, allant de la construction à l'aéronautique, m'ont dotées d'une précieuse capacité d'adaptation, de résolution de défis complexes et de travail en équipe. Cette polyvalence et ma passion pour les nouvelles technologies depuis l'adolescence, m'ont naturellement orienté vers la programmation.</p>
                    <p>Je souhaite consacrer mon énergie à contribuer au développement de solutions digitales ayant un impact concret sur notre quotidien. Cette aventure passionnante dans un domaine en constante mutation, qui requiert une formation continue et met en avant la recherche de solutions, constitue une grande source de motivation et d'intérêt pour moi.</p>
                    <p>Certes, je suis un développeur web débutant avec peu d'expérience professionnelle dans le secteur, mais je suis passionné par ce métier et impatient de relever de nouveaux défis, de m'épanouir au sein d'équipes de développeurs, et de participer à cette passionnante exploration numérique.</p>
                </div>
            </div>
            <div className="actuellement">
                <h4>Actuellement</h4>
                <p>
                    <span className='mot mot1'>EN </span> 
                    <span className='mot mot2'>RECHERCHE </span> 
                    <span className='mot mot3'>D'EMPLOI</span>
                </p>
            </div>
        </>
    )
}
export default Profile;