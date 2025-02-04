import { useState } from 'react';

const NatureGallery = ({
    title = "Landscapes of Earth",
    subtitle = "Visual Journey Through Natural Wonders",
    images = [
        { src: "/api/placeholder/400/600", category: "Forests", wide: false }, // Tall image
        { src: "/api/placeholder/800/400", category: "Mountains", wide: true }, // Wide image
        { src: "/api/placeholder/400/500", category: "Oceans", wide: false }, // Tall image
        { src: "/api/placeholder/800/300", category: "Deserts", wide: true }, // Wide image
        { src: "/api/placeholder/400/400", category: "Lakes", wide: false }, // Square image
        { src: "/api/placeholder/800/500", category: "Valleys", wide: true }, // Wide image
        { src: "/api/placeholder/400/700", category: "Waterfalls", wide: false }, // Tall image
        { src: "/api/placeholder/800/400", category: "Canyons", wide: true }, // Wide image
    ]
}) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="bg-gradient-to-br from-[#1E2E2A] to-[#0A1612] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center text-white mb-12">
                    <p className="text-lg text-white/60 uppercase tracking-widest mb-2">{subtitle}</p>
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight">{title}</h1>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px, auto)]">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`relative group cursor-pointer transform transition-all hover:scale-105 ${
                                image.wide ? 'sm:col-span-2' : 'sm:col-span-1'
                            }`}
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="bg-white/10 absolute inset-0 rounded-2xl transform group-hover:-rotate-3 transition-transform duration-300"></div>
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg border-2 border-white/20">
                                <img
                                    src={image.src}
                                    alt={image.category}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
                                    <span className="text-lg font-semibold">{image.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for Selected Image */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 cursor-pointer"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="max-w-4xl w-full mx-auto">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.category}
                                className="w-full max-h-[80vh] object-contain rounded-2xl"
                            />
                            <p className="text-white text-center mt-4 text-2xl font-semibold">
                                {selectedImage.category}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export { NatureGallery };