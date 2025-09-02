import { Card } from '@/ui/Card'
import { Button } from '@/ui/Button'
import { exportToMarkdown } from '@/utils/exportToMarkdown'
import { P } from '@/ui/P'
import { Strong } from '@/ui/Strong'
import { ButtonRow } from '@/ui/ButtonRow'
import { Icons } from '@/ui/icons'

export function HistoryRow({ log }) {
  const fecha = new Date(log.fecha_creacion).toLocaleString('es-CL', {
    timeZone: 'America/Santiago',
  })

  const estado = log.link_publicacion_linkedin ? 'Publicado' : 'Pendiente'
  const estadoColor = log.link_publicacion_linkedin ? 'green' : 'yellow'
  const imagenes = [log.imagen_1, log.imagen_2, log.imagen_3].filter(Boolean)

  return (
    <Card css={{ marginBottom: '$sm', padding: '$md' }}>
      <P color="yellow">
        <Icons.calendar size= 'xs' css={{ color: '$cyan', marginRight: '$sm', size: '$xs' }} />
        <Strong color="blue" uppercase>Fecha:</Strong> {fecha}
      </P>

      <P color="green">
        <Icons.bolt size= 'xs' css={{ color: '$cyan', marginRight: '$sm' }} />
        <Strong color="blue" uppercase>Tarea:</Strong> {log.nombre_tarea}
      </P>

      <P color="yellow">
        <Icons.layers size= 'xs' css={{ color: '$cyan', marginRight: '$sm' }} />
        <Strong color="blue" uppercase>Tecnologías:</Strong> {log.tecnologias_utilizadas}
      </P>

      <P color="purple">
        <Icons.code size= 'xs' css={{ color: '$cyan', marginRight: '$sm' }} />
        <Strong color="blue" uppercase>Descripción:</Strong> {log.descripcion}
      </P>

      <P color="orange">
        <Icons.clock size= 'xs' css={{ color: '$cyan', marginRight: '$sm' }} />
        <Strong color="blue" uppercase>Horas trabajadas:</Strong> {log.horas || 'No registradas'}
      </P>

      <P color={estadoColor}>
        <Icons.check size= 'xs' css={{ color: '$cyan', marginRight: '$sm' }} />
        <Strong color="blue" uppercase>Estado:</Strong> {estado}
      </P>

      {/* 🔗 Links técnicos */}
      {log.link_ia_principal && (
        <P>
          <Icons.bolt size= 'xs' css={{ color: '$cyan', marginRight: '$sm' }} />
          <Strong color="blue" uppercase>IA principal:</Strong>{' '}
          <a href={log.link_ia_principal} target="_blank" rel="noopener noreferrer">{log.link_ia_principal}</a>
        </P>
      )}
      {log.link_respositorio && (
        <P color="cyan">
          <Icons.github size= 'xs' css={{ color: '$cyan', marginRight: '$sm' }} />
          <Strong color="blue" uppercase>Repositorio:</Strong>{' '}
          <a href={log.link_respositorio} target="_blank" rel="noopener noreferrer">{log.link_respositorio}</a>
        </P>
      )}
      {log.commit_principal && (
        <P color="yellow">
          <Icons.code size= 'xs' css={{ color: '$cyan', marginRight: '$sm' }} />
          <Strong color="blue" uppercase>Commit:</Strong> {log.commit_principal}
        </P>
      )}

      {/* 🖼️ Imágenes registradas */}
      {imagenes.length > 0 && (
        <div style={{ marginTop: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Icons.upload size= 'xs' color="cyan" />
            <Strong color="cyan" uppercase>Capturas registradas:</Strong>
          </div>
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
            {imagenes.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Captura ${index + 1}`}
                style={{
                  width: '350px',
                  height: 'auto',
                  borderRadius: '6px',
                  border: '1px solid #3f51b5',
                  objectFit: 'cover',
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* 🎯 Acciones */}
      <ButtonRow>
        <Button variant="ghost" onClick={() => exportToMarkdown(log)}>
          <Icons.upload color="yellow" size="xs" /> Exportar
        </Button>
        <Button variant="ghost" onClick={() => publicar(log)}>
          <Icons.link color="yellow" size="xs"/> Publicar
        </Button>
        <Button variant="ghost" onClick={() => mostrarIA(log)}>
          <Icons.bolt color="yellow" size="xs"/> IA
        </Button>
      </ButtonRow>
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
