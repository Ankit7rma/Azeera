import "./index.css";
import "./assets/1.jpg";
import { useState } from "react";
const App = () => {
  const images = [
    "https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V3_WG/Peridot/AZ2097-8x6_V3_WG_Peridot_Diamond_Diamond.jpg",
    "https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V4_WG/Peridot/AZ2097-8x6_V4_WG_Peridot_Diamond_Diamond.jpg",
    "https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V5_WG/Peridot/AZ2097-8x6_V5_WG_Peridot_Diamond_Diamond.jpg",
    "https://cdn.azeera.com/product/design/AZ2097-8x6.jpg",
    "https://www.azeera.com/public/AppraisalFiles/files/az2097-8x6-pr-dd-dd-wg14k.jpg?v=11",
  ];
  const [imageSelected, setImageSelected] = useState(images[0]);
  const hoverHandle = (image, index) => {
    setImageSelected(image);
  };
  return (
    <div className="h-[100vh] w-full flex  items-center justify-center bg-fuchsia-400">
      <div className="container max-w-7xl m-auto grid grid-cols-2">
        <div className=" left flex">
          <div className="left1 flex flex-col gap-3">
            {images.map((image, index) => (
              <div
                key={index}
                className="img-wrap w-20 h-20 border-solid cursor-pointer"
                onMouseOver={() => hoverHandle(image, index)}
              >
                <img
                  className="w-16 h-16 object-contain"
                  src={image}
                  alt={index}
                />
              </div>
            ))}
          </div>
          <div className="left2">
            <img
              className="w-[500px] h-[100%] object-contain"
              src={imageSelected}
              alt=""
            />
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default App;
