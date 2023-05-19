function acceptAllCookies() {
    // código para aceptar todas las cookies.
    function acceptAllCookies() {
        // Obtener todas las cookies disponibles en el sitio
        var cookies = document.cookie.split(";");
    
        // Aceptar todas las cookies
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var cookieName = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = cookieName + "=true; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/;";
        }
    
        closeBanner();
    }
    // Aqui termina el código para aceptar.
    closeBanner();
}

function declineCookies() {
    // código para rechazar todas las cookies.
    function declineCookies() {
        // Obtener todas las cookies disponibles en el sitio
        var cookies = document.cookie.split(";");
    
        // Rechazar todas las cookies
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var cookieName = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
    
        closeBanner();
    }
    // Aquí terminal el código para rechazar.
    closeBanner();
}

function openSettings() {
    document.getElementById("cookie-settings").style.display = "block";
}

function saveSettings() {
    // código para obtener los valores de las cookies seleccionadas y guardar los cambios.
    function saveSettings() {
        var essentialCookies = document.getElementById("essentialCookies").checked;
        var functionalCookies = document.getElementById("functionalCookies").checked;
        var performanceCookies = document.getElementById("performanceCookies").checked;
        var marketingCookies = document.getElementById("marketingCookies").checked;
    
        // Aquí puedes agregar el código para guardar los valores de las cookies seleccionadas.
        // Por ejemplo, podrías almacenar las preferencias en variables, en el almacenamiento local del navegador o enviarlas al servidor.
    
        closeSettings();
        closeBanner();
    }
    // Aquí termina el código para guardar los cambios de las cookies guardadas.
    closeSettings();
    closeBanner();
}

function closeBanner() {
    document.getElementById("cookie-banner").style.display = "none";
}

function closeSettings() {
    document.getElementById("cookie-settings").style.display = "none";
}