import { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
const Footer = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <h2>Watch With Us</h2>
          <p>Stream unlimited movies & shows anytime, anywhere.</p>

          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">Movies</a>
            <a href="#">TV Shows</a>
            <a href="#">Contact</a>
          </div>

          <p className="copyright">
            © {new Date().getFullYear()} WatchWithUs. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
