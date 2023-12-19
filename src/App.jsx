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

  const handleZoomIn = () => {
    if (zoomLevel < 200) {
      setZoomLevel(zoomLevel + 10);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 10) {
      setZoomLevel(zoomLevel - 10);
    }
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
          <div
            className="left2"
            style={{
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: "top left",
            }}
          >
            <img
              className="w-[500px] h-[100%] object-fill"
              src={imageSelected}
              alt=""
            />
          </div>
        </div>
        <div>
          {" "}
          <button onClick={handleZoomIn}>Zoom In</button>
          <input
            type="range"
            min="10"
            max="200"
            step="10"
            value={zoomLevel}
            onChange={handleZoomChange}
          />
          <button onClick={handleZoomOut}>Zoom Out</button>
        </div>
      </div>
    </div>
  );
};

export default App;
