
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1E2E2A] to-[#0A1612] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Origo</h2>
          <p className="text-lg text-white/80 mb-6">
            𝙊𝙧𝙞𝙜𝙤, 𝙝𝙚𝙧𝙚 𝙬𝙚 𝙜𝙤!
          </p>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            A community-driven club dedicated to environmental sustainability and social impact.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/origo.club/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com/@origo.club"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            TikTok
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61569036382861"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/origo-estin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:origo@estin.dz"
            className="text-white/80 hover:text-white transition-colors"
          >
            origo@estin.dz
          </a>
        </div>

        {/* Location */}
        <div className="text-center text-white/60">
          <p>📍 Amizour – Bejaia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;