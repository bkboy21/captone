import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>
        <ul class="social-menu">
<li><a href="https://facebook.com/"><i class="fab fa-facebook"></i></a></li>
<li><a href="https://linkedin.com/"><i class="fab fa-linkedin"></i></a></li>
<li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
<li><a href="https://linkedin.com/"><i class="fab fa-instagram"></i></a></li>
<li><a href="https://twitter.com/"><i class="fab fa-youtube"></i></a></li>
</ul>
          <h2 className="topline">Why a Gratitude Journal Will Change Your Life</h2>
        
          </div>
      </Link>
    </nav>
  );
}

export default Header;