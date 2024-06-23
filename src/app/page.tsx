import styles from './page.module.css';
import Navbar from '../components/Navbar.jsx';
import InfoSection from '../components/InfoSection.jsx';
import OfferSection from '../components/OfferSection.jsx';
import ScrollToTopButton from '../components/ScrollToTopButton.jsx';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="main-container">
        <Navbar />
        <InfoSection />
        <OfferSection />
        <ScrollToTopButton />
      </div>
    </main>
  );
}
