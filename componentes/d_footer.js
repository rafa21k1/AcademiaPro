export function footer() {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("footer").innerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-column">
                        <h3>Academia<span>Pro</span></h3>
                        <p>Formación profesional de calidad para el mercado laboral del futuro.</p>
                    </div>
                    <div class="footer-column">
                        <h4>Enlaces</h4>
                            <ul>
                            <li><a href="#">Cursos</a></li>
                            <li><a href="#">Sobre nosotros</a></li>
                            <li><a href="#">Profesores</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Contacto</h4>
                        <address>
                            <p>Calle Principal 123</p>
                            <p>Madrid, España</p>
                            <p>info@academiapro.es</p>
                            <p>+34 91 123 45 67</p>
                        </address>
                    </div>
                    <div class="footer-column">
                        <h4>Síguenos</h4>
                            <div class="social-links">
                                <a href="#" aria-label="Facebook">FB</a>
                                <a href="#" aria-label="Twitter">TW</a>
                                <a href="#" aria-label="Instagram">IG</a>
                                <a href="#" aria-label="LinkedIn">LI</a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2025 AcademiaPro. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>`;
    });
}
