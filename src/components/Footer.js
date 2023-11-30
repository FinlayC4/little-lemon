function Footer() {
   return (
    <footer>
      <div id="footer-container">
         <img style={{width: "60px"}} src="/footerlogo.png"></img>
         <div>
            <h4 className="footer-nav-heading">Doormat Navigation</h4>
            <p>Home</p>
            <p>About</p>
            <p>Menu</p>
            <p>Reservations</p>
            <p>Order Online</p>
            <p>Login</p>
         </div>
         <div>
            <h4 className="footer-nav-heading">Contact</h4>
            <p>Address</p>
            <p>Phone number</p>
            <p>Email</p>
         </div>
         <div>
            <h4 className="footer-nav-heading">Social Media</h4>
            <p>Facebook</p>
            <p>Instagram</p>
         </div>
      </div>
    </footer>
   );
};

export default Footer;