// src/views/HistoryControls.jsx
import { styled } from '@/stitches.config'
import { Input } from '@/ui/Input'
import { Button } from '@/ui/Button'

const Row = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  gap: '$sm',
  marginBottom: '$md',
})

// ocupa todo el espacio disponible, el input nunca desborda
const InputGroup = styled('div', {
  flex: '1 1 0',
  minWidth: 0,
})

// ocupa espacio igual al InputGroup pero centra su contenido
const CenterGroup = styled('div', {
  flex: '1 1 0',
  display: 'flex',
  justifyContent: 'center',
})

// la paginación siempre fija a la derecha
const PaginationGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$sm',
  flex: '0 0 auto',
})

const PageText = styled('span', {
  fontFamily: '$mono',
  color: '$textSecondary',
})

export function HistoryControls({
  searchValue,
  onSearchChange,
  onSearch,
  page,
  total,
  onPrev,
  onNext,
}) {
  const pageCount = Math.max(1, Math.ceil((total || 0) / 10))

  return (
    <Row>
      <InputGroup>
        <Input
          placeholder="Buscar por tecnología"
          value={searchValue}
          onChange={onSearchChange}
          css={{ width: '100%' }}
        />
      </InputGroup>

      <CenterGroup>
        <Button onClick={onSearch}>Buscar</Button>
      </CenterGroup>

      <PaginationGroup>
        <Button variant="ghost" onClick={onPrev} disabled={page <= 1}>⟵</Button>
        <PageText>Página {page} de {pageCount}</PageText>
        <Button variant="ghost" onClick={onNext} disabled={page >= pageCount}>⟶</Button>
      </PaginationGroup>
    </Row>
  )
}
