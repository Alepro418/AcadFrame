/* ========================================
   AcadFrame CSS Framework v1.0.0
   Framework para sistemas académicos
   Creado por Bachiller Álvaro Parra - Puerto Cabello, Venezuela
   ======================================== */

(function() {
    'use strict';

    // -------------------------------
    // 1. Configuración y utilidades
    // -------------------------------
    const config = {
        dropdownCloseOutside: true,
        formValidationLive: true,
        tableSearchDelay: 300, // ms para búsqueda
        toastDuration: 4000,
        defaultTheme: 'light' // 'light' o 'dark'
    };

    // Almacenar temporizadores de búsqueda
    let searchTimeouts = new Map();

    // -------------------------------
    // 2. Toast notifications (divertidas y modernas)
    // -------------------------------
    const Toast = {
        container: null,

        init() {
            if (!this.container) {
                this.container = document.createElement('div');
                this.container.className = 'ac-toast-container';
                this.container.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 9999;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                `;
                document.body.appendChild(this.container);
            }
        },

        show(message, type = 'info', title = '') {
            this.init();
            const toast = document.createElement('div');
            toast.className = `ac-toast ac-toast-${type}`;
            toast.style.cssText = `
                background: white;
                border-radius: var(--ac-radius-md, 8px);
                box-shadow: var(--ac-shadow-lg, 0 10px 15px -3px rgba(0,0,0,0.1));
                padding: 1rem;
                min-width: 250px;
                max-width: 350px;
                border-left: 4px solid;
                animation: slideInRight 0.3s ease-out;
                backdrop-filter: blur(8px);
                background: rgba(255,255,255,0.95);
            `;

            // Colores según tipo
            const colors = {
                success: 'var(--ac-success, #10b981)',
                error: 'var(--ac-danger, #ef4444)',
                warning: 'var(--ac-warning, #f59e0b)',
                info: 'var(--ac-info, #06b6d4)'
            };
            toast.style.borderLeftColor = colors[type] || colors.info;

            let icon = '';
            if (type === 'success') icon = '✅';
            else if (type === 'error') icon = '❌';
            else if (type === 'warning') icon = '⚠️';
            else icon = 'ℹ️';

            toast.innerHTML = `
                <div style="display: flex; gap: 12px; align-items: flex-start;">
                    <div style="font-size: 1.25rem;">${icon}</div>
                    <div style="flex: 1;">
                        ${title ? `<strong style="display: block; margin-bottom: 4px;">${title}</strong>` : ''}
                        <div style="font-size: 0.875rem;">${message}</div>
                    </div>
                    <button class="ac-toast-close" style="background: none; border: none; cursor: pointer; opacity: 0.6;">✕</button>
                </div>
            `;

            this.container.appendChild(toast);

            // Botón cerrar
            toast.querySelector('.ac-toast-close').addEventListener('click', () => {
                toast.remove();
            });

            // Auto cierre
            setTimeout(() => {
                if (toast.parentNode) toast.remove();
            }, config.toastDuration);
        }
    };

    // Añadir keyframe animation si no existe
    if (!document.querySelector('#ac-toast-keyframes')) {
        const style = document.createElement('style');
        style.id = 'ac-toast-keyframes';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100%);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Exponer Toast globalmente
    window.AcadFrameToast = Toast;

    // -------------------------------
    // 3. Loader / Spinner
    // -------------------------------
    const Loader = {
        overlay: null,

        show(text = 'Cargando...') {
            if (!this.overlay) {
                this.overlay = document.createElement('div');
                this.overlay.className = 'ac-loader-overlay';
                this.overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.5);
                    backdrop-filter: blur(4px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    flex-direction: column;
                    gap: 1rem;
                    transition: all 0.2s;
                `;
                const spinner = document.createElement('div');
                spinner.className = 'ac-spinner';
                spinner.style.cssText = `
                    width: 48px;
                    height: 48px;
                    border: 4px solid rgba(255,255,255,0.3);
                    border-top: 4px solid white;
                    border-radius: 50%;
                    animation: spin 0.6s linear infinite;
                `;
                const textSpan = document.createElement('span');
                textSpan.style.color = 'white';
                textSpan.style.fontWeight = '500';
                textSpan.textContent = text;
                this.overlay.appendChild(spinner);
                this.overlay.appendChild(textSpan);
                document.body.appendChild(this.overlay);

                // Añadir keyframe spin si no existe
                if (!document.querySelector('#ac-spinner-keyframes')) {
                    const spinStyle = document.createElement('style');
                    spinStyle.id = 'ac-spinner-keyframes';
                    spinStyle.textContent = `
                        @keyframes spin {
                            to { transform: rotate(360deg); }
                        }
                    `;
                    document.head.appendChild(spinStyle);
                }
            } else {
                this.overlay.style.display = 'flex';
                const textEl = this.overlay.querySelector('span');
                if (textEl) textEl.textContent = text;
            }
        },

        hide() {
            if (this.overlay) {
                this.overlay.style.display = 'none';
            }
        }
    };
    window.AcadFrameLoader = Loader;

    // -------------------------------
    // 4. Dropdowns (navbar y sidebar)
    // -------------------------------
    function initDropdowns() {
        // Toggle dropdown en navbar
        document.querySelectorAll('.ac-dropdown-toggle').forEach(toggle => {
            toggle.removeEventListener('click', dropdownClickHandler);
            toggle.addEventListener('click', dropdownClickHandler);
        });

        function dropdownClickHandler(e) {
            e.stopPropagation();
            const parent = this.closest('.ac-dropdown');
            if (!parent) return;
            const wasActive = parent.classList.contains('active');
            // Cerrar todos los demás dropdowns
            document.querySelectorAll('.ac-dropdown.active').forEach(d => {
                if (d !== parent) d.classList.remove('active');
            });
            parent.classList.toggle('active', !wasActive);
        }

        // Cerrar dropdowns al hacer clic fuera
        if (config.dropdownCloseOutside) {
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.ac-dropdown')) {
                    document.querySelectorAll('.ac-dropdown.active').forEach(d => {
                        d.classList.remove('active');
                    });
                }
            });
        }
    }

    // -------------------------------
    // 5. Sidebar acordeón (submenús)
    // -------------------------------
    function initSidebarDropdowns() {
        document.querySelectorAll('.ac-sidebar-dropdown-toggle').forEach(toggle => {
            toggle.removeEventListener('click', sidebarDropdownHandler);
            toggle.addEventListener('click', sidebarDropdownHandler);
        });

        function sidebarDropdownHandler(e) {
            e.stopPropagation();
            const parent = this.closest('.ac-sidebar-dropdown');
            if (!parent) return;
            parent.classList.toggle('active');
        }
    }

    // -------------------------------
    // 6. Validación de formularios
    // -------------------------------
    function initFormValidation() {
        // Validación en tiempo real (cuando el usuario escribe)
        if (config.formValidationLive) {
            document.querySelectorAll('.ac-input, .ac-select, .ac-textarea').forEach(input => {
                input.removeEventListener('input', validateField);
                input.addEventListener('input', validateField);
                input.removeEventListener('change', validateField);
                input.addEventListener('change', validateField);
            });
        }

        function validateField(e) {
            const field = e.target;
            const formGroup = field.closest('.ac-form-group');
            if (!formGroup) return;
            const errorMsg = formGroup.querySelector('.ac-error-message');
            const isRequired = field.hasAttribute('required');
            let isValid = true;
            let errorText = '';

            if (isRequired && !field.value.trim()) {
                isValid = false;
                errorText = 'Este campo es obligatorio.';
            } else if (field.type === 'email' && field.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    isValid = false;
                    errorText = 'Ingresa un correo electrónico válido.';
                }
            } else if (field.type === 'number' && field.value) {
                if (isNaN(field.value)) {
                    isValid = false;
                    errorText = 'Debe ser un número válido.';
                }
            }

            if (!isValid) {
                field.classList.add('ac-invalid');
                if (errorMsg) {
                    errorMsg.textContent = errorText;
                    errorMsg.classList.add('ac-show');
                }
            } else {
                field.classList.remove('ac-invalid');
                if (errorMsg) {
                    errorMsg.classList.remove('ac-show');
                }
            }
        }

        // Validación al enviar el formulario
        document.querySelectorAll('.ac-form').forEach(form => {
            form.removeEventListener('submit', formSubmitHandler);
            form.addEventListener('submit', formSubmitHandler);
        });

        function formSubmitHandler(e) {
            let isValid = true;
            const form = e.target;
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                const fieldValid = field.closest('.ac-form-group') ? 
                    !field.classList.contains('ac-invalid') : 
                    !!field.value.trim();
                if (!fieldValid) {
                    isValid = false;
                    // Disparar validación manual
                    const event = new Event('input', { bubbles: true });
                    field.dispatchEvent(event);
                }
            });
            if (!isValid) {
                e.preventDefault();
                Toast.show('Por favor, completa los campos correctamente.', 'error', 'Formulario inválido');
            }
        }
    }

    // -------------------------------
    // 7. Tablas: búsqueda y ordenamiento
    // -------------------------------
    function initTableFeatures() {
        // Búsqueda en vivo (usando .ac-search dentro de .ac-table-container)
        document.querySelectorAll('.ac-table-container .ac-search').forEach(searchInput => {
            const container = searchInput.closest('.ac-table-container');
            const table = container.querySelector('.ac-table');
            if (!table) return;

            searchInput.removeEventListener('input', searchHandler);
            searchInput.addEventListener('input', searchHandler);

            function searchHandler(e) {
                const term = e.target.value.toLowerCase();
                const rows = table.querySelectorAll('tbody tr');
                rows.forEach(row => {
                    const text = row.innerText.toLowerCase();
                    if (text.includes(term)) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            }
        });

        // Ordenamiento por columnas (atributo data-sort)
        document.querySelectorAll('.ac-table th[data-sort]').forEach(th => {
            th.style.cursor = 'pointer';
            th.removeEventListener('click', sortHandler);
            th.addEventListener('click', sortHandler);
        });

        function sortHandler(e) {
            const th = e.currentTarget;
            const column = th.dataset.sort;
            const table = th.closest('.ac-table');
            const tbody = table.querySelector('tbody');
            const rows = Array.from(tbody.querySelectorAll('tr'));
            const isAsc = th.classList.contains('sort-asc');
            // Resetear clases de orden en todos los th
            table.querySelectorAll('th').forEach(h => {
                h.classList.remove('sort-asc', 'sort-desc');
            });
            th.classList.add(isAsc ? 'sort-desc' : 'sort-asc');

            rows.sort((a, b) => {
                let aVal = a.querySelector(`td:nth-child(${th.cellIndex + 1})`)?.innerText || '';
                let bVal = b.querySelector(`td:nth-child(${th.cellIndex + 1})`)?.innerText || '';
                // Intentar orden numérico
                const aNum = parseFloat(aVal);
                const bNum = parseFloat(bVal);
                if (!isNaN(aNum) && !isNaN(bNum)) {
                    return isAsc ? bNum - aNum : aNum - bNum;
                }
                return isAsc ? bVal.localeCompare(aVal) : aVal.localeCompare(bVal);
            });
            rows.forEach(row => tbody.appendChild(row));
        }
    }

    // -------------------------------
    // 8. Exportar tabla a Excel / CSV / Imprimir
    // -------------------------------
    window.AcadFrameExport = {
        toCSV(tableElement, filename = 'export.csv') {
            const rows = tableElement.querySelectorAll('tr');
            const csv = [];
            rows.forEach(row => {
                const cols = row.querySelectorAll('th, td');
                const rowData = Array.from(cols).map(cell => `"${cell.innerText.replace(/"/g, '""')}"`);
                csv.push(rowData.join(','));
            });
            const blob = new Blob([csv.join('\n')], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            Toast.show('Archivo CSV exportado correctamente', 'success');
        },

        print(tableElement, title = 'Reporte') {
            const originalTitle = document.title;
            document.title = title;
            const printWindow = window.open('', '_blank');
            const content = `
                <html>
                <head><title>${title}</title><link rel="stylesheet" href="${window.location.origin}${window.location.pathname}?print=1"></head>
                <body>${tableElement.outerHTML}</body>
                </html>
            `;
            printWindow.document.write(content);
            printWindow.document.close();
            printWindow.print();
            document.title = originalTitle;
        }
    };

    // Si se incluye SheetJS (XLSX) opcional, se puede extender
    if (typeof XLSX !== 'undefined') {
        window.AcadFrameExport.toExcel = function(tableElement, filename = 'reporte.xlsx') {
            const workbook = XLSX.utils.book_new();
            const sheet = XLSX.utils.table_to_sheet(tableElement);
            XLSX.utils.book_append_sheet(workbook, sheet, 'Reporte');
            XLSX.writeFile(workbook, filename);
            Toast.show('Archivo Excel exportado', 'success');
        };
    }

    // -------------------------------
    // 9. Modo oscuro con botón
    // -------------------------------
    function initDarkMode() {
        const toggleBtn = document.querySelector('[data-ac-darkmode-toggle]');
        if (!toggleBtn) return;

        const storageKey = 'acadframe-theme';
        const savedTheme = localStorage.getItem(storageKey);
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
        } else if (savedTheme === 'light') {
            document.body.classList.remove('dark');
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !savedTheme) {
            document.body.classList.add('dark');
        }

        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
            Toast.show(`Modo ${isDark ? 'oscuro' : 'claro'} activado`, 'info');
        });
    }

    // -------------------------------
    // 10. Inicialización general
    // -------------------------------
    function init() {
        initDropdowns();
        initSidebarDropdowns();
        initFormValidation();
        initTableFeatures();
        initDarkMode();

        // Agregar clase active a enlaces que coincidan con la URL actual
        const currentPath = window.location.pathname;
        document.querySelectorAll('.ac-sidebar-nav a, .ac-navbar-menu a').forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
                // Para sidebar, también activar el padre dropdown si existe
                const parentDropdown = link.closest('.ac-sidebar-dropdown');
                if (parentDropdown) parentDropdown.classList.add('active');
            }
        });

        // Exponer utilidades globales
        window.AcadFrame = {
            toast: Toast.show.bind(Toast),
            loader: Loader,
            export: window.AcadFrameExport,
            modal: Modal,
            version: '1.0.0'
        };
    }

    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

