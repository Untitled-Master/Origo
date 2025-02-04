import { useState } from 'react';

const NatureLibrary = ({
    title = "Origo",
    subtitle = "𝙊𝙧𝙞𝙜𝙤, 𝙝𝙚𝙧𝙚 𝙬𝙚 𝙜𝙤! ✅",
    description = "A community-driven club dedicated to environmental sustainability and social impact.",
    categories = ['🌱 Greener', '🌍 Cleaner', '🚀 Better'],
    ctaText = "Explore Resources",
    imageSrc = "/api/placeholder/600/600",
    onCtaClick = () => {}
}) => {
    return (
        <div className="bg-gradient-to-br from-[#0A1612] to-[#1E2E2A] min-h-screen flex items-center justify-center px-6 py-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-white">
                    <p className="text-lg text-white/60 uppercase tracking-widest">{subtitle}</p>
                    <h1 className="text-5xl font-bold leading-tight">{title}</h1>
                    <p className="text-xl text-white/80 leading-relaxed">{description}</p>

                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium text-white/60 mr-2">Research Categories:</span>
                        {categories.map((category) => (
                            <span 
                                key={category} 
                                className="flex items-center gap-2 px-3 py-1 
                                rounded-full text-xs bg-white/10 text-white 
                                hover:bg-white/20 transition-colors"
                            >
                                {category}
                            </span>
                        ))}
                    </div>

                    <div className="pt-6">
                        <button 
                            onClick={onCtaClick}
                            className="group flex items-center gap-2 bg-white text-[#0A1612] 
                            px-6 py-3 rounded-full font-semibold text-lg 
                            hover:bg-opacity-90 transition-all"
                        >
                            {ctaText}
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>

                <div className="relative group">
                    <div className="bg-white/10 absolute inset-0 rounded-2xl transform -rotate-3"></div>
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                        <img 
                            src={imageSrc} 
                            alt="Nature Library"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { NatureLibrary };