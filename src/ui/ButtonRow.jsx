import { styled } from '@/stitches.config'

export const ButtonRow = styled('div', {
  display: 'flex',
  justifyContent: 'center', // 👈 centra horizontalmente
  gap: '$md',               // 👈 espacio entre botones
  marginTop: '$lg',
  flexWrap: 'wrap',         // 👈 opcional para responsividad
})
