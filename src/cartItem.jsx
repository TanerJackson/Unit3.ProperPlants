const cartItem = ({ item, onQuantityChange }) => {
  const { id, name, image, quantity } = item;

  return (
    <div className="cart-item">
      <img src={image} alt={name} width={80} />
      <div className="details">
        <h4>{name}</h4>
        <p>Quantity: {quantity}</p>
        <button onClick={() => onQuantityChange(id, -1)}>-</button>
        <button onClick={() => onQuantityChange(id, 1)}>+</button>
      </div>
    </div>
  );
};

export default cartItem;
