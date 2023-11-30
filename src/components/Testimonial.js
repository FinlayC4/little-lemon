function Testimonial(props) {
  return (
    <article className="testimonial">
      <div className="testimonial-image">
        <img src={props.imageUrl} style={{width: "100%", height: "100%", borderRadius: "6px", objectFit: "cover"}}></img>
      </div>
      <div className="testimonial-text">
        <h4 className="testimonial-name">{props.name}</h4>
        <p className="testimonial-review">{props.review}</p>
        <div style={{display: "flex", gap: "3px", marginTop: "15px"}}>
          <div className="fa fa-star checked"></div>
          <div className="fa fa-star checked"></div>
          <div className="fa fa-star checked"></div>
          <div className="fa fa-star checked"></div>
          <div className="fa fa-star checked"></div>
        </div>
      </div>
    </article>
  )
}

export default Testimonial;