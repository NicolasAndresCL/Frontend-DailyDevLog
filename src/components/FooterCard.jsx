import { styled } from '@/stitches.config'
import { SubTitle } from '@/ui/SubTitle'
import { Icons } from '@/ui/icons'
import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa'

// 🧱 Contenedor principal
const Footer = styled('footer', {
  width: '100%',
  backgroundColor: '$surface',
  borderTop: '1px solid $blue',
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

// 🔗 Íconos sociales
const IconRow = styled('div', {
  display: 'flex',
  gap: '$lg',
})

const IconLink = styled('a', {
  color: '$muted',
  fontSize: '1.75rem',
  transition: 'color 0.2s ease',
  display: 'inline-flex',
  alignItems: 'center',
  '&:hover': {
    color: '$cyan',
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
        <SubTitle css={{ display: 'flex', alignItems: 'center', gap: '$sm' }}>
          <Icons.code color="yellow" />
          Dashboard TI Diarias
        </SubTitle>

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
