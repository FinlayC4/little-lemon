function Nav() {
  const navItems = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];
  return (
    <nav>
      {
        navItems.map((item) => {
          if (item === "Home") {
            return <a style={{backgroundColor: "#F4CE14", padding: "5px 10px", borderRadius: "30px"}} href="/">{item}</a>;
          } else {
            return <a href={item.toLowerCase()}>{item}</a>;
          }
        })
      }
    </nav>
  );
}

function Header() {
  return (
    <header>
      <div id="site-logo">
        <img src="/littlelemon.png" alt="Little Lemon site logo" style={{height: "100%"}}></img>
      </div>
      <Nav></Nav>
    </header>
  );
}

export default Header;