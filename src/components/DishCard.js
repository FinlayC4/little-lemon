function DishCard(props) {
  return (
    <article className="dish-card">
      <div className="dish-card-image">
        <img style={{width: "100%"}} src={props.src}></img>
      </div>
      <div className="dish-card-text">
        <div className="dish-card-header">
          <h4 className="dish-card-title">{props.title}</h4>
          <p className="dish-card-price">{props.price}</p>
        </div>
        <p className="dish-card-description">{props.description}</p>
      </div>
    </article>
  )
};

export default DishCard;