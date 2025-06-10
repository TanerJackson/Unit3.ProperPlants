import cartItem from "./cartItem.jsx";
import { useState } from "react";

const Cart = (props) => {
  const [cartItems, setSelectedFlower] = useState();
  return (
    <>
      {cartItems.map((item) => (
        <cartItem
          key={props.id}
          item={props}
          onQuantityChange={updateQuantity}
        />
      ))}
    </>
  );
};

export default Cartn;
