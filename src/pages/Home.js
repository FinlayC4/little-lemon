import Hero from "../components/Hero.js";
import Specials from "../components/Specials.js";
import Testimonials from "../components/Testimonials.js";
import About from "../components/About.js";

function Home() {
  return (
    <main>
      <Hero></Hero>
      <Specials></Specials>
      <Testimonials></Testimonials>
      <About></About>
    </main>
  )
}

export default Home;