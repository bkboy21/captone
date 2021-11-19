import { Link } from "react-router-dom";


export default function Footer() {

	return (
		<footer class="footer-distributed">

			<div class="footer-left">
				<h3><span>Gratitude Board</span></h3>
				<p class="footer-company-about">
					
        According to Harvard Health, gratitude is “a thankful appreciation for what an individual receives, whether tangible or intangible.” </p>
				

				<p class="footer-company-name">© 2021 Gratitude Board Ltd.</p>
			</div>

			<div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					<p>
						<span>
							10 E 21st St #2, New York, NY 10010
						</span>
					</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>(718)-885-7482</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@gaclub.com">info@mybsd.us</a></p>
				</div>
			</div>
			<div class="footer-right">
				
				<div >
				<div className="teamLinks">
						
						
						<div className='team'>
							<h2>Nir E. </h2>
							<a href="https://github.com/bkboy21">Github</a>
							<a href="https://www.linkedin.com/in/nir-elias/">Linkedin</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}