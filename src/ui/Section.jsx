import { styled } from '@/stitches.config'

export const Section = styled('section', {
  backgroundColor: '$surface',
  border: '1px solid $blue',         // línea azul tipo VSCode
  borderRadius: '$md',
  padding: '$lg',
  marginBottom: '$xl',
  boxSizing: 'border-box',

  variants: {
    accent: {
      none: {},
      left: {
        borderLeft: '3px solid $highlight',
      },
      cyan: {
        borderColor: '$cyan',
      },
    },
    spacing: {
      tight: { padding: '$md' },
      relaxed: { padding: '$xl' },
    },
  },
})
