markdown
# 🧠 DailyDevLog — Frontend Técnico

Frontend modular para **registrar, visualizar y exportar tareas diarias de desarrollo**, diseñado con estética **VSCode Dark+**, arquitectura escalable y componentes reutilizables.  
Optimizado para **accesibilidad, coherencia visual** y **branding técnico**.

---

## 🚀 Features

- **Registro de tareas** con campos técnicos y adjuntos
- **Historial visual** con paginación y exportación a Markdown
- **Estadísticas dinámicas** por franja horaria y tecnologías más usadas
- **Vista previa** de archivos Markdown
- **Interfaz técnica** con tokens semánticos, tipografía monoespaciada y layout profesional
- **Protección granular**: solo usuarios autenticados pueden registrar tareas

---

## 🧱 Project Structure

src/ ├── components/ # Vistas funcionales (TaskForm, HistoryView, StatsView, ExportView) ├── pages/ # Página principal (Home.jsx) ├── ui/ # Componentes visuales reutilizables (Card, Button, Section, etc.) ├── utils/ # Funciones técnicas (stats, exportToMarkdown, fileUtils) ├── assets/ # Íconos y recursos visuales ├── stitches.config.js # Configuración visual con tokens y theming ├── main.jsx # Entrada principal └── index.html # HTML base

Código

---

## 🎨 Tecnologías Utilizadas

- **Frontend Core:** React, JSX, JavaScript, CSS
- **UI & Theming:** Radix UI, Stitches, tokens semánticos, tipografía técnica
- **Build & Dev:** Vite
- **Visualización de datos:** Chart.js
- **Documentación & Exportación:** Markdown
- **Control de versiones:** Git
- **Integración Backend:** Django REST Framework + JWT (solo para creación de tareas)

---

## 📦 Setup

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

```
## 📈 Avances Técnicos
✅ Migración visual completa de TailwindCSS a Radix UI + Stitches

✅ Refactor modular con tokens semánticos y tipografía técnica

✅ Automatización de exportación Markdown

✅ Paginación funcional en historial

✅ Scroll técnico con estilo VSCode

✅ Layout flexible con FullWidthContainer y Section

✅ Integración de autenticación JWT para proteger creación de tareas

## 📄 License
Este proyecto está licenciado bajo MIT License. Consulta el archivo LICENSE para más detalles.

## 👨‍💻 Autor
Nicolás Andrés Cano Leal Frontend & Backend Developer 📍 Rancagua, Chile 
🔗 [nicolasandrescl.pythonanywhere.com](https://nicolasandrescl.pythonanywhere.com)