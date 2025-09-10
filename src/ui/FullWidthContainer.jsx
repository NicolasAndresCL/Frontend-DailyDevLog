import { styled } from '@/stitches.config'

export const FullWidthContainer = styled('div', {
  width: '95vw',
  minHeight: '100vh',
  padding: '$lg',
  margin: '0 auto',
  backgroundColor: '$background',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$md',

  '@bp2': { padding: '$sm' }, 
})