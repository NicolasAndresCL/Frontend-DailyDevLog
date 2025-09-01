import { useState } from 'react'
import { Input } from '@/ui/Input'
import { TextArea } from '@/ui/TextArea'
import { Button } from '@/ui/Button'
import { Card } from '@/ui/Card'
import { styled } from '@/stitches.config'
import { SubTitle } from '@/ui/SubTitle'
import { Section } from '@/ui/Section'
import { SectionTitle } from '@/ui/SectionTitle'

const API_URL = 'http://localhost:8000/api/dailylog/'

// 🧱 Contenedor de pantalla completa
const FullWidthContainer = styled('div', {
  width: '95vw',
  minHeight: '100vh',
  padding: '$lg',
  backgroundColor: '$background',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
})

// // 📦 Sección visual modular
// const Section = styled('div', {
//   border: '1px solid $blue',
//   borderRadius: '$md',
//   padding: '$md',
//   marginBottom: '$lg',
//   backgroundColor: '$surface',
// })

// 🏷️ Título de sección
// const SectionTitle = styled('h3', {
//   color: '$chartPurple',
//   fontSize: '$lg',
//   marginBottom: '$md',
//   fontFamily: '$mono',
// })

const ButtonWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'right',
  marginTop: '$md',
})

export function TaskForm({ onSuccess }) {
  const [form, setForm] = useState({
    nombre_tarea: '',
    horas: 0,
    descripcion: '',
    tecnologias_utilizadas: '',
    link_ia_principal: '',
    link_ia_secundaria: '',
    link_ia_terciaria: '',
    link_respositorio: '',
    commit_principal: '',
    imagen_1: '',
    imagen_2: '',
    imagen_3: '',
  })

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!form.nombre_tarea || !form.descripcion || form.horas <= 0) {
      alert('Los campos "Nombre de tarea", "Horas" y "Descripción" son obligatorios.')
      return
    }

    const data = new FormData()
    Object.entries(form).forEach(([key, value]) => {
      if (value) data.append(key, value)
    })

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        body: data,
      })
      if (res.status === 201) {
        alert('Tarea registrada correctamente.')
        setForm({
          nombre_tarea: '',
          horas: 0,
          descripcion: '',
          tecnologias_utilizadas: '',
          link_ia_principal: '',
          link_ia_secundaria: '',
          link_ia_terciaria: '',
          link_respositorio: '',
          commit_principal: '',
          imagen_1: '',
          imagen_2: '',
          imagen_3: '',
        })
        onSuccess?.()
      } else {
        const err = await res.text()
        alert(`Error al registrar: ${err}`)
      }
    } catch (err) {
      alert(`Error de red: ${err}`)
    }
  }

  return (
    <FullWidthContainer>
      <Card
        css={{
          padding: '$lg',
          backgroundColor: '$background',
          width: '100%',
          maxWidth: '1050px',
          boxSizing: 'border-box',
        }}
      >
        <SubTitle>📝 Registrar Tarea Diaria</SubTitle>

        {/* 🧩 Datos de la tarea */}
        <Section accent="left" spacing="relaxed">
          <SectionTitle>Datos de la tarea</SectionTitle>
          <Input label="Nombre de tarea" value={form.nombre_tarea} onChange={handleChange('nombre_tarea')} />
          <Input label="Horas trabajadas" type="number" min={0} max={24} step={0.25} value={form.horas} onChange={handleChange('horas')} />
          <TextArea label="Descripción" value={form.descripcion} onChange={handleChange('descripcion')} />
          <Input label="Tecnologías utilizadas" value={form.tecnologias_utilizadas} onChange={handleChange('tecnologias_utilizadas')} />
        </Section>

        {/* 🔗 Links y Repositorio */}
        <Section accent="left" spacing="relaxed">
          <SectionTitle>Links y Repositorio</SectionTitle>
          <Input label="Link IA principal" value={form.link_ia_principal} onChange={handleChange('link_ia_principal')} />
          <Input label="Link IA secundaria" value={form.link_ia_secundaria} onChange={handleChange('link_ia_secundaria')} />
          <Input label="Link IA terciaria" value={form.link_ia_terciaria} onChange={handleChange('link_ia_terciaria')} />
          <Input label="Link repositorio" value={form.link_respositorio} onChange={handleChange('link_respositorio')} />
          <Input label="Commit principal" value={form.commit_principal} onChange={handleChange('commit_principal')} />
        </Section>

        {/* 🖼️ Imágenes */}
        <Section accent="left" spacing="relaxed">
          <SectionTitle>Capturas de pantalla</SectionTitle>
          <Input label="Imagen 1" type="file" onChange={(e) => setForm({ ...form, imagen_1: e.target.files[0] })} />
          <Input label="Imagen 2" type="file" onChange={(e) => setForm({ ...form, imagen_2: e.target.files[0] })} />
          <Input label="Imagen 3" type="file" onChange={(e) => setForm({ ...form, imagen_3: e.target.files[0] })} />
        </Section>

        
        <ButtonWrapper>
          <Button variant="primary" onClick={handleSubmit}>
            Guardar Tarea
          </Button>
        </ButtonWrapper>  
      </Card>
    </FullWidthContainer>
  )
}
