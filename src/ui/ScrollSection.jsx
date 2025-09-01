import { styled } from '@/stitches.config'

export const ScrollSection = styled('section', {
  maxHeight: '60vh',
  overflowY: 'auto',
  padding: '$lg',
  marginBottom: '$xl',
  backgroundColor: '$surface',
  border: '1px dashed $blue',
  borderRadius: '$md',
  boxSizing: 'border-box',

  // 🎨 Scroll estilo VSCode
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$blue',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '$background',
  },
})