// -------------------------------
// 11. Modales (para formularios y confirmaciones)
// -------------------------------
const Modal = {
    open({ title, content, onConfirm, onCancel, confirmText = 'Aceptar', cancelText = 'Cancelar' }) {
        // Eliminar modal abierto previamente
        this.close();

        const overlay = document.createElement('div');
        overlay.className = 'ac-modal-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9998;
            animation: fadeIn 0.2s ease-out;
        `;

        const modal = document.createElement('div');
        modal.className = 'ac-modal';
        modal.style.cssText = `
            background: white;
            border-radius: var(--ac-radius-lg, 12px);
            box-shadow: var(--ac-shadow-xl, 0 20px 25px -5px rgba(0,0,0,0.1));
            max-width: 500px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            padding: 1.5rem;
            animation: scaleIn 0.2s ease-out;
        `;

        modal.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h3 style="margin: 0;">${title}</h3>
                <button class="ac-modal-close" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; opacity: 0.6;">&times;</button>
            </div>
            <div class="ac-modal-body">${content}</div>
            <div style="display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 1.5rem;">
                <button class="ac-btn ac-btn-secondary ac-modal-cancel">${cancelText}</button>
                <button class="ac-btn ac-btn-primary ac-modal-confirm">${confirmText}</button>
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // Eventos
        const closeModal = () => {
            overlay.remove();
            if (onCancel) onCancel();
        };

        modal.querySelector('.ac-modal-close').addEventListener('click', closeModal);
        modal.querySelector('.ac-modal-cancel').addEventListener('click', closeModal);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });

        modal.querySelector('.ac-modal-confirm').addEventListener('click', () => {
            if (onConfirm) onConfirm();
            overlay.remove();
        });

        // Cerrar con ESC
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    },

    close() {
        document.querySelector('.ac-modal-overlay')?.remove();
    }
};

// Exponer Modal globalmente
window.AcadFrameModal = Modal;