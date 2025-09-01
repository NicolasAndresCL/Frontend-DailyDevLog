export function agruparPorFranja(logs) {
  const franja = (hora) =>
    hora < 12 ? 'mañana' : hora < 18 ? 'tarde' : 'noche'

  const agrupado = {}
  logs.forEach((log) => {
    const fecha = new Date(log.fecha_creacion)
    const hora = fecha.getHours()
    const dia = fecha.toLocaleDateString()
    const parte = franja(hora)
    const key = `${dia} - ${parte}`
    agrupado[key] = (agrupado[key] || 0) + parseFloat(log.horas || 0)
  })

  return {
    labels: Object.keys(agrupado),
    datasets: [
      {
        label: 'Horas trabajadas',
        data: Object.values(agrupado),
        backgroundColor: '#6A9955',
      },
    ],
  }
}

export function topTecnologias(logs) {
  const contador = {}
  logs.forEach((log) => {
    const tecs = (log.tecnologias_utilizadas || '').split(',')
    tecs.forEach((t) => {
      const key = t.trim()
      if (key) contador[key] = (contador[key] || 0) + parseFloat(log.horas || 0)
    })
  })

  const ordenado = Object.entries(contador)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)

  return {
    labels: ordenado.map(([tec]) => tec),
    datasets: [
      {
        label: 'Horas por tecnología',
        data: ordenado.map(([, horas]) => horas),
        backgroundColor: '#569CD6',
      },
    ],
  }
}
