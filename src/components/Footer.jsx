import React from 'react';
import { Link } from "react-router-dom";
import { FaPhone, FaUsers, FaWarehouse, FaQuestionCircle } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import PATHS from "../routes/paths";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-8 relative overflow-hidden">
        
        {/* Top CTA Section */}
        {/* <div className="max-w-4xl mx-auto px-4 text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Create Your Success Story</h2>
            <p className="text-gray-600 mb-8">Let's brainstorm about transforming your business operations and achieve remarkable results!</p>
            <a href="mailto:support@adshamper.com" className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition-colors shadow-lg hover:shadow-pink-200">
                support@adshamper.com
            </a>
        </div> */}

        {/* Floating Card Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-12">
            <div className="bg-white rounded-3xl border border-gray-200 p-12 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <div className="flex items-center mb-8">
                            <img 
                                className="h-12 w-auto object-contain" 
                                src="/adshamper_logo-removebg-preview.png" 
                                alt="AdsHamper Logo" 
                                loading="eager"
                            />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-8">
                            Adshamper Pvt. Ltd. is a dynamic marketing and advertising company based in Kolkata, India.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Placeholders if needed, or just keep it clean as per design */}
                        </div>
                        <div className="mt-6 space-y-3">
                            <div className="flex items-center text-gray-600 text-sm">
                                <MdEmail className="text-pink-500 mr-3 w-5 h-5" />
                                <span>support@adshamper.com</span>
                            </div>
                            <div className="flex items-center text-gray-600 text-sm">
                                <FaPhone className="text-pink-500 mr-3 w-5 h-5" />
                                <span>+91 9331156747</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-sm font-bold mb-6 text-gray-900 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to={PATHS.COMPANY} className="text-gray-600 hover:text-pink-600 text-sm transition-colors">About Us</Link></li>
                            <li><Link to={PATHS.COMPANY} className="text-gray-600 hover:text-pink-600 text-sm transition-colors">Contact Us</Link></li>
                            <li><Link to={PATHS.PRIVACY_POLICY || "#"} className="text-gray-600 hover:text-pink-600 text-sm transition-colors">Privacy Policy</Link></li>
                            <li><Link to={PATHS.TERMS_OF_SERVICE || "#"} className="text-gray-600 hover:text-pink-600 text-sm transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 3 */}
                    <div>
                        <h4 className="text-sm font-bold mb-6 text-gray-900 uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-3">
                            <li><Link to={PATHS.RESOURCES} className="text-gray-600 hover:text-pink-600 text-sm transition-colors">Blogs</Link></li>
                            <li><Link to={PATHS.RESOURCES} className="text-gray-600 hover:text-pink-600 text-sm transition-colors">Integrations</Link></li>
                            <li><Link to={PATHS.RESOURCES} className="text-gray-600 hover:text-pink-600 text-sm transition-colors">Community</Link></li>
                            <li><Link to={PATHS.RESOURCES} className="text-gray-600 hover:text-pink-600 text-sm transition-colors">Help Center</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
                <p>© {currentYear} AdsHamper. All rights reserved.</p>
                <span className="text-gray-300">|</span>
                <Link to={PATHS.DISCLAIMER} className="hover:text-pink-600 transition-colors">Disclaimer</Link>
            </div>
        </div>
    </footer>
  );
};

export default Footer;