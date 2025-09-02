// src/ui/Strong.jsx
import { styled } from '@/stitches.config'

export const Strong = styled('strong', {
  margin: 0,
  lineHeight: 1.6,
  color: '$textPrimary',
  fontFamily: '$sans',
  fontWeight: 700,
  transition: 'color 120ms ease',

  variants: {
    color: {
      primary: { color: '$textPrimary' },
      secondary: { color: '$textSecondary' },
      muted: { color: '$muted' },    // define $muted en stitches.config si no existe
      blue: { color: '$blue' },
      yellow: { color: '$yellow' },
      green: { color: '$green' },
      purple: { color: '$purple' },
      orange: { color: '$orange' },
      red: { color: '$red' },
      cyan: { color: '$cyan' },
    },
    intent: {
      info: { color: '$cyan' },
      success: { color: '$green' },
      warning: { color: '$yellow' },
      danger: { color: '$red' },
    },
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
    },
    mono: {
      true: { fontFamily: '$mono' },
    },
    italic: {
      true: { fontStyle: 'italic' },
    },
    underline: {
      true: { textDecoration: 'underline' },
    },
    uppercase: {
      true: { textTransform: 'uppercase', letterSpacing: '0.8px' },
    },
    truncate: {
      true: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
        display: 'inline-block',
        verticalAlign: 'bottom',
      },
    },
  },

  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
})
