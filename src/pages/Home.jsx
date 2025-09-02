import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import { TaskForm } from '@/components/TaskForm'
import { HistoryView } from '@/components/HistoryView'
import { StatsView } from '@/components/StatsView'
import { ExportView } from '@/components/ExportView'
import { styled } from '@/stitches.config'
import { DashboardTitle } from '@/ui/DashboardTitle'
import { TabLabel } from '@/ui/TabLabel'
import { FooterCard } from '@/components/FooterCard'
import { Icons } from '@/ui/icons'

const Container = styled('div', {
  backgroundColor: '$background',
  color: '$textPrimary',
  fontFamily: '$mono',
  minHeight: '100vh',
  width: '100%',
  padding: '$lg',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const StyledTabsList = styled(TabsList, {
  display: 'flex',
  justifyContent: 'center',
  gap: '$md',
  marginBottom: '$lg',
})

export function Home() {
  return (
    <Container>
      <DashboardTitle css={{ display: 'flex', alignItems: 'center', gap: '$sm' }}>
        <Icons.code color="yellow" />
        Dashboard TI Diarias
      </DashboardTitle>

      <Tabs defaultValue="formulario">
        <StyledTabsList>
          <TabsTrigger value="formulario">
            <TabLabel>
              <Icons.edit color="yellow" />
              Formulario Tareas
            </TabLabel>
          </TabsTrigger>

          <TabsTrigger value="historial">
            <TabLabel>
              <Icons.archive color="blue" />
              Historial
            </TabLabel>
          </TabsTrigger>

          <TabsTrigger value="estadisticas">
            <TabLabel>
              <Icons.chart color="purple" />
              Estadísticas
            </TabLabel>
          </TabsTrigger>

          {/* <TabsTrigger value="exportar">
            <TabLabel>
              <Icons.upload color="green" />
              Exportar
            </TabLabel>
          </TabsTrigger> */}
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
        {/* <TabsContent value="exportar">
          <ExportView />
        </TabsContent> */}
      </Tabs>

      <FooterCard />
    </Container>
  )
}
