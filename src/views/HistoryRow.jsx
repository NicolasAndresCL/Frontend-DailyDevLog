// src/views/HistoryRow.jsx
import { useState } from 'react'
import { styled } from '@/stitches.config'
import { Card } from '@/ui/Card'
import { Strong } from '@/ui/Strong'
import { Button } from '@/ui/Button'
import { ButtonRow } from '@/ui/ButtonRow'
import { Input } from '@/ui/Input'
import { Icons } from '@/ui/icons'
import { exportToMarkdown } from '@/utils/exportToMarkdown'
import { ImageGallery } from '@/ui/ImageGallery'
import { P } from '@/ui/P'

const Grid = styled('div', {
  display: 'grid',
  gap: '$sm',
  gridTemplateColumns: '1fr',
  '@bp1': { gridTemplateColumns: '1fr 1fr' },
  '@bp2': { gridTemplateColumns: 'repeat(3, 1fr)' },
})



const FullRow = styled('div', {
  gridColumn: '1 / -1',
})

const MEDIA_BASE_URL = import.meta.env.VITE_MEDIA_URL || 'http://localhost:8000'

export function HistoryRow({ log, onLinkUpdated }) {
  const [editing, setEditing] = useState(false)
  const [linkVal, setLinkVal] = useState(log.link_publicacion_linkedin || '')

  const fecha = new Date(log.fecha_creacion).toLocaleDateString('es-CL')
  const status = log.link_publicacion_linkedin ? 'Publicado' : 'Pendiente'
  const color = log.link_publicacion_linkedin ? 'green' : 'yellow'

  const images = [log.imagen_1, log.imagen_2, log.imagen_3]

  const save = async () => {
    const token = localStorage.getItem('accessToken')
    await fetch(`http://localhost:8000/api/dailylog/${log.id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ link_publicacion_linkedin: linkVal }),
    })
    setEditing(false)
    onLinkUpdated?.()
  }

  return (
    <Card css={{ padding: '$md' }}>
      <Grid>
        <P color="cyan"><Icons.calendar size="xs" color="purple" /><Strong color="secondary"> Fecha:</Strong> {fecha}</P>
        <P color="cyan"><Icons.edit size="xs" color="purple" /><Strong color="secondary"> Proyecto:</Strong> {log.project_name}</P>
        <P color="cyan"><Icons.layers size="xs" color="purple" /><Strong color="secondary"> Tipo:</Strong> {log.project_type}</P>

        <FullRow>
          <P color="cyan"><Icons.bolt size="xs" color="purple" /><Strong color="secondary"> Tarea:</Strong> {log.nombre_tarea}</P>
        </FullRow>
        <FullRow>
          <P color="cyan"><Icons.code size="xs" color="purple" /><Strong color="secondary"> Descripción:</Strong> {log.descripcion}</P>
        </FullRow>

        <P color="cyan"><Icons.clock size="xs" color="purple" /><Strong color="secondary"> Horas:</Strong> {log.horas}</P>
        <P color="cyan"><Icons.check size="xs" color="purple" /><Strong color="secondary"> Estado:</Strong> {status}</P>

        <FullRow>
          {editing ? (
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Input
                value={linkVal}
                onChange={(e) => setLinkVal(e.target.value)}
                placeholder="URL LinkedIn"
                css={{ flex: 1 }}
              />
              <Button onClick={save}>Guardar</Button>
              <Button variant="ghost" onClick={() => setEditing(false)}>Cancelar</Button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Button variant="primary" onClick={() => setEditing(true)}>
                {log.link_publicacion_linkedin ? 'Editar link' : 'Publicar'}
              </Button>
              {log.link_publicacion_linkedin && (
                <a href={log.link_publicacion_linkedin} target="_blank" rel="noopener noreferrer">
                  Ver LinkedIn
                </a>
              )}
            </div>
          )}
        </FullRow>

        {/* Galería de imágenes */}
        <FullRow>
          <ImageGallery images={images} baseUrl={MEDIA_BASE_URL} />
        </FullRow>

        <ButtonRow css={{ gridColumn: '1 / -1', justifyContent: 'flex-end' }}>
          <Button variant="ghost" onClick={() => exportToMarkdown(log)}>
            <Icons.upload size="xs" /> Exportar
          </Button>
          <Button variant="ghost" onClick={() => alert(log.link_ia_principal || 'No IA')}>
            <Icons.bolt size="xs" /> IA
          </Button>
        </ButtonRow>
      </Grid>
    </Card>
  )
}
