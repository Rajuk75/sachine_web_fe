import React from 'react';
import { Link } from "react-router-dom";
import { FaPhone, FaUsers, FaWarehouse, FaQuestionCircle, FaLinkedin, FaInstagram, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import PATHS from "../routes/paths";
import { EXTERNAL_LINKS } from "../constants/externalLinks";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer id="contact" className="bg-white pt-20 pb-8 relative overflow-hidden">
        
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
                    
                    {/* Column 1: Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center mb-8">
                            <img 
                                className="h-24 w-auto object-contain" 
                                src="/adshamper_logo-removebg-preview.png" 
                                alt="Adshamper Logo" 
                                loading="eager"
                            />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-8">
                            Adshamper is a results-focused performance marketing company that empowers brands to engage, acquire, and retain their ideal audience using deep data insights and advanced marketing strategies.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col md:items-center">
                        <div className="w-fit text-left">
                            <h4 className="text-sm font-bold mb-6 text-gray-900 uppercase tracking-wider">Quick Links</h4>
                            <ul className="space-y-3">
                                <li><Link to={PATHS.COMPANY} className="text-gray-600 hover:text-pink-600 text-sm transition-colors">About Us</Link></li>
                                <li><Link to={PATHS.COMPANY} className="text-gray-600 hover:text-pink-600 text-sm transition-colors">Contact Us</Link></li>
                                <li><Link to={PATHS.PRIVACY_POLICY || "#"} className="text-gray-600 hover:text-pink-600 text-sm transition-colors">Privacy Policy</Link></li>
                                <li><Link to={PATHS.TERMS_OF_SERVICE || "#"} className="text-gray-600 hover:text-pink-600 text-sm transition-colors">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Contact & Socials */}
                    <div className="flex flex-col">
                        <h4 className="text-sm font-bold mb-6 text-gray-900 uppercase tracking-wider">Connect With Us</h4>
                        
                        {/* Social Icons */}
                        <div className="flex space-x-4 mb-6">
                            <a href={EXTERNAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-200 bg-blue-50 text-[#0077b5] font-medium hover:bg-blue-100 transition-colors">
                                <FaLinkedin className="w-5 h-5 animate-pulse" />
                                <span>Adshamper</span>
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <a href={`mailto:${EXTERNAL_LINKS.SUPPORT_EMAIL}`} className="flex items-center text-gray-600 text-sm hover:text-pink-600 transition-colors group">
                                <MdEmail className="text-pink-500 mr-3 w-5 h-5 flex-shrink-0 animate-pulse" />
                                <span>{EXTERNAL_LINKS.SUPPORT_EMAIL}</span>
                            </a>
                            <a href={`tel:${EXTERNAL_LINKS.PHONE}`} className="flex items-center text-gray-600 text-sm hover:text-pink-600 transition-colors group">
                                <FaPhone className="text-pink-500 mr-3 w-5 h-5 flex-shrink-0 animate-pulse" />
                                <span>{EXTERNAL_LINKS.PHONE}</span>
                            </a>
                            <a href="https://maps.google.com/?q=Hooghly,WestBengal" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 text-sm hover:text-pink-600 transition-colors group">
                                <FaMapMarkerAlt className="text-pink-500 mr-3 w-5 h-5 flex-shrink-0 animate-pulse" />
                                <span>Hooghly, WestBengal</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
                <p>© {currentYear} Adshamper. All rights reserved.</p>
                <span className="text-gray-300">|</span>
                <Link to={PATHS.DISCLAIMER} className="hover:text-pink-600 transition-colors">Disclaimer</Link>
            </div>
        </div>
    </footer>
  );
};

export default Footer;