function Hero() {
  return (
    <section id="hero-section">
      <div id="hero-container">
        <div id="hero-text">
          <h1>Little Lemon</h1>
          <h3 id="hero-subheading">Chicago</h3>
          <p id="hero-paragraph">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button id="reserve-table-button">Reserve a table</button>
        </div>
        <div id="hero-image">
          <img alt="Dishes of food layed out on a table." src="/heroimage.webp" style={{width: "100%", height: "250px", maxWidth: "450px", objectFit: "cover", borderRadius: "10px"}}></img>
        </div>
      </div>
    </section>
  );
}

export default Hero;