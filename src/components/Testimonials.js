import Testimonial from "./Testimonial.js";

function Testimonials() {
  return (
    <section id="testimonials-section">
      <div id="testimonials-container">
        <h2 className="section-title">Testimonials</h2>
        <p>Testimonials written by our customers; here what they have to say.</p>
        <div id="testimonials">
          <Testimonial review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu viverra diam." name="Mohammed" imageUrl="https://cdn.theconversation.com/avatars/1286529/width238/Person_Hannibal_001.jpg"></Testimonial>
          <Testimonial review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu viverra diam." name="Alice" imageUrl="https://t3.ftcdn.net/jpg/05/52/15/68/360_F_552156839_hQTIBjd35zljkgSz65pDaUUSyKK53DtZ.jpg"></Testimonial>
          <Testimonial review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu viverra diam." name="Matthew" imageUrl="https://images.squarespace-cdn.com/content/v1/5b7e685d8ab722146afd7529/1564600902218-403CMIW9V4G2UC13A25W/PP_01.jpg"></Testimonial>
          <Testimonial review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu viverra diam." name="Matthew" imageUrl="https://images.squarespace-cdn.com/content/v1/5b7e685d8ab722146afd7529/1564600902218-403CMIW9V4G2UC13A25W/PP_01.jpg"></Testimonial>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;