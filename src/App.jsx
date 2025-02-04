import './App.css';
import { NatureGallery } from './components/Gallery/Gal';
import { NatureLibrary } from './components/Hero/Hero';
import Footer from './components/Footer/Footer'; // Import the Footer component

function App() {
  const images = [
    { src: "https://creatorspace.imgix.net/users/cm3hpe5u504jbo201h8gvzscd/ULjr7blwjhKGQrfU-DSC_0297.png?w=750&h=750", category: "Forests", wide: false }, // Tall image
    { src: "https://creatorspace.imgix.net/users/cm3hpe5u504jbo201h8gvzscd/AQ64fpa15ykMLOBq-Copy%2520of%2520IMG_2501.png?w=750&h=750", category: "Mountains", wide: false }, // Wide image
    { src: "https://creatorspace.imgix.net/users/cm3hpe5u504jbo201h8gvzscd/q9EfQo2RhT4UEW2o-IMG_2705.png?w=750&h=750", category: "@estin", wide: false }, // Tall image
    { src: "https://creatorspace.imgix.net/users/cm3hpe5u504jbo201h8gvzscd/umyYOnKn5SbwbBuK-WhatsApp%2520Image%25202024-11-14%2520at%252002.03.46%2520(1).jpeg?w=750&h=750", category: "🎸", wide: false }, // Wide image
    { src: "https://creatorspace.imgix.net/users/cm3hpe5u504jbo201h8gvzscd/dGno4zaQaq8ZmnEP-WhatsApp%2520Image%25202024-11-14%2520at%252003.17.45.jpeg?w=750&h=750", category: "random", wide: false }, // Square image
    { src: "https://creatorspace.imgix.net/users/cm3hpe5u504jbo201h8gvzscd/JNDQiNyrkzIroelv-WhatsApp%2520Image%25202024-11-14%2520at%252002.03.47.jpeg?w=750&h=750", category: "city", wide: false }, // Wide image
    { src: "https://creatorspace.imgix.net/users/cm3hpe5u504jbo201h8gvzscd/NbpgJecRescCRf5S-WhatsApp%2520Image%25202024-11-14%2520at%252002.03.46.jpeg?w=750&h=750", category: "chilling with the nature", wide: false }, // Tall image
    { src: "https://creatorspace.imgix.net/users/cm3hpe5u504jbo201h8gvzscd/WrZfYm0lTv7anKVj-Copy%2520of%2520IMG_2607.png?w=750&h=750", category: "origo", wide: true }, // Wide image
  ];

  // Function to handle the CTA click and open a link in a new window
  const handleCtaClick = () => {
    window.open('https://example.com', '_blank'); // Replace with your desired URL
  };

  return (
    <>
      <NatureLibrary 
        onCtaClick={handleCtaClick} // Pass the link-opening function to the Hero component
        imageSrc="https://i.pinimg.com/1200x/88/87/c8/8887c8053c82542af0bff9cda6efca37.jpg"
      />
      <NatureGallery id="gal" images={images} />
      <Footer /> {/* Add the Footer component here */}
    </>
  );
}

export default App;