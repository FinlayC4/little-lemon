function Testimonial(props) {
  return (
    <article class="testimonial">
      <div class="testimonial-image">
        <img src={props.imageUrl} style={{width: "100%", borderRadius: "6px"}}></img>
      </div>
      <div class="testimonial-text">
        <h4 class="testimonial-name">{props.name}</h4>
        <p class="testimonial-review">{props.review}</p>
        <div style={{display: "flex", gap: "3px", marginTop: "15px"}}>
          <div class="fa fa-star checked"></div>
          <div class="fa fa-star checked"></div>
          <div class="fa fa-star checked"></div>
          <div class="fa fa-star checked"></div>
          <div class="fa fa-star checked"></div>
        </div>
      </div>
    </article>
  )
}

export default Testimonial;