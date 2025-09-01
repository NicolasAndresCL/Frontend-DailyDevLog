import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import { TaskForm } from '@/components/TaskForm'
import { HistoryView } from '@/components/HistoryView'
import { StatsView } from '@/components/StatsView'
import { ExportView } from '@/components/ExportView'
import { styled } from '@/stitches.config'
import { DashboardTitle } from '@/ui/DashboardTitle'
import { TabLabel } from '@/ui/TabLabel'
import { FooterCard } from '@/components/FooterCard'

const Container = styled('div', {
  backgroundColor: '$background',
  color: '$textPrimary',
  fontFamily: '$mono',
  minHeight: '100vh',
  width: '100%',
  padding: '$lg',
  display: 'flex',           // 👈 necesario para que alignItems funcione
  flexDirection: 'column',
  alignItems: 'center',
})
const StyledTabsList = styled(TabsList, {
  display: 'flex',
  justifyContent: 'center',  // 👈 centra los triggers
  gap: '$md',
  marginBottom: '$lg',
})

// const TabLabel = styled('span', {
//   display: 'flex',
//   alignItems: 'center',
//   gap: '$sm',
//   fontWeight: 'bold',
//   color: '$yellow',
// })


export function Home() {
  return (
    <Container>
      <DashboardTitle>💻 Dashboard TI Diarias</DashboardTitle>
      <Tabs defaultValue="formulario">
        <StyledTabsList>
          <TabsTrigger value="formulario">
            <TabLabel>📝 Formulario Tareas</TabLabel>
          </TabsTrigger>
          <TabsTrigger value="historial">
            <TabLabel>📂 Historial</TabLabel>
          </TabsTrigger>
          <TabsTrigger value="estadisticas">
            <TabLabel>📊 Estadísticas</TabLabel>
          </TabsTrigger>
          <TabsTrigger value="exportar">
            <TabLabel>📄 Exportar</TabLabel>
          </TabsTrigger>
        </StyledTabsList>

        <TabsContent value="formulario">
          <TaskForm />
        </TabsContent>
        <TabsContent value="historial">
          <HistoryView />
        </TabsContent>
        <TabsContent value="estadisticas">
          <StatsView />
        </TabsContent>
        <TabsContent value="exportar">
          <ExportView />
        </TabsContent>
      </Tabs>
      <FooterCard />
    </Container>
  )
}
