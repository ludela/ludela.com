<?php

function e($s) {
	return htmlentities( $s );
}

class View {
	
	protected $viewData;

	public function __construct() {
		
		$this->viewData = array();
	}

	public function render($viewModel) {
		
		
	}
}

class LudelaView extends View {
	
	public function __construct() {
		parent::__construct();
	}

	protected function renderHead($viewModel) {
	}

	protected function renderHero($viewModel) {
	}

	protected function renderMain($viewModel) {
	}
	
	private function renderNavigation() {
?>
		<nav>
			<h1><a href="Home.php">LuDela</a></h1>
			<ul>
				<li><a href="Home.php">Home</a></li>
				<li><a href="Story.php">Our Story</a></li>
				<?php /*<li><a href="About.php">About</a></li>*/ ?>
				<li><a href="Faq.php">FAQ</a></li>
				<li class="cta"><a href="#">Get One First!</a></li>
			</ul>
		</nav>
<?php
	}

	public function render($viewModel) {
?><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title><?= e( $this->viewData["pageTitle"] ) ?>LuDela</title>

	<meta charset="utf-8" /> 
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link rel="stylesheet" href="Style/Style.css" type="text/css" />

<?php $this->renderHead($viewModel) ?>
</head>
<body class="<?= e( $this->viewData["pageClass"] ) ?>">

	<header>

<?php $this->renderNavigation() ?>
		<div class="navBack"></div>

	</header>

<?php $this->renderHero($viewModel) ?>

<!-- inner -->
<?php $this->renderMain($viewModel) ?>
<!-- /inner -->

	<footer>

<?php $this->renderNavigation() ?>

	</footer>

</body>
</html>
<?php
	}
	
}