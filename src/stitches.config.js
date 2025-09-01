import { createStitches } from '@stitches/react'

export const { styled, css, theme, createTheme } = createStitches({
  theme: {
    colors: {
      // 🎨 Fondo base y superficies
      background: '#1E1E1E',   // fondo principal
      surface: '#252526',      // paneles y campos
      border: '#3C3C3C',       // bordes técnicos
      overlay: '#1E1E1Ecc',    // fondo semitransparente

      // 🧠 Sintaxis y acentos
      blue: '#569CD6',         // estructuras, clases
      cyan: '#4EC9B0',         // funciones
      green: '#6A9955',        // variables
      red: '#F44747',          // errores
      orange: '#c48369ff',       // strings
      yellow: '#DCDCAA',       // keywords
      purple: '#C586C0',       // tipos, imports
      pink: '#D16D9E',         // acento suave
      hoverBlue: '#2899F5',    // hover activo

      // 📝 Texto y contraste
      textPrimary: '#D4D4D4',
      textSecondary: '#9CDCFE',
      muted: '#808080',
      subtle: '#7C7C7C',       // texto menos dominante
      highlight: '#007ACC',    // azul VSCode puro

      // 📊 Gráficos y métricas
      chartGreen: '#0D9488',
      chartBlue: '#007ACC',
      chartPurple: '#86198f',
    },

    fonts: {
      body: 'Segoe UI, sans-serif',
      mono: 'Fira Code, monospace',
    },

    fontSizes: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '24px',
    },

    radii: {
      sm: '4px',
      md: '6px',
      lg: '8px',
      pill: '9999px',
    },

    space: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '48px',
    },
  },

  utils: {
    px: (value) => ({ paddingLeft: value, paddingRight: value }),
    py: (value) => ({ paddingTop: value, paddingBottom: value }),
    mx: (value) => ({ marginLeft: value, marginRight: value }),
    my: (value) => ({ marginTop: value, marginBottom: value }),
  },
})
