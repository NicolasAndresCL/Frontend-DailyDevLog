import { styled } from '@/stitches.config'
import { LuAlignHorizontalJustifyCenter } from 'react-icons/lu'

export const Button = styled('button', {
  borderRadius: '$sm',
  padding: '$sm $md',
  fontFamily: '$body',
  fontSize: '$base',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  border: '1px solid $blue',         // 💠 línea azul tipo VSCode

  variants: {
    variant: {
      primary: {
        backgroundColor: '#701a75',
        color: '#007ACC',
        '&:hover': {
          backgroundColor: '#2899F5',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$textSecondary',
        border: '1px solid $border',
        '&:hover': {
          backgroundColor: '$surface',
        },
      },
    },
  },
})
