export async function readMarkdownFiles(filename = null) {
  // Simulación: en entorno real, usar API o File System Access API
  const mockFiles = ['2025-08-30_refactor_visual.md', '2025-08-29_integracion_api.md']
  const mockContent = {
    '2025-08-30_refactor_visual.md': '# Refactor visual\n\n**Fecha:** 2025-08-30\n...',
    '2025-08-29_integracion_api.md': '# Integración API\n\n**Fecha:** 2025-08-29\n...',
  }

  if (filename) return mockContent[filename] || ''
  return mockFiles
}
