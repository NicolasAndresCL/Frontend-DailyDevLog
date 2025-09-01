import { styled } from '@/stitches.config'

export const TabLabel = styled('span', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$sm',
  fontFamily: '$mono',
  fontSize: '18px',
  fontWeight: 'bold',
  color: '$yellow',
  backgroundColor: '$background',
  border: '1px solid $blue',
  borderRadius: '$sm',
  padding: '$xs $md',
  textAlign: 'center',
  width: 'fit-content',
  margin: '0 auto', // 👈 esto lo centra horizontalmente
})
