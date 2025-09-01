import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa'
import { styled } from '@/stitches.config'
import { DashboardTitle } from '../ui/DashboardTitle'
import { SubTitle } from '@/ui/SubTitle'

// 🧱 Contenedor principal
const Footer = styled('footer', {
  width: '100%',
  backgroundColor: '$surface',
  borderTop: '1px solid $blue', // línea azul tipo VSCode
  padding: '$lg',
  marginTop: '$xl',
})

// 📦 Wrapper centrado
const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$md',
  textAlign: 'center',
})

// 🏷️ Título técnico
const Title = styled('h2', {
  fontSize: '$xl',
  fontWeight: 'bold',
  fontFamily: '$mono',
  color: '$textSecondary',
  letterSpacing: '-0.5px',
})

// 🔗 Íconos sociales
const IconRow = styled('div', {
  display: 'flex',
  gap: '$lg',
})

const IconLink = styled('a', {
  color: '$muted',
  fontSize: '1.75rem',
  transition: 'color 0.2s ease',
  '&:hover': {
    color: '$cyan', // acento técnico al hover
  },
})

// 📝 Copyright
const Copyright = styled('p', {
  fontSize: '$sm',
  fontFamily: '$mono',
  color: '$subtle',
})

export function FooterCard() {
  return (
    <Footer>
      <Wrapper>
        <SubTitle><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.25C2 4.11193 2.11193 4 2.25 4H12.75C12.8881 4 13 4.11193 13 4.25V11.5H2V4.25ZM2.25 3C1.55964 3 1 3.55964 1 4.25V12H0V12.5C0 12.7761 0.223858 13 0.5 13H14.5C14.7761 13 15 12.7761 15 12.5V12H14V4.25C14 3.55964 13.4404 3 12.75 3H2.25Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> Dashboard TI Diarias</SubTitle>

        <IconRow>
          <IconLink
            href="https://github.com/NicolasAndresCL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/nicolas-andres-cano-leal/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </IconLink>
          <IconLink
            href="https://dev.to/nicolasandrescl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dev.to"
          >
            <FaDev />
          </IconLink>
        </IconRow>

        <Copyright>
          © 2025 Nicolás Andrés Cano Leal™. All Rights Reserved.
        </Copyright>
      </Wrapper>
    </Footer>
  )
}
