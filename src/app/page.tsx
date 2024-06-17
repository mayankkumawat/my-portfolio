import styles from './page.module.css';
import Navbar from '../components/Navbar.jsx';
import InfoSection from '../components/InfoSection.jsx';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="main-container">
        <Navbar />
        <InfoSection />
      </div>
    </main>
  );
}
