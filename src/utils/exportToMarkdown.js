// src/utils/exportToMarkdown.js

export function exportToMarkdown(log) {
  const get = (attr) => log?.[attr] ?? null

  // 🗂 Metadata
  const fechaRaw = get('fecha_creacion')
  const fecha = typeof fechaRaw === 'string' ? fechaRaw.slice(0, 10) : new Date(fechaRaw).toISOString().slice(0, 10)
  const nombreTarea = get('nombre_tarea') || 'tarea'
  const nombreArchivo = `${fecha}_${nombreTarea.replace(/\s+/g, '_')}.md`

  // 📝 Markdown content
  const contenido = []

  contenido.push(`# ${nombreTarea}`, '')
  contenido.push(`**Fecha:** ${fecha}`)
  contenido.push(`**Horas trabajadas:** ${get('horas')}`)
  contenido.push(`**Tecnologías utilizadas:** ${get('tecnologias_utilizadas')}`, '', '---', '', '## Descripción', '', get('descripcion') || '', '', '---', '', '## Links técnicos', '')

  const links = {
    'Publicación en LinkedIn': get('link_publicacion_linkedin'),
    'IA principal': get('link_ia_principal'),
    'IA secundaria': get('link_ia_secundaria'),
    'IA terciaria': get('link_ia_terciaria'),
    'Repositorio': get('link_respositorio'),
  }

  Object.entries(links).forEach(([label, url]) => {
    if (url) contenido.push(`- [${label}](${url})`)
  })

  if (get('commit_principal')) {
    contenido.push(`- Commit: \`${get('commit_principal')}\``)
  }

  contenido.push('', '---', '', '## Imágenes', '')

  for (let i = 1; i <= 3; i++) {
    const url = get(`imagen_${i}_url`)
    if (url) contenido.push(`![Imagen ${i}](${url})`)
  }

  const markdown = contenido.filter(Boolean).join('\n')

  // 📁 Crear archivo y disparar descarga
  const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = nombreArchivo
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
