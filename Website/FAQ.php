<?php

require_once('LudelaLayoutView.php');

class HomeView extends LudelaView {
	
	public function __construct() {
		parent::__construct();

		$this->viewData["pageTitle"] = "FAQ - ";
		$this->viewData["pageClass"] = "faq " . ( rand(1, 2) == 1 ? "testA" : "testB" );
	}

	protected function renderHero($viewModel) {
?>
	<section class="hero"></section>
<?php
	}
	
	protected function renderMain($viewModel) {
?>

<article>

	<h2>Frequently Asked Questions</h2>

	<section class="faq-questions">

		<h3>What is a LuDela Candle?</h3>
		<p>LuDela Candles are smarter, technology-enabled candlelight fixtures that allow users to instantly ignite or extinguish multiple real-flame candles with the touch of a button on a smartphone app. LuDela candle fixtures burn refillable real wax candle cartridges.</p>

		<h3>I don’t use a smartphone but really want to use LuDela Candles to support the mission to bring solar lights to Africa. How else can I use them?</h3>
		<p>You can light your LuDela Candles with a lighter or matches and extinguish the old fashioned way of just blowing it out. We are also planning to launch a remote control in 2017 for those without smartphones.</p>
		
		<h3>How does LuDela work? I mean, what is creating this “Smart Flame?</h3>
		<p>LuDela burns a proprietary, specially formulated natural wax cartridge with natural, lead-free wicks.</p>
		
		<h3>How long does each cartridge burn for?</h3>
		<p>You will be able to enjoy 15-20 hours of clean-burning, real-flame ambiance in a variety of scents. Switching out cartridges only takes a few seconds.</p>
		
		<h3>How much will it cost to use LuDela candles? What is the value proposition?</h3>
		<p>Each LuDela smart candle will have a suggested retail price from $129-$199 each, depending on the configuration and quantity. By participating in our upcoming pre-order campaign, you can save of up to 50% off the MSRP. The great news is that as you burn our affordable natural candle refill cartridges, you’ll achieve a 20-50% savings over other natural scented candles. This allows most candle lovers the ability to pay back their LuDela smart candle initial investment in the first year or two!  And don’t forget the biggest value proposition--every time you turn on your LuDela candlelight you are illuminating the lives of real people who need it most over 10,000 miles away!

		<h3>When will I be able to pre-order my LuDela Candles?</h3>
		<p>We will be starting our pre-order campaign later this summer. The best way to find out news and updates is to <a href="#">sign up on our newsletter list</a>.</p>
		
		<h3>Are there other colors and sizes available?</h3>
		<p>One of the best features of LuDela candles is the ability to change out the outer shell with different colors, textures and styles. So when Christmas comes there’s no need to buy red candles—just “skin” your LuDela with red shells year after year. We’ll be adding new wax textures, colors and materials like metallic, wood, glass and other shells on a regular basis. And you can help shape our future designs by <a href="#">joining the LuDela community</a>.</p>
		
		<h3>Are LuDela Candles really safe?</h3>
		<p>LuDela candles are the safest flame candles on the planet, hands down. We use the very latest technology to help increase peace of mind and reduce deadly candle fires. But this does not mean there are no risks in using LuDela candles. Technology can fail and accidents can happen. Just like traditional candles, you should practice the same safety measures like those found at the National Fire Protection Association.</p>
		
		<h3>What is your plan to deliver the lights and books to Africa?</h3>
		<p>We have a charity partner, Books for Africa, who has sent over 35 million books to Africa over the years. Their ocean containers have extra space so we avoid shipping fees. They also have NGO partners on the ground at each drop location to assist us in our “Operation Illumination” light and book drops to communities in Africa. We plan to serve communities in Asia, the Americas and other regions in the upcoming years.</p>
		
		<h3>How long do the solar lights last for these families? What is your maintenance plan?</h3>
		<p>The solar light batteries will last 1.5 to 2 years, depending on use. In addition to the solar light drops, we’ll also be leaving spare batteries, parts, and additional units with new local dealers. Part of the light delivery is educating the recipients to save up for their planned new battery expense using the reduced expenditures on fuel, batteries, and charging fees. We’ll empower those willing to take their lighting seriously and accept there will be some who don’t follow the steps to become long-term solar light households. We will always be open to suggestions, guidance, and improvements. <a href="#">Join the LuDela movement to help us illuminate the world</a>.</p>

	</section>

</article>

<section class="emailForm">

	<form action="#" method="post">
		<fieldset>

			<label>Stay informed on the LuDela movement <span>&amp; get 50% off too!</span></label>

			<input type="text" name="email" placeholder="Enter your email address..." /><button type="submit">Sign Up</button>

		</fieldset>
	</form>

</section>

<?php
	}
	
}

$viewModel = array();

$view = new HomeView();
$view->render( $viewModel );

?>