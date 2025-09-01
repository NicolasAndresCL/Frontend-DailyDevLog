import { styled } from '@/stitches.config'

export const Input = ({ label, ...props }) => (
  <Wrapper>
    {label && <Label>{label}</Label>}
    <StyledInput {...props} />
  </Wrapper>
)

const Wrapper = styled('div', {
  marginBottom: '$md',
})

const Label = styled('label', {
  color: '$textSecondary',
  fontFamily: '$body',
  fontSize: '$sm',
  fontWeight: 'bold',
  accent: 'left',
  spacing: 'relaxed',
  marginBottom: '$xs',
  display: 'block',
  borderRadius: '$sm',
  padding: '$xs',
})

const StyledInput = styled('input', {
  width: '100%',
  padding: '$sm',
  borderRadius: '$sm',
  backgroundColor: '$surface',
  border: '1px dashed $pink',
  cursor: 'pointer',
  '&:hover': { borderColor: '$hoverBlue' },
  '&:focus-within': { borderColor: '$yellow' },
  color: '#0d9488', // equivalente a tu QLineEdit color
  fontFamily: '$mono',
  fontSize: '$base',
})
