import React from "react";
import { useLanguage } from "../context/LanguageContext";

const CTASection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-blue-500">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {t.cta.title}
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                    {t.cta.subtitle}
                </p>
                <button className="bg-white text-blue-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                    {t.cta.button}
                </button>
            </div>
        </section>
    );
};

export default CTASection;
