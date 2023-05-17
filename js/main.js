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








/*

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
*/

// Función para establecer una cookie con una duración de días específica
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Función para obtener el valor de una cookie específica
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Función para eliminar una cookie específica
function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

// Función para mostrar u ocultar el aviso de cookies
function toggleCookieBanner() {
  var cookieBanner = document.getElementById("cookie-banner");
  cookieBanner.style.display = (getCookie("cookieConsent") === "true") ? "none" : "block";
}

// Función para aceptar el uso de cookies
function acceptCookies() {
  setCookie("cookieConsent", "true", 30); // Establece la cookie por 30 días
  toggleCookieBanner();
}

// Función para rechazar el uso de cookies
function rejectCookies() {
  setCookie("cookieConsent", "false", 30); // Establece la cookie por 30 días
  toggleCookieBanner();
}

// Función para gestionar las preferencias de cookies
function manageCookies() {
  // Aquí puedes redirigir al usuario a una página de gestión de cookies o abrir un modal para configurar las preferencias
  console.log("Redireccionando a la página de gestión de cookies...");
}

// Función para cerrar el aviso de cookies
function closeCookieBanner() {
  var cookieBanner = document.getElementById("cookie-banner");
  cookieBanner.style.display = "none";
}

// Función para aceptar el uso de cookies
function acceptCookies() {
  setCookie("cookieConsent", "true", 30); // Establece la cookie por 30 días
  closeCookieBanner();
}

// Agregar controlador de eventos al botón de aceptar
var acceptButton = document.getElementById("accept-button");
acceptButton.addEventListener("click", acceptCookies);

// Función para rechazar el uso de cookies
function rejectCookies() {
  setCookie("cookieConsent", "false", 30); // Establece la cookie por 30 días
  closeCookieBanner();
}

// Agregar controlador de eventos al botón de rechazar
var rejectButton = document.getElementById("reject-button");
rejectButton.addEventListener("click", rejectCookies);




// Función para mostrar el modal de gestión de cookies
function showCookieModal() {
  var cookieModal = document.getElementById("cookie-modal");
  cookieModal.style.display = "block";
}

// Función para cerrar el modal de gestión de cookies
function closeCookieModal() {
  var cookieModal = document.getElementById("cookie-modal");
  cookieModal.style.display = "none";
}

// Función para guardar la opción de cookies seleccionada por el usuario
function saveCookieOption() {
  var cookieOption = document.querySelector('input[name="cookie-option"]:checked').value;
  setCookie("cookieOption", cookieOption, 30); // Establece la cookie por 30 días
  closeCookieModal();
}

// Agregar controlador de eventos al botón de gestionar
var manageButton = document.getElementById("manage-button");
manageButton.addEventListener("click", showCookieModal);

// Agregar controlador de eventos al botón de cerrar del modal
var closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", closeCookieModal);

// Agregar controlador de eventos al botón de guardar del modal
var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveCookieOption);


// JavaScript para cerrar el banner de cookies al hacer clic en el botón de cierre
const closeBtn = document.querySelector('.close-btn');
const cookieBanner = document.querySelector('#cookie-banner');

closeBtn.addEventListener('click', function() {
  cookieBanner.style.display = 'none';
});