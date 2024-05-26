import "../../styles/gallery.css";
import line from "../../src/assets/line.svg";
import image1 from "../../src/assets/national-executives1.jpg";
import image2 from "../../src/assets/img1.jpg";
import image3 from "../../src/assets/img2.jpg";
import image4 from "../../src/assets/img3.jpg";
import image5 from "../../src/assets/img4.jpg";
import image6 from "../../src/assets/img0.jpg";
import image7 from "../../src/assets/img5.jpg";
import image8 from "../../src/assets/img6.jpg";

function Image() {
  const images = {
    0: image1,
    1: image2,
    2: image3,
    3: image4,
    4: image5,
    5: image6,
    6: image7,
    7: image8,
  };
  return Object.keys(images).map((key, index) => {
    return (
      <img
        src={images[key]}
        alt="gallery"
        className="gallery_image"
        key={index}
      />
    );
  });
}

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <img src={line} alt="line" className="line" />
      <div className="gallery_container">
        <Image />
      </div>
    </section>
  );
}

export default Gallery;
