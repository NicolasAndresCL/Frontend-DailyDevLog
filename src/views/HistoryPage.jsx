import { useState, useEffect } from 'react'
import { HistoryControls } from './HistoryControls'
import { HistoryRow } from './HistoryRow'
import { Pagination } from '@/ui/Pagination'
import { FullWidthContainer } from '@/ui/FullWidthContainer'

const API_URL = 'http://localhost:8000/api/dailylog/'

export function HistoryPage() {
  const [logs, setLogs] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  const fetchLogs = async () => {
    const res = await fetch(
      `${API_URL}?page=${page}&search=${search}&ordering=-fecha_creacion`
    )
    const json = await res.json()
    setLogs(json.results || [])
    setTotal(json.count || 0)
  }

  useEffect(() => {
    fetchLogs()
  }, [page, search])

  return (
    <FullWidthContainer>
      <HistoryControls
        searchValue={search}
        onSearchChange={(e) => { setSearch(e.target.value); setPage(1) }}
        onSearch={fetchLogs}
        page={page}
        total={total}
        onPrev={() => setPage((p) => Math.max(1, p - 1))}
        onNext={() => setPage((p) => p + 1)}
      />

      {logs.map((log) => (
        <HistoryRow key={log.id} log={log} onLinkUpdated={fetchLogs} />
      ))}

      <Pagination page={page} setPage={setPage} total={total} />
    </FullWidthContainer>
  )
}
