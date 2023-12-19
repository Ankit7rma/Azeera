import "./index.css";
import "./assets/1.jpg";
const App = () => {
  const images = [
    "https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V3_WG/Peridot/AZ2097-8x6_V3_WG_Peridot_Diamond_Diamond.jpg",
    "https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V4_WG/Peridot/AZ2097-8x6_V4_WG_Peridot_Diamond_Diamond.jpg",
    "https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V5_WG/Peridot/AZ2097-8x6_V5_WG_Peridot_Diamond_Diamond.jpg",
    "https://cdn.azeera.com/product/design/AZ2097-8x6.jpg",
    "https://www.azeera.com/public/AppraisalFiles/files/az2097-8x6-pr-dd-dd-wg14k.jpg?v=11",
  ];
  return (
    <div>
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
