import { useEffect, useState } from 'react'
import { Card } from '@/ui/Card'
import { Section } from '@/ui/Section'
import { FullWidthContainer } from '@/ui/FullWidthContainer'
import { Bar } from 'react-chartjs-2'
import { agruparPorFranja, topTecnologias } from '@/utils/stats'
import { styled } from '@/stitches.config'
import 'chart.js/auto'
import { SectionTitle } from '@/ui/SectionTitle'

const ChartWrapper = styled('div', {
  overflowY: 'auto',
  paddingRight: '$sm',
  width: '96%',
  padding: '$lg',
})

const API_URL = 'http://localhost:8000/api/dailylog/'

export function StatsView() {
  const [barras, setBarras] = useState(null)
  const [tecnologias, setTecnologias] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchStats()
  }, [])

  async function fetchStats() {
    try {
      const res = await fetch(`${API_URL}?ordering=-fecha_creacion`)
      const data = await res.json()
      const logs = data.results?.slice(0, 20) || [] // ✅ solo las 20 más recientes

      if (!logs.length) {
        setError('No hay datos disponibles.')
        return
      }

      setBarras(agruparPorFranja(logs))
      setTecnologias(topTecnologias(logs))
    } catch (err) {
      setError('Error al cargar estadísticas.')
    }
  }

  return (
    <FullWidthContainer>
      <ChartWrapper>
        <Section accent="left">
          <SectionTitle>📊 Horas por franja del día</SectionTitle>
          {barras ? <Bar data={barras} /> : <p>{error || 'Cargando...'}</p>}
        </Section>

        <Section accent="cyan" css={{ marginTop: '$xl' }}>
          <SectionTitle>🧠 Top tecnologías</SectionTitle>
          {tecnologias ? (
            <Bar data={tecnologias} options={{ indexAxis: 'y' }} />
          ) : (
            <p>{error || 'Cargando...'}</p>
          )}
        </Section>
      </ChartWrapper>
    </FullWidthContainer>
  )
}
