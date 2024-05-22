import "../../styles/gallery.css";
import image from "../../src/assets/empty.jpeg";

function Image() {
  return (
    <div className="gallery_image">
      <img src={image} alt="gallery image" />
    </div>
  );
}

function Gallery() {
  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div className="gallery_container">
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </div>
    </section>
  );
}

export default Gallery;
