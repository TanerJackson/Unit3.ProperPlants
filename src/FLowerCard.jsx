const FlowerCard = (props) => {
  return (
    <>
      <a href={props.image}></a>
      <h3>{props.name}</h3>
      <button
        onClick={() => {
          props.setSelectedPlant(props.name);
        }}
      >
        Add To Cart
      </button>
    </>
  );
};

export default FlowerCard;
