<?php

require_once('Code/Common.php');

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
				<li><a href="About.php">About</a></li>
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

	<link rel="stylesheet" href="Style/Style.css" type="text/css" />

<?php $this->renderHead($viewModel) ?>
</head>
<body class="<?= e( $this->viewData["pageClass"] ) ?>">

	<header>

<?php $this->renderNavigation() ?>

<?php $this->renderHero($viewModel) ?>

	</header>

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