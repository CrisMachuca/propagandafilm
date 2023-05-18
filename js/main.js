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


 // Obtén el elemento de la flecha
 var arrow = document.querySelector('.arrow');

 // Agrega un controlador de eventos al hacer clic en la flecha
 arrow.addEventListener('click', function() {
   // Obtén el elemento del submenú
   var submenu = document.querySelector('.dropdown-content');

   // Alternar la clase 'active' en el submenú para mostrarlo o ocultarlo
   submenu.classList.toggle('active');

   // Obtén el estado actual de la clase 'active' en el submenú
   var isActive = submenu.classList.contains('active');

   // Cambiar el ícono de la flecha hacia arriba o hacia abajo según el estado actual
   if (isActive) {
     arrow.innerHTML = '<i class="fas fa-angle-up"></i>';
   } else {
     arrow.innerHTML = '<i class="fas fa-angle-down"></i>';
   }
 });






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

// Función para establecer una cookie
function setCookie(name, value, days) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  const cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; path=/';
  document.cookie = name + '=' + cookieValue;
}

// Función para establecer una cookie
function setCookie(name, value, days) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  const cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; path=/';
  document.cookie = name + '=' + cookieValue;
}

// Función para obtener el valor de una cookie
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  return null;
}

// Verificar si las cookies han sido gestionadas

const cookieManaged = getCookie('cookies_managed');

if (cookieManaged === 'true') {
  cookieBanner.style.display = 'none'; // Ocultar el banner si las cookies ya han sido gestionadas
} else {
  // Mostrar el banner de cookies y añadir el evento de cierre al botón de cierre
  cookieBanner.style.display = 'block';

  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', function() {
    setCookie('cookies_managed', 'true', 365); // Establecer la cookie para indicar que las cookies han sido gestionadas
    cookieBanner.style.display = 'none';

    // Emitir un evento personalizado para indicar que las cookies han sido gestionadas
    const cookiesManagedEvent = new Event('cookiesManaged');
    window.dispatchEvent(cookiesManagedEvent);
  });
}

// Escuchar el evento personalizado para cerrar el banner principal de cookies
window.addEventListener('cookiesManaged', function() {
  cookieBanner.style.display = 'none';
});
