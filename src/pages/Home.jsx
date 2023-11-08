// import { Helmet } from 'react-helmet';

import Header from '../layout/Header';
import Menu from '../layout/Menu';
import Profil from './homeSections/Profil';
import Formation from './homeSections/Formation';
import Realisations from './homeSections/Realisations';
import Langages from './homeSections/Langages';
import Technologies from './homeSections/Technologies';
import Contact from './homeSections/Contact';
import Footer from '../layout/Footer';

const Home = () => {
    return(
        <>
            {/* <Helmet>
                <title>PortFolio Michaël Descorcier</title>
            </Helmet> */}

            <header id='home'>
                <Header />
                <Menu />
            </header>

            <main>
                <div id='profil'><Profil /></div>
                <div id='formation'><Formation /></div>
                <div id='realisations'><Realisations /></div>
                <div id='langages'><Langages /></div>
                <div id='technologies'><Technologies /></div>
                <div id='contact'><Contact /></div>
                
                
                
                
                
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Home;