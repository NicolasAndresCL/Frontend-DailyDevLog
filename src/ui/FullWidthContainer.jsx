import { styled } from '@/stitches.config'

export const FullWidthContainer = styled('div', {
  width: '95vw',
  minHeight: '100vh',
  padding: '$lg',
  backgroundColor: '$background',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
})