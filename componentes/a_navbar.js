
export function navbar() {
    document.addEventListener("DOMContentLoaded", function () {
        /* Obtiene la ruta del archivo HTML que se está mostrando en el navegador. */
        const path = window.location.pathname;
        const isActive = (htmlFile) => path.endsWith(htmlFile);

        document.getElementById("header").innerHTML = `
        <header class="header" id="header">
            <div class="container">
                <div class="header-content">
                    <div class="logo">
                        <h1>Academia<span>Pro</span></h1>
                    </div>
                    <nav class="main-nav">
                        <ul>
                            <li><a href="/index.html" class = '${isActive("index.html") ? "active":""}'>Inicio</a></li>
                            <li><a href="/html/metodologia.html" class = '${isActive("metodologia.html") ? "active":""}'>Metodología</a></li>
                            <li><a href="/html/cursos.html" class = '${isActive("cursos.html") ? "active":""}'>Cursos</a></li>
                            <li><a href="/html/oposiciones.html" class = '${isActive("oposiciones.html") ? "active":""}'>Oposiciones</a></li>
                            <li><a href="/html/contacto.html" class = '${isActive("contacto.html") ? "active":""}'>Contacto</a></li>
                            <li><a href="/html/login.html" class="${isActive("login.html") ? "active":""} login-btn">Iniciar sesión</a></li>
                            <li><a href="/html/register.html" class="${isActive("register.html") ? "active":""} register-btn"}'>Registrarse</a></li>
                        </ul>                        
                    </nav>
                    
                </div>
            </div>
        </header>`

    });
}
