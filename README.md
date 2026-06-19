# 🚀 AcadFrame

**Framework CSS/JS ligero y moderno para sistemas académicos y proyectos personales.**

Creado por **[Tu Nombre]** desde **Puerto Cabello, Venezuela**.

![Versión](https://img.shields.io/badge/version-1.0.0-blue)
![Licencia](https://img.shields.io/badge/license-MIT-green)

---

## 📦 ¿Qué es AcadFrame?

AcadFrame es un framework diseñado específicamente para **sistemas que se piden en la universidad**: CRUDs, reportes, dashboards, formularios, tablas, etc. Ofrece:

- 🎨 **Diseño moderno y agradable** (no genérico)
- 🌙 **Modo oscuro** (manual y automático)
- 🧩 **Componentes reutilizables** (botones, tarjetas, tablas, formularios, alertas, sidebar, navbar, dropdowns, reportes)
- ⚡ **Interactividad con JavaScript vanilla** (sin dependencias)
- 📊 **Exportación a CSV e impresión** (opcional Excel con SheetJS)
- 🎯 **Validación de formularios en tiempo real**
- 🔍 **Búsqueda y ordenamiento en tablas**
- 🍞 **Toast notifications animadas**
- ⏳ **Loader con backdrop blur**
- 🎭 **Temas predefinidos** (Océano, Esmeralda, Rosa)
- 🧩 **Extensiones opcionales** (modales, validaciones avanzadas)

---

## 🚀 Instalación

**Opción 1: Descarga directa**

1. Descarga la carpeta `acadframe` desde este repositorio.
2. Copia la carpeta en la raíz de tu proyecto.
3. Enlaza el CSS y el JS en tu HTML:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi proyecto con AcadFrame</title>
    <!-- Fuente Inter (opcional) -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700&display=swap" rel="stylesheet">
    <!-- AcadFrame CSS -->
    <link rel="stylesheet" href="acadframe/css/acadframe.min.css">
</head>
<body>
    <!-- Tu contenido -->
    <script src="acadframe/js/acadframe.min.js"></script>
</body>
</html>

La segunda forma de instalación 

npm install acadframe

🧩 Componentes principales

Botones

<button class="ac-btn ac-btn-primary">Primario</button>
<button class="ac-btn ac-btn-success">Éxito</button>
<button class="ac-btn ac-btn-danger">Peligro</button>
<button class="ac-btn ac-btn-outline">Outline</button>

Tarjetas

<div class="ac-card">
    <div class="ac-card-header"><h3>Título</h3></div>
    <div class="ac-card-body">Contenido</div>
    <div class="ac-card-footer"><button class="ac-btn-sm ac-btn-primary">Acción</button></div>
</div>

Tablas con búsqueda y ordenamiento

<div class="ac-table-container">
    <input type="text" class="ac-search" placeholder="Buscar...">
    <table class="ac-table">
        <thead>
            <tr><th data-sort="nombre">Nombre</th><th data-sort="edad">Edad</th></tr>
        </thead>
        <tbody>
            <tr><td>Ana</td><td>25</td></tr>
            <tr><td>Luis</td><td>30</td></tr>
        </tbody>
    </table>
</div>

Formularios con validación automática

<form class="ac-form">
    <div class="ac-form-group">
        <label class="ac-label required">Nombre</label>
        <input type="text" class="ac-input" name="nombre" required>
        <span class="ac-error-message"></span>
    </div>
    <div class="ac-form-actions">
        <button type="submit" class="ac-btn ac-btn-primary">Enviar</button>
    </div>
</form>

Toasts (notificaciones)

AcadFrame.toast('¡Bienvenido!', 'success');
AcadFrame.toast('Error al guardar', 'error');
AcadFrame.toast('Advertencia', 'warning');
AcadFrame.toast('Información', 'info');

Loader

AcadFrame.loader.show('Cargando datos...');
// ... operación asíncrona ...
AcadFrame.loader.hide();

Modales 

AcadFrame.modal.open({
    title: 'Confirmar',
    content: '¿Estás seguro?',
    onConfirm: () => { /* acción */ }
});

Exportar tabla a CSV

const tabla = document.querySelector('.ac-table');
AcadFrame.export.toCSV(tabla, 'reporte.csv');

Modo oscuro

<button data-ac-darkmode-toggle>🌙</button>

🎨 Personalización

:root {
    --ac-primary-500: #0ea5e9;      /* Cambiar color principal */
    --ac-radius-md: 0.375rem;       /* Bordes más pequeños */
    --ac-font-sans: 'Nunito', sans-serif; /* Cambiar fuente */
}

También puedes cambiar el tema completo:

<body class="ac-theme-emerald">  <!-- o ac-theme-rose, ac-theme-ocean -->

📁 Estructura del proyecto

acadframe/
├── css/
│   ├── acadframe.css          (desarrollo)
│   ├── acadframe.min.css      (producción)
│   └── src/                   (fuentes SCSS/CSS)
├── js/
│   ├── acadframe.js           (desarrollo)
│   ├── acadframe.min.js       (producción)
│   └── modals.js              (extensión opcional)
├── docs/                      (documentación interactiva)
└── package.json               (para build con npm)

🌟 Créditos

Creado por Álvaro Parra
📍 Puerto Cabello, Venezuela
🐦 [@tu-usuario] (si tienes redes)
📧 parraalavaro418@gmail.com

Si usas AcadFrame en tus proyectos, ¡me encantaría saberlo!
Comparte tu experiencia o etiquétame.

📄 Licencia

MIT License – libre para uso personal y comercial.

🤝 Contribuciones

Puedes descargar AcadFrame desde el repositorio y usarlo como mejor te parezca, una vez descargado será responsabilidad del usuario. 

No se aceptarán push resquest ya que al ser un framework para estudiantes se debe mantener tal cual está.

🧪 Probar en vivo

Puedes ver una demo interactiva en la carpeta docs/. Abre docs/index.html en tu navegador.

Hecho con ❤️ desde Puerto Cabello, Venezuela.


---

## 2. Página de presentación (Landing Page)

Esta página será un HTML autónomo que uses como portada de tu framework. Puede ser la misma `docs/index.html` mejorada o una nueva `index.html` en la raíz del repositorio.

Voy a crear una versión mejorada de la documentación que ya tienes, pero con un enfoque más **promocional**: header con tu nombre, sección de características, demostración visual, y footer con tus datos.

**Archivo:** `index.html` (en la raíz del repositorio)

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AcadFrame - Framework para sistemas académicos</title>
    <!-- Fuente Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap" rel="stylesheet">
    <!-- AcadFrame CSS -->
    <link rel="stylesheet" href="css/acadframe.min.css">
    <style>
        /* Estilos específicos para la landing */
        .hero {
            text-align: center;
            padding: 4rem 1.5rem;
            background: linear-gradient(135deg, var(--ac-primary-500), var(--ac-primary-700));
            color: white;
            border-radius: var(--ac-radius-lg);
            margin-bottom: 2rem;
        }
        .hero h1 {
            font-size: 3rem;
            font-weight: 800;
            color: white;
            margin-bottom: 0.5rem;
        }
        .hero p {
            font-size: 1.25rem;
            opacity: 0.9;
            max-width: 600px;
            margin: 0 auto 1.5rem;
        }
        .hero .ac-btn {
            background: white;
            color: var(--ac-primary-600);
            font-weight: 600;
        }
        .hero .ac-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }
        .feature-card {
            text-align: center;
            padding: 1.5rem;
            background: white;
            border-radius: var(--ac-radius-lg);
            box-shadow: var(--ac-shadow-md);
            transition: var(--ac-transition);
        }
        .feature-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--ac-shadow-xl);
        }
        .feature-card .icon {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }
        .feature-card h4 {
            margin-bottom: 0.25rem;
        }
        .feature-card p {
            font-size: 0.875rem;
            color: var(--ac-gray-500);
        }
        .creator-badge {
            display: inline-block;
            background: var(--ac-primary-50);
            color: var(--ac-primary-700);
            padding: 0.5rem 1.5rem;
            border-radius: var(--ac-radius-full);
            font-weight: 500;
            margin-top: 2rem;
        }
        footer {
            text-align: center;
            padding: 2rem 0;
            border-top: 1px solid var(--ac-gray-200);
            margin-top: 2rem;
        }
        footer a {
            color: var(--ac-primary-600);
        }
        @media (max-width: 640px) {
            .hero h1 { font-size: 2rem; }
        }
    </style>
