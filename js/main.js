const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		
		contenidoSelect.innerHTML = e.currentTarget.innerHTML;
		select.classList.toggle('active');
		opciones.classList.toggle('active');
		hiddenInput.value = e.currentTarget.querySelector('.titulol').innerText;
	});
});

select.addEventListener('click', () => {
	select.classList.toggle('active');
	opciones.classList.toggle('active');
});










const menuItems = document.querySelectorAll('.menu li.dropdown');
menuItems.forEach(item => {
  const submenu = item.querySelector('.dropdown-content');
  const link = item.querySelector('a');
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (submenu.classList.contains('submenu-open')) {
      submenu.classList.remove('submenu-open');
      submenu.style.maxHeight = null;
    } else {
      closeSubmenus();
      submenu.classList.add('submenu-open');
      submenu.style.maxHeight = submenu.scrollHeight + 'px';
    }
  });
});

function closeSubmenus() {
  const submenus = document.querySelectorAll('.dropdowncontent.submenu-open');
  submenus.forEach(submenu => {
    submenu.classList.remove('submenu-open');
    submenu.style.maxHeight = null;
  });
}
