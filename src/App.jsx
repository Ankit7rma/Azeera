// eslint-disable-next-line no-unused-vars
import Images from "./Images";
import "./index.css";
import { useState } from "react";

const App = () => {
  const images = Images;
  const [imageSelected, setImageSelected] = useState(images[0]);
  // eslint-disable-next-line no-unused-vars
  const hoverHandle = (image, index) => {
    setImageSelected(image);
  };

  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoomChange = (event) => {
    setZoomLevel(event.target.value);
  };

  return (
    <div className="h-[100vh] w-full flex  items-center justify-center flex-wrap p-5 bg-fuchsia-400">
      <div className="container w-full flex items-center justify-center m-auto gap-x-2">
        <div className="left flex flex-col gap-3 m-5">
          {images.map((image, index) => (
            <div
              key={index}
              className="img-wrap  w-16 h-16 lg:w-20 lg:h-20 border-solid cursor-pointer"
              onMouseOver={() => hoverHandle(image, index)}
            >
              <img
                className="w-14 h-14 border p-1 lg:w-16 lg:h-16 rounded-lg object-contain"
                src={image}
                alt={index}
              />
            </div>
          ))}
        </div>

        <div className="right flex flex-col flex-wrap ">
          <div
            className=""
            style={{
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: "top left",
            }}
          >
            <img
              className="w-[400px] h-[80%] object-contain"
              src={imageSelected}
              alt=""
            />
          </div>
          <div className="m-1 flex flex-col">
            <input
              type="range"
              min="10"
              max="200"
              step="10"
              value={zoomLevel}
              onChange={handleZoomChange}
            />
            <p className="m-2">Zoom Slider</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
