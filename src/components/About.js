function About() {
  return (
    <section id="about-section">
      <div id="about-container">
        <div id="about-text">
          <h2 className="section-title">Little Lemon</h2>
          <h3 id="about-subheading">Chicago</h3>
          <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
            <br></br>
            <br></br>
            To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
        </div>
        <div id="about-image">
          <img style={{width: "100%", borderRadius: "10px"}} src="https://www.furniturelightingdecor.com/sites/default/files/styles/max_1300x1300/public/2020-06/1_Meso_PChang-1038.jpg?itok=gQQ0iZZQ"></img>
        </div>
      </div>
    </section>
  );
};

export default About;