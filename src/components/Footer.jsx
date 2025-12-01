import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <footer className="footer" data-theme={theme}>
      <div className="footer-inner">
        
        {/* Brand Section */}
        <div className="footer-section">
          <div className="footer-brand">
            <span className="footer-badge">A</span>
            <span className="footer-brand-name">AdsHamper</span>
          </div>
          <p className="footer-description">
            Adshamper Pvt. Ltd. is a dynamic marketing and advertising company based in Kolkata, India, dedicated to transforming the digital performance marketing space with innovation, technology, and a strong focus on measurable results.
          </p>
          <div className="footer-vision">
            <strong>🚀 Our Vision:</strong>
            <p>To become India's most trusted performance marketing and fintech advertising network, known for delivering Proof in Performance and Power in Results.</p>
          </div>
          <div className="footer-social">
            <span>{t.footer.followUs}</span>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">YouTube</a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">{t.footer.quickLinks}</h3>
          <ul className="footer-links">
            <li><a href="#welcome">{t.nav.studio}</a></li>
            <li><a href="#welcome">{t.nav.technology}</a></li>
            <li><a href="#welcome">{t.nav.solutions}</a></li>
            <li><a href="#welcome">{t.nav.company}</a></li>
            <li><a href="#welcome">{t.nav.resources}</a></li>
            <li><a href="#welcome">{t.nav.investors}</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3 className="footer-heading">{t.footer.services}</h3>
          <ul className="footer-links">
            <li><a href="#welcome">{t.footer.consulting}</a></li>
            <li><a href="#welcome">{t.footer.development}</a></li>
            <li><a href="#welcome">{t.footer.design}</a></li>
            <li><a href="#welcome">{t.footer.support}</a></li>
            <li><a href="#welcome">{t.footer.training}</a></li>
            <li><a href="#welcome">{t.footer.integration}</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">{t.footer.contactInfo}</h3>
          <div className="contact-info">
            <div className="contact-item">
              <strong>📍 {t.footer.address}:</strong>
              <p>Hooghly, West Bengal<br />Kolkata, India</p>
            </div>
            <div className="contact-item">
              <strong>📞 {t.footer.phone}:</strong>
              <p><a href="tel:+919331156747" className="contact-link">+91 9331156747</a></p>
            </div>
            <div className="contact-item">
              <strong>✉️ {t.footer.email}:</strong>
              <p>
                <a href="mailto:support@adshamper.com" className="contact-link">support@adshamper.com</a>
              </p>
            </div>
            <div className="contact-item">
              <strong>🏢 Company:</strong>
              <p>Adshamper Pvt. Ltd.<br />Performance Marketing & Ad-Tech</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="footer-copy">
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
          <div className="footer-legal">
            <a href="#privacy-policy">{t.footer.privacyPolicy}</a>
            <a href="#terms-of-service">{t.footer.termsOfService}</a>
            <a href="#welcome">Sitemap</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: linear-gradient(to bottom, #ffffff, #f9fafb);
          color: #1f2937;
          margin-top: auto;
          border-top: 2px solid #e5e7eb;
        }

        .footer[data-theme="dark"] {
          background: linear-gradient(to bottom, #111827, #000000);
          color: #ffffff;
          border-top: 2px solid #374151;
        }

        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 60px 32px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 60px;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .footer-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
          border-radius: 12px;
          font-weight: 900;
          font-size: 24px;
          margin-right: 14px;
          color: white;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .footer-brand-name {
          font-size: 24px;
          font-weight: 800;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer[data-theme="dark"] .footer-brand-name {
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-description {
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 20px;
          font-size: 15px;
        }

        .footer[data-theme="dark"] .footer-description {
          color: #9ca3af;
        }

        .footer-vision {
          margin-bottom: 24px;
          padding: 16px;
          background: rgba(59, 130, 246, 0.1);
          border-left: 3px solid #3b82f6;
          border-radius: 8px;
        }

        .footer-vision strong {
          display: block;
          color: #3b82f6;
          margin-bottom: 8px;
          font-size: 15px;
          font-weight: 700;
        }

        .footer-vision p {
          color: #6b7280;
          margin: 0;
          font-size: 14px;
          line-height: 1.6;
        }

        .footer[data-theme="dark"] .footer-vision {
          background: rgba(59, 130, 246, 0.15);
        }

        .footer[data-theme="dark"] .footer-vision strong {
          color: #60a5fa;
        }

        .footer[data-theme="dark"] .footer-vision p {
          color: #9ca3af;
        }

        .footer-social {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-social span {
          color: #374151;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer[data-theme="dark"] .footer-social span {
          color: #d1d5db;
        }

        .social-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .social-link {
          color: #ffffff;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
        }

        .social-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }

        .footer-heading {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 20px;
          color: #111827;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer[data-theme="dark"] .footer-heading {
          color: #ffffff;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links a {
          color: #6b7280;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.3s;
          display: inline-block;
        }

        .footer[data-theme="dark"] .footer-links a {
          color: #9ca3af;
        }

        .footer-links a:hover {
          color: #3b82f6;
          transform: translateX(4px);
        }

        .footer[data-theme="dark"] .footer-links a:hover {
          color: #60a5fa;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-item strong {
          display: block;
          color: #111827;
          margin-bottom: 6px;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer[data-theme="dark"] .contact-item strong {
          color: #ffffff;
        }

        .contact-item p {
          color: #6b7280;
          margin: 0;
          font-size: 14px;
          line-height: 1.6;
          font-weight: 500;
        }

        .footer[data-theme="dark"] .contact-item p {
          color: #9ca3af;
        }

        .contact-link {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          display: inline-block;
        }

        .contact-link:hover {
          color: #2563eb;
          transform: translateX(2px);
        }

        .footer[data-theme="dark"] .contact-link {
          color: #60a5fa;
        }

        .footer[data-theme="dark"] .contact-link:hover {
          color: #93c5fd;
        }

        .footer-bottom {
          border-top: 2px solid #e5e7eb;
          background: #f3f4f6;
        }

        .footer[data-theme="dark"] .footer-bottom {
          border-top: 2px solid #374151;
          background: #0a0a0a;
        }

        .footer-bottom-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 24px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-copy {
          color: #6b7280;
          font-size: 14px;
          font-weight: 600;
        }

        .footer[data-theme="dark"] .footer-copy {
          color: #9ca3af;
        }

        .footer-legal {
          display: flex;
          gap: 24px;
        }

        .footer-legal a {
          color: #6b7280;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s;
        }

        .footer[data-theme="dark"] .footer-legal a {
          color: #9ca3af;
        }

        .footer-legal a:hover {
          color: #3b82f6;
        }

        .footer[data-theme="dark"] .footer-legal a:hover {
          color: #60a5fa;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .footer-inner {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 30px 20px;
          }

          .footer-bottom-inner {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }

          .footer-legal {
            justify-content: center;
          }

          .footer-social {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .social-links {
            flex-wrap: wrap;
          }
        }

        @media (max-width: 480px) {
          .footer-inner {
            padding: 20px 16px;
          }

          .footer-bottom-inner {
            padding: 16px;
          }

          .footer-legal {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;