import FlowerCard from "./FLowerCard.jsx";
import Cart from "./Cart.jsx";
import { useState } from "react";
import PLANTS from "data.js";
export default function App() {
  const [selectedPlant, setSelectedPlant] = useState();
  return (
    <>
      <h1>Proper Plants</h1>
      <section id="Plant List">
        {PLANTS.map((individualPlant) => {
          return (
            <>
              <FlowerCard
                flowerName={individualPlant.name}
                setSelectedPlant={setSelectedPlant}
              />
            </>
          );
        })}
      </section>

      <h2>Cart</h2>

      <ul>
        <Cart />
      </ul>
    </>
  );
}
