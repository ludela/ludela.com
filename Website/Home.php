<?php

require_once('LudelaLayoutView.php');

class HomeView extends LudelaView {
	
	public function __construct() {
		parent::__construct();

		$this->viewData["pageTitle"] = "";
		$this->viewData["pageClass"] = "home " . ( rand(1, 2) == 1 ? "testA" : "testB" );
	}

	protected function renderHead($viewModel) {
?>
		<script type="text/javascript">

window.addEventListener('DOMContentLoaded', ready );

function ready(event) {
	
	// Add the A/B test indicator to the <form> elements.
	var cls = document.getElementsByTagName('body')[0].attributes['class'].value;
	var fs = document.getElementsByTagName("fieldset");
	for(var i = 0; i < fs.length; fs++) {
		var hidden = document.createElement('input');
		hidden.type = 'hidden';
		hidden.value = cls;
		fs[i].appendChild( hidden );
	}
}

		</script>
<?php
	}

	protected function renderHero($viewModel) {
?>
	<section class="hero">
		
		<div>
			<p>LuDela Smart Flame</p>
			<p>Better Light. Better Lives.</p>

			<p class="cta"><a href="#">Get One First!</a></p>
		</div>

		<a href="#content"><span>Jump to content</span></a>
		
	</section>
<?php
	}
	
	protected function renderMain($viewModel) {
?>

<section class="emailForm">

	<h2>We're the first, will you join us?</h2>
	<p>LuDela is the world’s first <em>real-flame</em> smart candle, with a warm mission to deliver better light and better lives to people around the world. Our smartphone controlled candle is the most convenient, safest and truly hassle-free candle, making it the smartest flame ever.</p>

	<form action="#" method="post">
		<fieldset>

			<label>Sign up to be amongst the first to <br /><span>get a LuDela Candle at 50% off!</span></label>

			<input type="text" name="email" placeholder="Enter your email address..." /><button type="submit">Sign Up</button>

		</fieldset>
	</form>

</section>

<article id="content">

	<section class="home-phoneApp">

		<div class="imgWrap">
			<img src="Content/Home-PhoneApp-1267x846.jpg" alt="Photo of smartphone app in action." />
		</div>

		<div class="content">

			<h2>Smart is Smarter</h2>

			<p>Pair real flame candles with your smart phone in seconds and control every aspect of them from there on.</p>
			<p>Turn any simple room into one filled with ambiance with just one tap.</p>
			<p>Add safety features to keep your home and loved ones safer.</p>
			<p>Have us ship your candle refills automatically so you’ll never need to worry about running out of warm candle light ever again.</p>

		</div>

	</section>

	<section class="home-bullets twoColumnContainer">

		<div>
			<h3>Convenience</h3>
			<ul>
				<li>Multi zone control</li>
				<li>Mess-free wax</li>
				<li>Tunnel-free bright flame</li>
				<li>Customizable outer shells</li>
				<li>Affordable refills</li>
				<li>Seasonal scented subscriptions</li>
			</ul>
		</div>

		<div>
			<h3>Safety</h3>
			<ul>
				<li>Child-lock</li>
				<li>Auto-extinguish</li>
				<li>Safe Burn design</li>
				<li>Auto timers</li>
				<li>Smart wicks</li>
				<li>No matches!</li>
			</ul>
		</div>

	</section>

	<section class="home-betterLives">

		<div class="imgWrap">
			<img src="Content/Home-BetterLives-541x797.jpg" alt="Photo of woman holding lightbulb." />
		</div>

		<div class="content">

			<em class="almostHeading">1,300,000,000 people without lights.</em>

			<h2>Better light, better lives</h2>

			<p>Over 1.3 Billion people globally still live without electricity, cutting their days in half, stopping children and adults alike from reading, learning, working and progressing. For others, their form of light is a toxic kerosene lamp costing them small fortunes per day.</p>

			<p><strong>To replace any dark study corner or a dining room filled with kerosene, LuDela will donate a safe, solar-rechargeable light for every smart candle sold.</strong></p>

		</div>

	</section>

	<section class="emailForm">

		<form action="#" method="post">
			<fieldset>

				<label>Stay informed on the LuDela movement <span>&amp; get 50% off too!</span></label>

				<input type="text" name="email" placeholder="Enter your email address..." /><button type="submit">Sign Up</button>

			</fieldset>
		</form>

	</section>

</article>

<?php
	}
	
}

$viewModel = array();

$view = new HomeView();
$view->render( $viewModel );

?>