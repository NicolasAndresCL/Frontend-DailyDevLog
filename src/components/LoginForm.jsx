// LoginForm.jsx
import { useState } from 'react'
import { Input } from '@/ui/Input'
import { Button } from '@/ui/Button'
import { Card } from '@/ui/Card'
import { styled } from '@/stitches.config'
import { SubTitle } from '@/ui/SubTitle'
import { Icons } from '@/ui/icons'

const API_URL = 'http://localhost:8000/api/token/'

const Container = styled('div', {
  width: '100vw',              // ocupar todo el ancho de la ventana
  height: '100vh',             // ocupar todo el alto de la ventana
  display: 'flex',
  alignItems: 'center',        // centrar verticalmente
  justifyContent: 'center',    // centrar horizontalmente
  backgroundColor: '$background',
  padding: '$lg',              // un poco de aire en pantallas pequeñas
  boxSizing: 'border-box',
})


const FormWrapper = styled(Card, {
  padding: '$lg',
  width: '100%',
  maxWidth: '480px',
  boxSizing: 'border-box',
  backgroundColor: '$surface',
})

export function LoginForm({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState(null)

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
  }

  const handleSubmit = async () => {
    setError(null)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (data.access) {
        localStorage.setItem('accessToken', data.access)
        localStorage.setItem('refreshToken', data.refresh)
        onLogin?.(data.access)
      } else {
        setError('Credenciales inválidas o usuario no autorizado.')
      }
    } catch (err) {
      setError('Error de conexión con el servidor: ' + err.message)
    }
  }

  return (
    <Container>
      <FormWrapper>
        <SubTitle css={{ display: 'flex', alignItems: 'center', gap: '$sm' }}>
          <Icons.bolt color="yellow" />
          Iniciar sesión
        </SubTitle>

        <Input label="Usuario o Email" value={form.username} onChange={handleChange('username')} />
        <Input label="Contraseña" type="password" value={form.password} onChange={handleChange('password')} />

        {error && <p style={{ color: '#f87171', marginTop: '8px' }}>{error}</p>}

        <Button variant="primary" css={{ marginTop: '$md' }} onClick={handleSubmit}>
          Acceder
        </Button>
      </FormWrapper>
    </Container>
  )
}
