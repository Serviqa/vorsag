import line from "../assets/line.svg";
import image1 from "../assets/national-executives1.jpg";
import image2 from "../assets/img1.jpg";
import image3 from "../assets/img2.jpg";
import image4 from "../assets/img3.jpg";
import image5 from "../assets/img4.jpg";
import image6 from "../assets/img0.jpg";
import image7 from "../assets/img5.jpg";
import image8 from "../assets/img6.jpg";

function Image() {
  const images = [
    { src: image1, alt: "VORSAG national executives" },
    { src: image2, alt: "VORSAG event photo" },
    { src: image3, alt: "VORSAG members gathering" },
    { src: image4, alt: "VORSAG community event" },
    { src: image5, alt: "VORSAG activity session" },
    { src: image6, alt: "VORSAG group photo" },
    { src: image7, alt: "VORSAG meeting" },
    { src: image8, alt: "VORSAG celebration" },
  ];

  return images.map((image, index) => (
    <img
      src={image.src}
      alt={image.alt}
      className="gallery_image"
      key={index}
      loading="lazy"
    />
  ));
}

function Gallery() {
  return (
    <section id="gallery" className="gallery" aria-label="Photo gallery">
      <h2>Gallery</h2>
      <img src={line} alt="Decorative line" className="line" />
      <div className="gallery_container">
        <Image />
      </div>
    </section>
  );
}

export default Gallery;
