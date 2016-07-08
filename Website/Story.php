<?php

require_once('Code/Common.php');

require_once('LudelaLayoutView.php');

class StoryView extends LudelaView {
	
	public function __construct() {
		parent::__construct();

		$this->viewData["pageTitle"] = "";
		$this->viewData["pageClass"] = "story " . ( rand(1, 2) == 1 ? "testA" : "testB" );
	}

	protected function renderHead($viewModel) {
?>
		<script type="text/javascript">

window.addEventListener('hashchange', updateTabs );

window.addEventListener('DOMContentLoaded', ready );

function ready(event) {
	
	// Show only 'storyAbout' initially...
	document.getElementById('storyAboutLink').classList.add('active');
	document.getElementById('storyTeam').style.display = 'none';
	document.getElementById('storyStory').style.display = 'none';

	updateTabs(null);

	adjustStoryImages();
}

function updateTabs(event) {
	
	var fragment = window.location.hash;
	switch(fragment) {
		case '#storyAbout':
		case '#storyTeam':
		case '#storyStory':
			break;
		default:
			return;
	}

	var id = fragment.substring(1);

	var articles = document.querySelectorAll('article');
	for(var i = 0; i < articles.length; i++) {
		
		articles[i].style.display = ( articles[i].id == id ) ? 'block' : 'none';
	}

	var links = document.querySelectorAll('.tabsLinks a');
	for(var i = 0; i < links.length; i++) {
		
		if( id + "Link" == links[i].id ) {
			links[i].classList.add('active');
		}
		else {
			links[i].classList.remove('active');
		}
	}
}

function adjustStoryImages() {
	
	// Convert all of the images to `.imgWrap`'s background image, so we can use cover.

	var imgs = document.querySelectorAll('#storyStory .imgWrap img');
	for(var i = 0; i < imgs.length; i++) {
		var img     = imgs[i];
		var imgWrap = img.parentElement;

		img.style.display = 'none';
		imgWrap.style.backgroundImage = 'url("' + img.src + '")';
		imgWrap.style.backgroundSize = 'cover';

		var rot   = -10 + ( Math.random() * 20 ); // -10 to +10 deg
		var scale = 0.75 + ( Math.random() * 0.5 ); // 0.75 - 1.25

		imgWrap.style.transform = 'rotate( ' + rot + 'deg ) scale( ' + scale + ' )';
	}
}

		</script>
<?php
	}

	protected function renderHero($viewModel) {
?>
	<section>
		<p>A seed Was planted.</p>
		<p>Through the history of Ludela</p>

	</section>
<?php
	}
	
