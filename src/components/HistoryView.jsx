import { useEffect, useState } from 'react'
import { Card } from '@/ui/Card'
import { Input } from '@/ui/Input'
import { Button } from '@/ui/Button'
import { HistoryRow } from './HistoryRow'
import { Pagination } from './Pagination'
import { FullWidthContainer } from '@/ui/FullWidthContainer'
import { ButtonRow } from '@/ui/ButtonRow'
import { SubTitle } from '@/ui/SubTitle'
import { Icons } from '@/ui/icons'

const API_URL = 'http://localhost:8000/api/dailylog/'

export function HistoryView() {
  const [logs, setLogs] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchLogs()
  }, [page, search])

  async function fetchLogs() {
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}?page=${page}&search=${search}&ordering=-fecha_creacion`)
      const data = await res.json()
      setLogs(data.results || [])
      setCount(data.count || 0)
    } catch (err) {
      console.error('Error al cargar historial:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <FullWidthContainer>
        <Card css={{ padding: '$lg', backgroundColor: '$background' }}>
          <SubTitle css={{ display: 'flex', alignItems: 'center', gap: '$sm' }}>
            <Icons.archive color="red"/>
            Historial de tareas
          </SubTitle>

          {/* Filtro */}
          <ButtonRow>
            <Input
              placeholder="Buscar por tecnología"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="primary" size="xs" onClick={fetchLogs}>
              Buscar
            </Button>

          </ButtonRow>
          
          {/* Tabla */}
          <div style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '8px' }}>
            {logs.map((log) => (
              <HistoryRow key={log.id} log={log} />
            ))}
          </div>

          {/* Paginación */}
          <Pagination page={page} setPage={setPage} total={count} />
        </Card>
    </FullWidthContainer>
  )
}
