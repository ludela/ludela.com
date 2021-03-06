export default function ($) {

	  var menu = `<nav id='menu' class='menu'>
      <div class='menu__close'>
        <span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
      <div class='menu__logo'>
        <a href='/'>
          <span class='icon icon-ludela-logo'></span>
				</a>
			</div>
			<a class='menu__link' href='/account'>
	        Refer a Friend
	      </a>
			<a class='menu__link' href='/about'>
	        about us
	      </a>
			<a class='menu__link' href='/faq'>
	        faq
	      </a>
			<a class='menu__link' href='/legal'>
	        legal
	      </a>
			<a class='menu__link' href='/careers'>
	        careers
	      </a>
			<a class='menu__link' href='/contact'>
	        contact
	      </a>
			<a class='menu__social'  href='http://facebook.com/JoinLudela' target='_blank'>
	        <span class='icon icon-facebook'> </span>
				</a>
			<a class='menu__social'  href='http://twitter.com/JoinLudela' target='_blank'>
	        <span class='icon icon-twitter'> </span>
				</a>
			<a class='menu__social'  href='https://www.pinterest.com/joinludela' target='_blank'>
        <span class='icon icon-pinterest2'> </span>
			</a>
		</nav>`;

	if ($('#site-menu').length) {
	  $('#site-menu').html(menu);
	}
}
