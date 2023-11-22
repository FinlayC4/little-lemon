import Button from "./Button.js"
import DishCard from "./DishCard.js"
import Testimonial from "./Testimonial.js"

function Main() {
  const dishes = [
    {
      title: "Greek Salad",
      description: "A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious.",
      price: "$12.99",
      src: "https://www.spendwithpennies.com/wp-content/uploads/2023/08/Greek-Salad-SpendWithPennies-23-101-800x1200.jpg"
    },
    {
      title: "Bruschetta",
      description: "Bruschetta with tomato and basil. Chopped fresh tomatoes with garlic, basil, olive oil, and vinegar, served on toasted slices of French or Italian bread.",
      price: "$5.99",
      src: "https://www.honeywhatscooking.com/wp-content/uploads/2021/05/B8A9DFCE-A8E5-401F-8FD5-DFA9896B7752_1_105_c.jpg"
    },
    {
      title: "Lemon Dessert",
      description: "Soft and tender lemon cake with cream cheese buttercream and fresh lemons.",
      price: "$5.00",
      src: "https://www.serendipitycakecompany.co.uk/wp-content/uploads/2020/04/Lemon-Drizzle-Cake-1080x675.jpeg"
    },
  ]

  return (
    <main>
      <section id="hero-section">
        <div id="hero-container">
          <div id="hero-text">
            <h1>Little Lemon</h1>
            <h3 id="hero-subheading">Chicago</h3>
            <p id="hero-paragraph">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button style={{marginTop: "25px"}}>Reserve a table</Button>
          </div>
          <div id="hero-image">
            <img alt="Dishes of food layed out on a table." src="/heroimage.webp" style={{width: "100%", height: "250px", maxWidth: "450px", objectFit: "cover", borderRadius: "10px"}}></img>
          </div>
        </div>
      </section>

      <section id="highlights-section">
        <div id="highlights-container">
          <div id="highlights-header">
            <h2 id="highlights-title">Specials</h2>
            <Button>Online Menu</Button>
          </div>
          <p style={{marginBottom: "40px", fontFamily: "'Karla', sans-serif", fontSize: "16px", fontWeight: "500"}}>Check out this week's specials, from main dishes to desserts.</p>
          <div id="card-container">
            {
              dishes.map((dish) => {
                return <DishCard {...dish}></DishCard>;
              })
            }
          </div>
        </div>
      </section>
      
      <section id="testimonials-section">
        <div id="testimonials-container">
          <Testimonial review="Service is incredible and food tastes amazing; a great place to order from." name="Darwinda" imageUrl="https://cdn.theconversation.com/avatars/1286529/width238/Person_Hannibal_001.jpg"></Testimonial>
          <Testimonial></Testimonial>
        </div>
      </section>
    </main>
  )
}

export default Main;