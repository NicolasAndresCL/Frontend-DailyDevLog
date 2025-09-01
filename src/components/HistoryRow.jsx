import { Card } from '@/ui/Card'
import { Button } from '@/ui/Button'
import { exportToMarkdown } from '@utils/exportToMarkdown'

export function HistoryRow({ log }) {
  const fecha = new Date(log.fecha_creacion).toLocaleString('es-CL', {
    timeZone: 'America/Santiago',
  })

  const estado = log.link_publicacion_linkedin ? '🟢 Publicado' : '🟡 Pendiente'

  return (
    <Card css={{ marginBottom: '$sm', padding: '$md' }}>
      <p style={{ color: '$yellow' }}>{fecha}</p>
      <p style={{ color: '$green' }}>{log.nombre_tarea}</p>
      <p style={{ color: '$blue' }}>{log.tecnologias_utilizadas}</p>
      <p style={{ color: '$textPrimary' }}>{log.descripcion}</p>
      <p style={{ color: '$purple' }}>{estado}</p>

      <div style={{ display: 'flex', gap: '$sm', marginTop: '$sm' }}>
        <Button variant="ghost" onClick={() => exportToMarkdown(log)}>⬇ Exportar</Button>
        <Button variant="ghost" onClick={() => publicar(log)}>🔗 Publicar</Button>
        <Button variant="ghost" onClick={() => mostrarIA(log)}>🤖 IA</Button>
      </div>
    </Card>
  )
}

function publicar(log) {
  const link = log.link_publicacion_linkedin
  alert(link ? `Ya fue publicado:\n${link}` : 'Simulación: se publicaría en LinkedIn con los datos de esta tarea.')
}

function mostrarIA(log) {
  const iaLink = log.link_ia_principal
  alert(iaLink ? `Link IA principal:\n${iaLink}` : 'No se ha registrado un link de IA principal.')
}
