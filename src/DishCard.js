function DishCard(props) {
  return (
    <article class="dish-card">
      <div class="dish-card-image">
        <img style={{width: "100%"}} src={props.src}></img>
      </div>
      <div class="dish-card-text">
        <div class="dish-card-header">
          <h4 class="dish-card-title">{props.title}</h4>
          <p class="dish-card-price">{props.price}</p>
        </div>
        <p class="dish-card-description">{props.description}</p>
      </div>
    </article>
  )
}

export default DishCard;