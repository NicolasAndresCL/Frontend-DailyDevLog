import { styled } from '@/stitches.config'

export const HistoryContainer = styled('div', {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '$lg',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '$md',

  '@bp2': { padding: '$sm' },
})
