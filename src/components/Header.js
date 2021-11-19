import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      
        <div className="heddertop">
        <ul class="social-menu">
<li><a href="https://facebook.com/"><i class="fab fa-facebook"></i></a></li>
<li><a href="https://linkedin.com/"><i class="fab fa-linkedin"></i></a></li>
<li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
<li><a href="https://linkedin.com/"><i class="fab fa-instagram"></i></a></li>
<li><a href="https://twitter.com/"><i class="fab fa-youtube"></i></a></li>
</ul>
<audio className="audio" controls autostart="true" loop="true">
      <source className="audio" src="https://cdn.pixabay.com/download/audio/2021/11/13/audio_cb4f1212a9.mp3?filename=ambient-piano-amp-strings-10711.mp3" controls autostart="true" loop="true" />
    </audio>
          <h2 className="maintext">Gratitude Journal Will Change Your Life</h2>
        
          </div>
      
    </nav>
  );
}

export default Header;