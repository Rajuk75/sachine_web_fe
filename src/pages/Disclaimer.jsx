import { useLanguage } from "../context/LanguageContext";
import PageTemplate from "../components/PageTemplate";

const Disclaimer = () => {
  const { t } = useLanguage();

  return (
    <PageTemplate
      icon="⚠️"
      badge="Legal"
      title="Disclaimer"
      subtitle="Important information regarding your use of our website"
      gradientFrom="pink"
      gradientTo="purple"
      hideCard={true}
    >
      <div className="prose max-w-none text-gray-600">
        <p className="mb-4">
          <strong>Adshamper Pvt. Ltd.</strong> is a Digital Marketing Agency that offers Email Marketing, Web Solutions and Online Marketing Services in Kolkata and across India.
        </p>
        <p className="mb-4">
          This page contains the terms and conditions of your usage of this website. By using this website you signify your agreement to these terms. AdsHamper reserve the right to modify the information presented on this website at any time without notice. Your continued access and use of this website following the posting of any changes shall be deemed your acceptance of such changes.
        </p>
        <p className="mb-4">
          All software content such as Text, Graphics and Logos and the compilations of the components of this website are the property of or licensed by AdsHamper or provided and owned by anyone of our freelance members, if you finds anything inappropriate or violating any of your copyright, Do let us know at <a href="mailto:support@adshamper.com" className="text-pink-600 hover:underline">support@adshamper.com</a>, all the inappropriate content or copyright violating content will be removed with in 7 (seven) working days.
        </p>
        <p className="mb-4">
          This website is intended to provide information to our clients, prospective clients and website Designers, Developers and Digital Marketers. The information provided on this website to web developers are as a Learning Resources.
        </p>
        <p className="mb-4">
          This website may contain links to other websites that are not maintained by us or not under our control. AdsHamper is not responsible for the quality, safety, completeness, or accuracy of those sites. The links are provided as a convenience to you, and the linked websites are not in any manner to be considered approved, sponsored or endorsed by us.
        </p>
        <p className="mb-4">
          This website and its content may only be used as permitted by us on the site. All other uses, including reproduction, modification, distribution, transmission, republication, display or performance of the content of this website is strictly prohibited.
        </p>
        <p className="mb-4">
          If you have any further queries about the policies please email us at <a href="mailto:support@adshamper.com" className="text-pink-600 hover:underline">support@adshamper.com</a>
        </p>
      </div>
    </PageTemplate>
  );
};

export default Disclaimer;
