/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'recvolt-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-6': '&#xe900;',
		'icon-calendar': '&#xe902;',
		'icon-check-sign': '&#xe903;',
		'icon-down-arrow': '&#xe905;',
		'icon-down-arrow_wht': '&#xe906;',
		'icon-facebook-logo-button': '&#xe908;',
		'icon-google-plus-symbol': '&#xe909;',
		'icon-linkedin-logo': '&#xe90a;',
		'icon-next': '&#xe90c;',
		'icon-notification-bell': '&#xe90d;',
		'icon-notification-bell-info': '&#xe90e;',
		'icon-or': '&#xe912;',
		'icon-search': '&#xe915;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
