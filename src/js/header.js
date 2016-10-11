export default function ($) {

	  var header = "<header>"
	    +"<nav>"
	      +"<div id='hamburger'>"
	        +"<span></span>"
	        +"<span></span>"
	        +"<span></span>"
	        +"<span></span>"
	      +"</div>"
	      +"<a href='/'>"
	        +"<img src='/images/textless-logo.png' class='logo'>"
	      +"</a>"
	      +"<a href='/store' class='button call-to-action'>"
	        +"Shop Now"
	      +"</a>"
	      +"<div class='progress'>"
	        +"<span class='bar'></span>"
	        +"<span class='message'>Batch1 <span class='percent'>53%</span> Reserved</span>"
	      +"</div>"
	    +"</nav>"
	  +"</header>"

	if ($('#site-header').length) {
	  $('#site-header').html(header);
	}
} 
