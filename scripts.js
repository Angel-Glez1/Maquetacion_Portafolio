//**** Menu *****// 
((d)=> {
	
	const $btnMenu = d.querySelector('.menu-btn');
	const $menu = d.querySelector('.menu');


	$btnMenu.addEventListener('click', () => {

		// Intercalar iconos
		$btnMenu.firstElementChild.classList.toggle('none');
		$btnMenu.lastElementChild.classList.toggle('none');

		// Mostar el menu
		$menu.classList.toggle('is-active');


		// Cerrar menu al dar click en el enlace
		d.addEventListener('click', e => {

			if(!e.target.matches(".menu a")) return false;

			// Reset de los icons
			$btnMenu.firstElementChild.classList.remove('none');
			$btnMenu.lastElementChild.classList.add('none');

			// Cerrar menu...
			$menu.classList.remove('is-active');

		});


	})

})(document)