</head>
<body class="ac-theme-ocean">
    <div class="ac-layout">
        <!-- Sidebar (opcional, para navegación) -->
        <aside class="ac-sidebar">
            <div class="ac-sidebar-brand">📘 AcadFrame</div>
            <nav class="ac-sidebar-nav">
                <a href="#inicio" class="ac-sidebar-item active">Inicio</a>
                <a href="#caracteristicas" class="ac-sidebar-item">Características</a>
                <a href="#demo" class="ac-sidebar-item">Demo</a>
                <a href="#instalacion" class="ac-sidebar-item">Instalación</a>
                <a href="#creditos" class="ac-sidebar-item">Créditos</a>
            </nav>
        </aside>

        <!-- Contenido principal -->
        <main class="ac-main">
            <div class="ac-topbar">
                <h1 class="ac-heading-xl">AcadFrame</h1>
                <div style="display: flex; gap: 1rem; align-items: center;">
                    <button class="ac-btn-icon" data-ac-darkmode-toggle title="Modo oscuro">🌙</button>
                    <div class="ac-avatar">AF</div>
                </div>
            </div>
            <div class="ac-content">

                <!-- Sección Hero -->
                <section id="inicio" class="hero">
                    <h1>🚀 AcadFrame</h1>
                    <p>Framework CSS/JS ligero y moderno para sistemas académicos y proyectos personales.</p>
                    <a href="#instalacion" class="ac-btn">Comenzar ahora</a>
                    <div class="creator-badge">
                        ✨ Creado por <strong>Tu Nombre</strong> · Puerto Cabello, Venezuela
                    </div>
                </section>

                <!-- Características -->
                <section id="caracteristicas">
                    <h2>✨ Características</h2>
                    <div class="feature-grid">
                        <div class="feature-card"><div class="icon">🎨</div><h4>Diseño moderno</h4><p>No genérico, con personalidad propia</p></div>
                        <div class="feature-card"><div class="icon">🌙</div><h4>Modo oscuro</h4><p>Automático o manual, con persistencia</p></div>
                        <div class="feature-card"><div class="icon">🧩</div><h4>Componentes reutilizables</h4><p>Botones, tarjetas, tablas, formularios y más</p></div>
                        <div class="feature-card"><div class="icon">⚡</div><h4>JavaScript vanilla</h4><p>Sin dependencias, rápido y ligero</p></div>
                        <div class="feature-card"><div class="icon">📊</div><h4>Exportación</h4><p>CSV, impresión, y Excel (opcional)</p></div>
                        <div class="feature-card"><div class="icon">🎭</div><h4>Temas predefinidos</h4><p>Océano, Esmeralda, Rosa</p></div>
                    </div>
                </section>

                <!-- Demo rápida -->
                <section id="demo">
                    <h2>🧪 Demo interactiva</h2>
                    <div class="ac-card" style="padding: 1.5rem;">
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem;">
                            <button class="ac-btn ac-btn-primary" onclick="AcadFrame.toast('¡Hola desde AcadFrame!', 'success')">Toast éxito</button>
                            <button class="ac-btn ac-btn-danger" onclick="AcadFrame.toast('Esto es un error', 'error')">Toast error</button>
                            <button class="ac-btn ac-btn-secondary" onclick="AcadFrame.loader.show(); setTimeout(()=>AcadFrame.loader.hide(), 2000)">Mostrar loader</button>
                            <button class="ac-btn ac-btn-outline" data-ac-darkmode-toggle>🌙 Cambiar tema</button>
                        </div>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                            <span class="ac-badge" style="background: var(--ac-primary-500); color: white; padding: 0.25rem 0.75rem; border-radius: var(--ac-radius-full);">CSS</span>
                            <span class="ac-badge" style="background: var(--ac-success); color: white; padding: 0.25rem 0.75rem; border-radius: var(--ac-radius-full);">JS</span>
                            <span class="ac-badge" style="background: var(--ac-danger); color: white; padding: 0.25rem 0.75rem; border-radius: var(--ac-radius-full);">Modo oscuro</span>
                        </div>
                    </div>
                    <p style="margin-top: 1rem;">Explora la <a href="docs/index.html">documentación completa</a> para ver todos los componentes.</p>
                </section>

                <!-- Instalación -->
                <section id="instalacion">
                    <h2>📦 Instalación rápida</h2>
                    <div class="ac-card" style="padding: 1.5rem; background: var(--ac-gray-50);">
                        <pre style="margin:0; background: var(--ac-gray-900); color: var(--ac-gray-100); padding: 1rem; border-radius: var(--ac-radius-md); overflow-x: auto;"><code>&lt;!-- En el &lt;head&gt; --&gt;
