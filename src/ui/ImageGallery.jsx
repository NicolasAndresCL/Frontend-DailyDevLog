import { styled } from '@/stitches.config'

const Grid = styled('div', {
  display: 'grid',
  gap: '$sm',
  gridTemplateColumns: 'repeat(3, 1fr)',
  '@bp1': { gridTemplateColumns: 'repeat(2, 1fr)' },
  '@bp0': { gridTemplateColumns: '1fr' },
})

const Thumb = styled('a', {
  display: 'block',
  borderRadius: '$sm',
  overflow: 'hidden',
  border: '1px solid $border',
  backgroundColor: '$surface',
  transition: 'transform 120ms ease',
  '&:hover': { transform: 'scale(1.01)' },
  img: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    display: 'block',
  },
})

export function ImageGallery({ images = [], baseUrl = '' }) {
  // Normaliza: filtra vacíos y convierte relativos a absolutos si hay baseUrl
  const items = images
    .filter(Boolean)
    .map((src) => (src?.startsWith('http') ? src : (baseUrl ? baseUrl + src : src)))
    .filter(Boolean)

  if (items.length === 0) return null

  return (
    <Grid>
      {items.map((src, i) => (
        <Thumb key={i} href={src} target="_blank" rel="noopener noreferrer">
          <img src={src} alt={`Captura ${i + 1}`} loading="lazy" />
        </Thumb>
      ))}
    </Grid>
  )
}
