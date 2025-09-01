import { Button } from '@/ui/Button'

export function Pagination({ page, setPage, total }) {
  const totalPages = Math.ceil(total / 10) // asumiendo 10 por página

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
      <Button variant="ghost" disabled={page <= 1} onClick={() => setPage(page - 1)}>
        ⟵ Anterior
      </Button>
      <span style={{ color: '#9CDCFE', fontFamily: 'Fira Code' }}>
        Página {page} de {totalPages}
      </span>
      <Button variant="ghost" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
        Siguiente ⟶
      </Button>
    </div>
  )
}