&lt;link rel="stylesheet" href="acadframe/css/acadframe.min.css"&gt;

&lt;!-- Antes de cerrar &lt;/body&gt; --&gt;
&lt;script src="acadframe/js/acadframe.min.js"&gt;&lt;/script&gt;</code></pre>
                        <p style="margin-top: 1rem;">Descarga la carpeta <code>acadframe/</code> desde <a href="#">GitHub</a> y colócala en tu proyecto.</p>
                    </div>
                </section>

                <!-- Créditos -->
                <section id="creditos">
                    <h2>🌟 Créditos</h2>
                    <div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: center; background: var(--ac-gray-50); padding: 1.5rem; border-radius: var(--ac-radius-lg);">
                        <div style="flex: 1; min-width: 200px;">
                            <h3 style="margin-bottom: 0.25rem;">Tu Nombre</h3>
                            <p style="color: var(--ac-gray-600);">📍 Puerto Cabello, Venezuela</p>
                            <p style="color: var(--ac-gray-600);">🐦 <a href="#">@tu-usuario</a> · 📧 <a href="#">tu-email@ejemplo.com</a></p>
                        </div>
                        <div style="text-align: right;">
                            <span class="ac-badge" style="background: var(--ac-primary-500); color: white; padding: 0.5rem 1rem; border-radius: var(--ac-radius-full);">Hecho con ❤️</span>
                        </div>
                    </div>
                    <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--ac-gray-500);">
                        AcadFrame es un proyecto de código abierto bajo licencia MIT.
                    </p>
                </section>

                <footer>
                    <p>© 2026 AcadFrame · Creado por <strong>Tu Nombre</strong> · Puerto Cabello, Venezuela</p>
                </footer>

            </div>
        </main>
    </div>

    <!-- AcadFrame JS -->
    <script src="js/acadframe.min.js"></script>
    <script>
        // (Opcional) resaltar enlace activo en sidebar al hacer scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.ac-sidebar-nav a');
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const top = section.offsetTop - 100;
                if (window.scrollY >= top) current = section.id;
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
            });
        });
    </script>
</body>
</html>

📁 Estructura final para GitHub

acadframe/
├── index.html                ← Landing page (presentación)
├── README.md                 ← Documentación principal
├── package.json
├── package-lock.json
├── css/
│   ├── acadframe.css
│   ├── acadframe.min.css
│   └── src/
├── js/
│   ├── acadframe.js
│   ├── acadframe.min.js
│   └── modals.js (opcional)
└── docs/
    └── index.html            (documentación detallada)
    