	protected function renderMain($viewModel) {
?>
		
		<div class="tabsLinks">
			<ul>
				<li><a id="storyAboutLink" href="#storyAbout">About</a>
				</li><li><a id="storyTeamLink"  href="#storyTeam" >Team</a>
				</li><li><a id="storyStoryLink" href="#storyStory">Story</a></li>
			</ul>
		</div>
		
		<article id="storyAbout">

			<section class="story-about">

				<div class="imgWrap">
					<img src="Content/Story-Africa.svg" alt="Stylized map of Africa" height="500" />
				</div>

				<h2>2014</h2>

				<p><em>It started with a trip and ended with a journey.</em></p>

				<p>Founded in 2014, LuDela is the world’s first smart candle company with a warm mission to bring better light and better lives around the world.  LuDela is committed to delivering the safest, most convenient, feature-rich candlelight offerings in the world to enable our customers to reconnect with nature and celebrate the most adored ambient light source on the planet—fire.</p>

			</section>

			<section class="story-betterLight">

				<div class="imgWrap">
					<img src="Content/Story-BetterLight.jpg" alt="Photo of children reading books" />
				</div>

				<h2>Better Light, Better Lives</h2>

				<div class="twoColumnContainer">
					<p>We are equally committed to doing our part in helping families living in extreme poverty by helping build core health and educational foundations.  With our charity partner Books for Africa, <strong>LuDela delivers rechargeable solar lights and books to communities in need for every LuDela smart candle and refill candle package sold.</strong></p>

					<p>Our NoKero solar lights are twice as bright as toxic kerosene lamps and stop the poverty cycle of buying expensive kerosene fuel.  Books are the foundation of education in any community and a proven vehicle to inspire and educate future leaders to help bring communities out of extreme poverty.</p>
				</div>

			</section>

		</article>

		<article id="storyTeam">

			<section class="story-team">

				<h2>Team</h2>

				<div class="twoColumnContainer">
					<dl>
						<dt>Jamie Bianchini, Co-Founder &amp; CEO</dt>
						<dd>A proven social entrepreneur with a passion for nature, health and humanity.</dd>

						<dt>Eric Bauswell, Co-Founder &amp; VP of Engineering</dt>
						<dd>25-year veteran who has led over 400 products from concept to production.</dd>

						<dt>Surface Ink, Engineering  &amp; Product Development Partner</dt>
						<dd>Product design, electrical/mechanical/industrial engineering, firmware/software.</dd>

						<dt>Rachel Brady, Books for Africa Program Coordinator</dt>
						<dd>Book &amp; Light Drop Coordinator for Africa.</dd>
					</dl>

					<dl>
						<dt>Bill O’Donnell, Lead Investor  &amp; Advisor</dt>
						<dd>Bill and the Mendota Team have over 100 years of experience in flame ambiance.</dd>

						<dt>Zach Kelling, IT Lead</dt>
						<dd>Web development, software and integrations.</dd>

						<dt>Cival Van De Lubbeit, Online Sales </dt>
						<dd>Website design, sales strategy, messaging.</dd>

						<dt>Robert Gomez, Designer</dt>
						<dd>Art direction, film, design, visual branding.</dd>

						<dt>Donna Michaels, PR</dt>
						<dd>Media relations, social media, launch leader.</dd>

						<dt>Norman Smith and Ky Good, Advisors</dt>
						<dd>Have taken nine startups to $100M+ in sales.</dd>
					</dl>
				</div>

			</section>

			

		</article>

		<article id="storyStory">

			<h2>Our Story</h2>

			<section>

				<div class="imgWrap">
					<img src="Content/Story-Story1.jpg" alt="" />
				</div>

				<div class="content">

					<h3>2007, Sub Sahara Africa</h3>

					<p><em>Our story begins in 2007 with a 81-country global expedition called Peace Pedalers.</em></p>

					<p>Our story begins way back in 2007 when LuDela co-founder Jamie Bianchini was riding a tandem bicycle through the African continent as part of an 81-country global expedition for peace called Peace Pedalers.  Jamie piloted the tandem bike’s front seat while leaving the rear seat open to invite total strangers to join the journey as “guest riders.”.</p>

				</div>

			</section>

			<section>

				<div class="imgWrap">
					<img src="Content/Story-Story2.jpg" alt="" />
				</div>

				<div class="content">

					<h3>May 12, 2007</h3>

					<p><em>He could not afford school fees.  He had big dreams and ambitions, but no means to attain them without education.</em></p>

					<p>On May 12, 2007 a 17-year old Kenyan man named Joseph approached Jamie at his lunch stop outside of Njoro, Kenya.  Joseph asked if he could accompany Jamie to his final destination of the day of Elburgon.  While tackling the steep hills to Elburgon, Joseph shared a common story of many African youth—he was forced to drop out of high school to help support his family.  He could not afford school fees.  He had big dreams and ambitions, but no means to attain them without education.</p>

				</div>

			</section>

			<section>

				<div class="imgWrap">
					<img src="Content/Story-Story3.jpg" alt="" />
				</div>

				<div class="content">

					<h3>May 12, 2007</h3>

					<p><em>Jospeh was nearly in tears, shaking with joy as he shared the news with his family.</em></p>

					<p>Later that day, Jamie and his mother Carol offered to sponsor Joseph’s education to enable him to finish high school.  Joseph was nearly in tears, shaking with joy as he shared the news with his family.  It was that day that Jamie realized his calling: to help educate those who really wanted to learn, grow, and contribute in the world.  He didn’t know exactly how he would realize it, but on May 12th, 2007 a seed was planted to do something great in education one day.</p>

				</div>

			</section>

			<section>

				<div class="imgWrap">
					<img src="Content/Story-Story4.jpg" alt="" />
				</div>

				<div class="content">
	
					<h3>September 2007</h3>

					<p><em>In the middle of the night Jamie woke up to find his room filled with smoke and a candle fire burning next to his bed. </em></p>

					<p>Later that year in September 2007 Jamie was riding in Western Africa in the country of Burkina Faso.  At the end of a long day he checked into a rustic guesthouse that did not have electricity.  The guesthouse owner gave Jamie a candle to light his room.  In the middle of the night, Jamie woke up to find his room filled with smoke and a candle fire burning next to his bed.  Thankfully, he was able to put the fire out with only minor damage to a table and some holes in his boxer shorts.  But the frightening candle experience that night led to the invention of the LuDela smart candle design the next day while out pedaling through the African countryside.  He didn’t know exactly how or when he would bring the innovation to the world, but a seed was planted to use the idea to one day change the world.</p>

				</div>

			</section>

			<section>

				<div class="imgWrap">
					<img src="Content/Story-Story5.jpg" alt="" />
				</div>

				<div class="content">

					<h3>March 2011</h3>

					<p><em>All evening long kids and parents coughed through the night.</em></p>

					<p>Fast forward four years and 57 countries of Peace Pedaling. Jamie finished the world tour in November 2010 and he and his mother Carol were soon invited back to Kenya in 2011 to celebrate Joseph becoming the first in his family of 11 to graduate high school.  Carol and Jamie were invited to stay the night with Joseph and his family.  In the evening, they burned a massive Kerosene light, filling the small house with toxic fumes.  All evening long, kids and parents coughed through the night.</p>
				</div>

			</section>

			<section>

				<div class="imgWrap">
					<img src="Content/Story-Story6.jpg" alt="" />
				</div>

				<div class="content">

					<h3>2011</h3>

					<p><em>The first-hand experience of the negative health and economical effects of kerosene planted another seed.</em></p>

					<p>The next day, Jamie noticed the thick layers of dark black soot built up on the walls of the house and even spewing out of the front door. The first-hand experience of the negative health and economical effects of kerosene planted another seed in Jamie to find a way to make a difference in the lives of the millions of people who are forced to use this destructive light source. </p>

				</div>

			</section>

			<section>

				<div class="imgWrap">
					<img src="Content/Story-Story7.jpg" alt="" />
				</div>

				<div class="content">

					<h3>Spring 2014</h3>

					<p>Three years later, after getting married to a former Peace Pedalers guest rider Cristina and having two beautiful children, Luca and Candela, those seeds of inspiration from years prior finally began to blossom.  Jamie made his first prototype of the LuDela smart candle design in spring of 2014 and began searching for the ideal technical co-founder partner to bring LuDela to the world.</p>

				</div>

			</section>

			<section>

				<div class="imgWrap">
					<img src="Content/Story-Story8.jpg" alt="" />
				</div>

				<div class="content">

					<h3>Summer 2014</h3>

					<p>This led him to Eric Bauswell, CEO of Surface Ink in San Jose, California.  Jamie shared his vision to use the smart candle innovation, inspired in Africa, as a vehicle to illuminate impoverished communities around the world.  Eric fell in love with both the product and the social vision immediately.   They began iterating prototypes with the Surface Ink team in 2015 and the rest is history. </p>

				</div>

			</section>

			<section>

				<p>By winter 2017, LuDela will begin shipping its first units.  We hope you’ll join us in bringing better light to your life and to lives around the world.</p>

				<p>We hope you enjoyed our story!  We’re just getting started!</p>

				<p>Jamie, Cristina, Luca &amp; Candela</p>

				<p>(By the way, Luca = “Bringer of Light” and Candela = “Measurement of Flame of Candle.”  This is the vision of LuDela—bringing light to those in need from candlelight enjoyed by LuDela customers.)</p>

			</section>

		</article>

<?php
	}
}

$viewModel = array();

$view = new StoryView();
$view->render( $viewModel );

?>