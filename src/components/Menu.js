import { useState } from "react";
import { Carousel } from "react-bootstrap";

function Menu() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Tunisia-SidiBouSaid-760300645-1440x823.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sidi Bou Said</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lp-cms-production.imgix.net/features/2018/06/byrsa-hill-carthage-tunis-tunisia-2d96efe7b9bf.jpg?format=auto&crop=entropy&fit=crop&h=800&sharp=10&vib=20&w=1200"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Carthage</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dotcom-prod/images/c_fill,f_auto,g_faces:center,q_auto,w_1920/v1/wt-cms-assets/2020/04/lh2fwakxxeyizxh1csqu/countrytunisofficetunisimage1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Sidi Bou Said Marina</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


    
 
export default Menu