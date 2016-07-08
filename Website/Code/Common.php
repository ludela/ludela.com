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