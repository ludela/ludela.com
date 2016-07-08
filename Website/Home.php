<?php

require_once('Code/Common.php');

require_once('LudelaLayoutView.php');

class HomeView extends LudelaView {
	
	public function __construct() {
		parent::__construct();

		$this->viewData["pageTitle"] = "";
		$this->viewData["pageClass"] = "home " . ( rand(1, 2) == 1 ? "testA" : "testB" );
	}

	protected function renderHero($viewModel) {
?>
	<section>
		<p>LuDela Smart Flame</p>
		<p>Better Light. Better Lives.</p>

		<p class="cta"><a href="#">Get One First!</a></p>
	</section>
<?php
	}
	
	protected function renderMain($viewModel) {
?>

<section class="home-email">

	<h2>We're the first, will you join us?</h2>
	<p>LuDela is the world’s first real-flame smart candle, with a warm mission to deliver better light and better lives to people around the world. Our smartphone controlled candle is the most convenient, safest and truly hassle-free candle, making it the smartest flame ever.</p>

	<form action="#" method="post">
		<fieldset>

			<label>Sign up to be amongst the first to <br /><span>get a LuDela Candle at 50% off!</span></label>

			<input type="text" name="email" placeholder="Enter your email address..." /><button type="submit">Sign Up</button>

		</fieldset>
	</form>

</section>

<article>

	<section class="home-phoneApp">

		<div class="imgWrap">
			<img src="Content/Home-PhoneApp-1267x846.jpg" alt="Photo of smartphone app in action." />
		</div>

		<h2>Smart is Smarter</h2>

		<p>Pair real flame candles with your smart phone in seconds and control every aspect of them from there on.</p>
		<p>Turn any simple room into one filled with ambiance with just one tap.</p>
		<p>Add safety features to keep your home and loved ones safer.</p>
		<p>Have us ship your candle refills automatically so you’ll never need to worry about running out of warm candle light ever again.</p>

	</section>

	<section class="home-bullets twoColumnContainer">

		<div>
			<h3>Convenience</h3>
			<ul>
				<li>Multi zone control</li>
				<li>Mess-free wax</li>
				<li>Tunnel-free bright flame</li>
				<li>Customizable outer shells</li>
				<li>Affordable refill subscriptions</li>
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

		<h2>1,300,000,000 people without lights</h2>
		<p>Better light, better lives</p>

		<p>Over 1.3 Billion people globally still live without electricity, cutting their days in half, stopping children and adults alike from reading, learning, working and progressing. For others, their form of light is a toxic kerosene lamp costing them small fortunes per day.</p>

		<p><strong>To replace any dark study corner or a dining room filled with kerosene, LuDela will donate a safe, solar-rechargeable light for every smart candle sold.</strong></p>

	</section>

	<section class="home-email">

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