import './profile.scss'




const Profile = () => {
    return (
        <>
            <div className="profile">
                <div className='apropos'>
                    <h3>A propos de moi</h3>
                    <p>En reconversion depuis septembre 2022 dans le développement web.</p>
                    <p>Je me suis formé à La Piscine à Mérignac, Gironde où j'ai acquis les bases pour concevoir des sites web visuellement attrayants, fonctionnels et gérer les données.</p>
                    <p>Ma première expérience a été le développement d'un site de gestion comptable, confirmant ma capacité d'adaptation humaine et technique.</p>
                    <p>Bien que débutant, ma passion pour ce métier me pousse à relever de nouveaux défis et à explorer le monde numérique avec enthousiasme.</p>
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