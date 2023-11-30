import DishCard from "./DishCard.js";

const dishes = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description: "A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious.",
    src: "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg?quality=90&resize=556,505"
  },
  {
    title: "Bruschetta",
    price: "$12.99",
    description: "Bruschetta with tomato and basil! Chopped fresh tomatoes with garlic, basil, olive oil, and vinegar, served on toasted slices of French or Italian bread.",
    src: "https://www.honeywhatscooking.com/wp-content/uploads/2021/05/B8A9DFCE-A8E5-401F-8FD5-DFA9896B7752_1_105_c.jpg"
  },
  {
    title: "Lemon Dessert",
    price: "$5.99",
    description: "Scrumptious lemon drizzle that tastes amazing. Incredibly moist with a double lemon hit from a syrup drizzle and lemon.",
    src: "https://www.cookingwithmykids.co.uk/wp-content/uploads/2019/12/lemon-drizzle-cake39-scaled.jpg"
  }
]


function Highlights() {
  return (
    <section id="specials-section">
      <div id="specials-container">
        <div id="specials-header">
          <h2 id="specials-title" className="section-title">Specials</h2>
          <button id="online-menu-button">Online Menu</button>
        </div>
        <p style={{marginBottom: "40px", fontFamily: "'Karla', sans-serif", fontSize: "16px", fontWeight: "500"}}>Check out this week's specials ranging from mains to desserts.</p>
        <div id="card-container">
          {
            dishes.map((dish) => {
              return <DishCard {...dish}></DishCard>;
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Highlights;