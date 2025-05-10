const plantilla_index = `
<section class="hero">
    <div class="hero-content">
        <h1>Empieza tu oposición y disfruta de las ventajas laborales para tu vida.</h1>
        <p>Elige aprender Oposiciones de una vez por todas, una vez que termines este curso serás capaz de trabajar para el estado en el curso que hayas elegido.</p>
        <a href="/html/cursos.html" class="cta-button">Comienza ahora</a>
    </div>
</section>

<main class="course-section">
    <div class="container">
        <div class="section-header">
            <div class="container-about">
            <h2 class="subtitle">¿Qué aprenderás en este curso?</h2>
            <p class="about__paragraph">Todo lo necesario y obligatorio para presentarte a una Oposición (Relaciones
                Exteriores, Gestión de Proyectos, Ingenierías,Medio Ambiente y más)</p>
        </div> 
    </div>            
</main>
<div class="container">
    <h2 class="title">
        <span class="title-word title-word-1">Próximo</span>
        <span class="title-word title-word-2">examen</span>
        <span class="title-word title-word-3">27/10/2025</span>
    </h2>
</div>
`;
const plantilla_cursos = `
    <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h2>Desarrolla tus habilidades profesionales</h2>
        <p>Descubre nuestros cursos diseñados para mejorar tu perfil laboral y abrir nuevas oportunidades en el mundo digital.</p>
        <a href="#cursos" class="btn btn-primary">Ver cursos</a>
      </div>
    </div>
  </section>

  <main id="cursos" class="courses-section">
    <div class="container">
      <div class="section-header">
        <h2>Nuestros Cursos</h2>
        <p>Programas profesionales diseñados para el mercado laboral actual</p>
      </div>

      <div class="courses-grid">
        <article class="course-card">
          <div class="course-header">
            <h3>Desarrollo Web</h3>
            <span class="badge">Más popular</span>
          </div>
          <p class="course-description">Aprende a crear sitios y aplicaciones web desde cero.</p>
          <div class="course-details">
            <div class="detail-item">
              <span class="label">Requisitos:</span>
              <span class="value">Conocimientos básicos de informática.</span>
            </div>
            <div class="detail-item">
              <span class="label">Fecha de inicio:</span>
              <span class="value">20/05/2025</span>
            </div>
          </div>
          <a href="#" class="btn btn-outline">Ver temario</a>
        </article>

        <article class="course-card">
          <div class="course-header">
            <h3>Marketing Digital</h3>
          </div>
          <p class="course-description">Domina las herramientas y estrategias del marketing online.</p>
          <div class="course-details">
            <div class="detail-item">
              <span class="label">Requisitos:</span>
              <span class="value">Mayor de edad, acceso a internet.</span>
            </div>
            <div class="detail-item">
              <span class="label">Fecha de inicio:</span>
              <span class="value">01/06/2025</span>
            </div>
          </div>
          <a href="#" class="btn btn-outline">Ver temario</a>
        </article>

        <article class="course-card">
          <div class="course-header">
            <h3>Ciberseguridad</h3>
            <span class="badge">Nuevo</span>
          </div>
          <p class="course-description">Protege redes, sistemas y datos frente a amenazas digitales.</p>
          <div class="course-details">
            <div class="detail-item">
              <span class="label">Requisitos:</span>
              <span class="value">Conocimientos en redes o informática.</span>
            </div>
            <div class="detail-item">
              <span class="label">Fecha de inicio:</span>
              <span class="value">15/06/2025</span>
            </div>
          </div>
          <a href="#" class="btn btn-outline">Ver temario</a>
        </article>

        <article class="course-card">
          <div class="course-header">
            <h3>Administración Empresarial</h3>
          </div>
          <p class="course-description">Curso práctico sobre gestión de empresas y finanzas.</p>
          <div class="course-details">
            <div class="detail-item">
              <span class="label">Requisitos:</span>
              <span class="value">Bachillerato o experiencia laboral.</span>
            </div>
            <div class="detail-item">
              <span class="label">Fecha de inicio:</span>
              <span class="value">05/07/2025</span>
            </div>
          </div>
          <a href="#" class="btn btn-outline">Ver temario</a>
        </article>

        <article class="course-card">
          <div class="course-header">
            <h3>Diseño Gráfico</h3>
          </div>
          <p class="course-description">Crea contenido visual con Photoshop, Illustrator y más.</p>
          <div class="course-details">
            <div class="detail-item">
              <span class="label">Requisitos:</span>
              <span class="value">Gusto por lo visual y creatividad.</span>
            </div>
            <div class="detail-item">
              <span class="label">Fecha de inicio:</span>
              <span class="value">18/07/2025</span>
            </div>
          </div>
          <a href="#" class="btn btn-outline">Ver temario</a>
        </article>

        <article class="course-card coming-soon">
          <div class="course-header">
            <h3>Inteligencia Artificial</h3>
            <span class="badge">Próximamente</span>
          </div>
          <p class="course-description">Fundamentos y aplicaciones de IA y machine learning.</p>
          <div class="course-details">
            <div class="detail-item">
              <span class="label">Requisitos:</span>
              <span class="value">Programación básica, matemáticas.</span>
            </div>
            <div class="detail-item">
              <span class="label">Fecha de inicio:</span>
              <span class="value">Septiembre 2025</span>
            </div>
          </div>
          <a href="#" class="btn btn-outline disabled">Próximamente</a>
        </article>
      </div>
    </div>
  </main>

  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>¿Listo para dar el siguiente paso en tu carrera?</h2>
        <p>Inscríbete hoy y comienza tu camino hacia el éxito profesional.</p>
        <a href="/html/contacto.html" class="btn btn-primary">Solicitar información</a>
      </div>
    </div>
  </section>
`;
const plantilla_metodologia = `
    <div id="carouselExample" class="carousel carousel-dark slide">
        <div class="hero">
            <h2>Metodología de estudios</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ullam odio, omnis harum aliquam, nihil quae
                ex at, quam molestias ipsa. Quidem, ad corrupti assumenda id saepe totam quia perspiciatis.</p>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="schedule-container">
                    <h1>Horario de Clases - Setiembre 2024</h1>
                    <table class="schedule-table ">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td><strong>2</strong> Matemáticas</td>
                                <td><strong>3</strong> Administración</td>
                                <td><strong>4</strong> Finanzas</td>
                                <td><strong>5</strong> Contabilidad</td>
                                <td><strong>6</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>9</strong> Inglés</td>
                                <td><strong>10</strong> Programación</td>
                                <td><strong>11</strong> Matemáticas</td>
                                <td><strong>12</strong> Inglés</td>
                                <td><strong>13</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>16</strong> Inglés</td>
                                <td><strong>17</strong> Derecho</td>
                                <td><strong>18</strong> Administración</td>
                                <td><strong>19</strong> Finanzas</td>
                                <td><strong>20</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>23</strong> Derecho</td>
                                <td><strong>24</strong> Contabilidad</td>
                                <td><strong>25</strong> Inglés</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>30</strong> MS Office</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Octubre 2024</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td><strong>1</strong> Administración</td>
                                <td><strong>2</strong> Finanzas</td>
                                <td><strong>3</strong> Contabilidad</td>
                                <td><strong>4</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Programación</td>
                                <td><strong>9</strong> Matemáticas</td>
                                <td><strong>10</strong> Inglés</td>
                                <td><strong>11</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>14</strong> Inglés</td>
                                <td><strong>15</strong> Derecho</td>
                                <td><strong>16</strong> Administración</td>
                                <td><strong>17</strong> Finanzas</td>
                                <td><strong>18</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>21</strong> Derecho</td>
                                <td><strong>22</strong> Contabilidad</td>
                                <td><strong>23</strong> Inglés</td>
                                <td><strong>24</strong> Programación</td>
                                <td><strong>25</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>28</strong> MS Office</td>
                                <td><strong>29</strong> Contabilidad</td>
                                <td><strong>30</strong> Programación</td>
                                <td><strong>31</strong> Derecho</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Noviembre 2024</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>1</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>4</strong> Inglés</td>
                                <td><strong>5</strong> Programación</td>
                                <td><strong>6</strong> Matemáticas</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>11</strong> Inglés</td>
                                <td><strong>12</strong> Derecho</td>
                                <td><strong>13</strong> Administración</td>
                                <td><strong>14</strong> Finanzas</td>
                                <td><strong>15</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>18</strong> Derecho</td>
                                <td><strong>19</strong> Contabilidad</td>
                                <td><strong>20</strong> Inglés</td>
                                <td><strong>21</strong> Programación</td>
                                <td><strong>22</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>25</strong> MS Office</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                                <td><strong>28</strong> Contabilidad</td>
                                <td><strong>29</strong> Derecho</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Diciembre 2024</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>1</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>4</strong> Inglés</td>
                                <td><strong>5</strong> Programación</td>
                                <td><strong>6</strong> Matemáticas</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>11</strong> Inglés</td>
                                <td><strong>12</strong> Derecho</td>
                                <td><strong>13</strong> Administración</td>
                                <td><strong>14</strong> Finanzas</td>
                                <td><strong>15</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>18</strong> Derecho</td>
                                <td><strong>19</strong> Contabilidad</td>
                                <td><strong>20</strong> Inglés</td>
                                <td><strong>21</strong> Programación</td>
                                <td><strong>22</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>25</strong> MS Office</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                                <td><strong>28</strong> Contabilidad</td>
                                <td><strong>29</strong> Derecho</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Enero 2025</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>1</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>4</strong> Inglés</td>
                                <td><strong>5</strong> Programación</td>
                                <td><strong>6</strong> Matemáticas</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>11</strong> Inglés</td>
                                <td><strong>12</strong> Derecho</td>
                                <td><strong>13</strong> Administración</td>
                                <td><strong>14</strong> Finanzas</td>
                                <td><strong>15</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>18</strong> Derecho</td>
                                <td><strong>19</strong> Contabilidad</td>
                                <td><strong>20</strong> Inglés</td>
                                <td><strong>21</strong> Programación</td>
                                <td><strong>22</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>25</strong> MS Office</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                                <td><strong>28</strong> Contabilidad</td>
                                <td><strong>29</strong> Derecho</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Febrero 2025</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>1</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>4</strong> Inglés</td>
                                <td><strong>5</strong> Programación</td>
                                <td><strong>6</strong> Matemáticas</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>11</strong> Inglés</td>
                                <td><strong>12</strong> Derecho</td>
                                <td><strong>13</strong> Administración</td>
                                <td><strong>14</strong> Finanzas</td>
                                <td><strong>15</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>18</strong> Derecho</td>
                                <td><strong>19</strong> Contabilidad</td>
                                <td><strong>20</strong> Inglés</td>
                                <td><strong>21</strong> Programación</td>
                                <td><strong>22</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>25</strong> MS Office</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                                <td><strong>28</strong> Contabilidad</td>
                                <td><strong>29</strong> Derecho</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Marzo 2025</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>1</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>4</strong> Inglés</td>
                                <td><strong>5</strong> Programación</td>
                                <td><strong>6</strong> Matemáticas</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>11</strong> Inglés</td>
                                <td><strong>12</strong> Derecho</td>
                                <td><strong>13</strong> Administración</td>
                                <td><strong>14</strong> Finanzas</td>
                                <td><strong>15</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>18</strong> Derecho</td>
                                <td><strong>19</strong> Contabilidad</td>
                                <td><strong>20</strong> Inglés</td>
                                <td><strong>21</strong> Programación</td>
                                <td><strong>22</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>25</strong> MS Office</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                                <td><strong>28</strong> Contabilidad</td>
                                <td><strong>29</strong> Derecho</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Abril 2025</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>1</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>4</strong> Inglés</td>
                                <td><strong>5</strong> Programación</td>
                                <td><strong>6</strong> Matemáticas</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>11</strong> Inglés</td>
                                <td><strong>12</strong> Derecho</td>
                                <td><strong>13</strong> Administración</td>
                                <td><strong>14</strong> Finanzas</td>
                                <td><strong>15</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>18</strong> Derecho</td>
                                <td><strong>19</strong> Contabilidad</td>
                                <td><strong>20</strong> Inglés</td>
                                <td><strong>21</strong> Programación</td>
                                <td><strong>22</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>25</strong> MS Office</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                                <td><strong>28</strong> Contabilidad</td>
                                <td><strong>29</strong> Derecho</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Mayo 2025</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>1</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>4</strong> Inglés</td>
                                <td><strong>5</strong> Programación</td>
                                <td><strong>6</strong> Matemáticas</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>11</strong> Inglés</td>
                                <td><strong>12</strong> Derecho</td>
                                <td><strong>13</strong> Administración</td>
                                <td><strong>14</strong> Finanzas</td>
                                <td><strong>15</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>18</strong> Derecho</td>
                                <td><strong>19</strong> Contabilidad</td>
                                <td><strong>20</strong> Inglés</td>
                                <td><strong>21</strong> Programación</td>
                                <td><strong>22</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>25</strong> MS Office</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                                <td><strong>28</strong> Contabilidad</td>
                                <td><strong>29</strong> Derecho</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="carousel-item">
                <div class="schedule-container">
                    <h1>Horario de Clases - Junio 2025</h1>
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Fila de 8:00 a 9:00 -->
                            <tr>
                                <td>08:00 - 09:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>1</strong> Programación</td>
                            </tr>
                            <!-- Fila de 09:00 a 10:00 -->
                            <tr>
                                <td>09:00 - 10:00</td>
                                <td><strong>4</strong> Inglés</td>
                                <td><strong>5</strong> Programación</td>
                                <td><strong>6</strong> Matemáticas</td>
                                <td><strong>7</strong> Inglés</td>
                                <td><strong>8</strong> Administración</td>
                            </tr>
                            <!-- Fila de 10:00 a 11:00 -->
                            <tr>
                                <td>10:00 - 11:00</td>
                                <td><strong>11</strong> Inglés</td>
                                <td><strong>12</strong> Derecho</td>
                                <td><strong>13</strong> Administración</td>
                                <td><strong>14</strong> Finanzas</td>
                                <td><strong>15</strong> MS Office</td>
                            </tr>
                            <!-- Fila de 11:00 a 12:00 -->
                            <tr>
                                <td>11:00 - 12:00</td>
                                <td><strong>18</strong> Derecho</td>
                                <td><strong>19</strong> Contabilidad</td>
                                <td><strong>20</strong> Inglés</td>
                                <td><strong>21</strong> Programación</td>
                                <td><strong>22</strong> Matemáticas</td>
                            </tr>
                            <!-- Fila de 12:00 a 13:00 -->
                            <tr>
                                <td>12:00 - 13:00</td>
                                <td><strong>25</strong> MS Office</td>
                                <td><strong>26</strong> Programación</td>
                                <td><strong>27</strong> Matemáticas</td>
                                <td><strong>28</strong> Contabilidad</td>
                                <td><strong>29</strong> Derecho</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
`;
const plantilla_oposiciones = `
    <section class="hero">
    <div class="container">
        <div class="hero-content">
        <h2>Desarrolla tus habilidades profesionales</h2>
        <p>Descubre nuestros cursos diseñados para mejorar tu perfil laboral y abrir nuevas oportunidades en el mundo digital.</p>
        </div>
    </div>
    
    </section>
    <main class="courses-section">
    <div class="container">
        <div class="section-header">
            <h2>Oposiciones</h2>
        <p>Programas profesionales diseñados para el mercado laboral actual</p>
        </div>
        <div class="courses-grid">
            <articule class="course-card">
                <div class="course-header">
                    <h3>Guardia Civil</h3>
                </div>
                <p class="course-description">Oposición para acceder al cuerpo de la Guardia Civil.</p>
                <div class="course-details">
                    <div class="detail-item">
                        <span class="label">Requisitos:</span>
                        <span class="value">Mayor de edad, acceso a internet.</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Fecha de inicio:</span>
                        <span class="value">01/06/2025</span>
                    </div>
                </div>
                <a href="#" class="btn btn-outline">Ver temario</a>
            </articule>
            <articule class="course-card">
                <div class="course-header">
                    <h3>Policía Nacional</h3>
                </div>
                <p class="course-description">Acceso a la escala básica de la Policía Nacional.</p>
                <div class="course-details">
                    <div class="detail-item">
                        <span class="label">Requisitos:</span>
                        <span class="value">Mayor de edad, bachillerato finalizado.</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Fecha de inicio:</span>
                        <span class="value">22/07/2025</span>
                    </div>
                </div>
                <a href="#" class="btn btn-outline">Ver temario</a>
            </articule>
            <articule class="course-card">
                <div class="course-header">
                    <h3>Tropa y Marinería</h3>
                </div>
                <p class="course-description">Ingreso a las Fuerzas Armadas.</p>
                <div class="course-details">
                    <div class="detail-item">
                        <span class="label">Requisitos:</span>
                        <span class="value">Entre 18 y 29 años, nacionalidad española o comunitaria.</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Fecha de inicio:</span>
                        <span class="value">10/05/2025</span>
                    </div>
                </div>
                <a href="#" class="btn btn-outline">Ver temario</a>
            </articule>
            <articule class="course-card">
                <div class="course-header">
                    <h3>Administración</h3>
                </div>
                <p class="course-description">Puesto administrativo en la AGE.</p>
                <div class="course-details">
                    <div class="detail-item">
                        <span class="label">Requisitos:</span>
                        <span class="value">Graduado en ESO mínimo.</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Fecha de inicio:</span>
                        <span class="value">01/09/2025</span>
                    </div>
                </div>
                <a href="#" class="btn btn-outline">Ver temario</a>
            </articule>
            </articule>
            <articule class="course-card">
                <div class="course-header">
                    <h3>Educación Primaria</h3>
                </div>
                <p class="course-description">Plazas para maestros de primaria.</p>
                <div class="course-details">
                    <div class="detail-item">
                        <span class="label">Requisitos:</span>
                        <span class="value">Grado en Magisterio o equivalente.</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Fecha de inicio:</span>
                        <span class="value">10/10/2025</span>
                    </div>
                </div>
                <a href="#" class="btn btn-outline">Ver temario</a>
            </articule>            
        </div> 
        <div class="section-header">
            <br>
        <p>Programas profesionales diseñados para el mercado laboral actual</p>
        </div>
    </div>
</main>
`;
const plantilla_contacto = `
    <div class="row text-center text-white" style="background-image: linear-gradient(135deg, #003d82 0%, #0056b3 100%);">
            <div class="col">
                <h3 class="m-4 p-1">Contacto</h3>
            </div>
            <div class="col">
            <h3 class="m-4 p-1">Ubícanos</h3>
            </div>
            <div class="col">
            <h3 class="m-4 p-1">Chat</h3>
            </div>
    </div>        
    
    <div class="container-fluid text-left m-4 p-1">
        <div class="row align-items-left">
            <div class="col">
                <form class="contact-form">
                    <div class="form-group">
                        <label for="nombres">Nombres</label>
                        <input type="text" id="nombres" name="nombres" required>
                    </div>

                    <div class="form-group">
                        <label for="apellidos">Apellidos</label>
                        <input type="text" id="apellidos" name="apellidos" required>
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>

                    <div class="form-group">
                        <label for="telefono">Teléfono</label>
                        <input type="tel" id="telefono" name="telefono" required>
                    </div>

                    <div class="form-group">
                        <label for="direccion">Dirección</label>
                        <input type="text" id="direccion" name="direccion" required>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                        <label for="codigo-postal">Código Postal</label>
                        <input type="text" id="codigo-postal" name="codigo-postal" required>
                        </div>

                        <div class="form-group">
                        <label for="localidad">Localidad</label>
                        <input type="text" id="localidad" name="localidad" required>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="provincia">Provincia</label>
                        <select id="provincia" name="provincia" required>
                        <option value="">Seleccione una provincia</option>
                        <option value="madrid">Madrid</option>
                        <option value="barcelona">Barcelona</option>
                        <option value="valencia">Valencia</option>
                        <option value="sevilla">Sevilla</option>
                        </select>
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div class="col">
                <form class="contact-form p-2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5305273462227!2d-3.7000332870582677!3d40.41924997132011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288419055f4b%3A0xb059e2ad15b9814c!2sGran%20V%C3%ADa%2C%202%2C%20Centro%2C%2028013%20Madrid!5e0!3m2!1ses!2ses!4v1746833257252!5m2!1ses!2ses" width="600" height="450" style="border:15px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </form>
                <br>
                <h3 class="m-4 p-1">Dirección</h3>
                </div>
            <div class="col">
                <form class="contact-form p-1" style="height: 720px;">
                <iframe src="https://academia-wbiu.onrender.com/" width="600" height="690" style="border:5px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </form>
            </div>
            
        </div>
</div>
<a href="#" class="btn-flotante">Chat on line</a>
`;
export function body() {
    document.addEventListener("DOMContentLoaded", function () {
        /* Obtiene la ruta del archivo HTML que se está mostrando en el navegador. */
        const path = window.location.pathname;

        //path.endsWith() sirve para comprobar si la URL termina con un string determinado.
        if (path.endsWith("index.html") || path === "/" || path === "/index.html") {
            document.getElementById("body").innerHTML = plantilla_index;
        } else if (path.endsWith("cursos.html")) {
            document.getElementById("body").innerHTML = plantilla_cursos;
        } else if (path.endsWith("metodologia.html")) {
            document.getElementById("body").innerHTML = plantilla_metodologia;
        } else if (path.endsWith("oposiciones.html")) {
            document.getElementById("body").innerHTML = plantilla_oposiciones;
        } else if (path.endsWith("contacto.html")) {
            document.getElementById("body").innerHTML = plantilla_contacto;
        }
    });
}
