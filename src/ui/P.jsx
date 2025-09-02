import { styled } from '@/stitches.config'

export const P = styled('p', {
  margin: 0,
  lineHeight: 1.6,
  color: '$textPrimary',
  fontFamily: '$sans',
  transition: 'color 120ms ease',

  variants: {
    // Colores conectados a tu paleta (ajusta a tus tokens existentes)
    color: {
      primary: { color: '$textPrimary' },
      secondary: { color: '$textSecondary' },
      muted: { color: '$muted' },            // define $muted en stitches.config si no existe
      blue: { color: '$blue' },
      yellow: { color: '$yellow' },
      green: { color: '$green' },
      purple: { color: '$purple' },
      orange: { color: '$orange' },
      red: { color: '$red' },
      cyan: { color: '$cyan' },
    },

    // Intención semántica rápida
    intent: {
      info: { color: '$cyan' },
      success: { color: '$green' },
      warning: { color: '$yellow' },
      danger: { color: '$red' },
    },

    // Jerarquía tipográfica
    variant: {
      body: { fontSize: '$md', fontWeight: 400 },
      label: { fontSize: '$sm', fontWeight: 600, letterSpacing: '0.2px', fontFamily: '$mono' },
      caption: { fontSize: '$xs', opacity: 0.85 },
      overline: { fontSize: '$xs', textTransform: 'uppercase', letterSpacing: '0.8px', opacity: 0.9 },
    },

    // Tamaño directo si prefieres granularidad
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
    },

    // Estilo
    weight: {
      regular: { fontWeight: 400 },
      medium: { fontWeight: 500 },
      bold: { fontWeight: 700 },
    },
    mono: {
      true: { fontFamily: '$mono' },
    },
    italic: {
      true: { fontStyle: 'italic' },
    },
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
    truncate: {
      true: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
  },

  compoundVariants: [
    {
      variant: 'label',
      truncate: true,
      css: { maxWidth: '100%' },
    },
  ],

  defaultVariants: {
    color: 'primary',
    variant: 'body',
    size: 'md',
    weight: 'regular',
  },
})
