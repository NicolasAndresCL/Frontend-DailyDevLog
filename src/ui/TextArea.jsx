import { styled } from '@/stitches.config'

export const TextArea = ({ label, ...props }) => (
  <Wrapper>
    {label && <Label>{label}</Label>}
    <StyledTextArea {...props} />
  </Wrapper>
)

const Wrapper = styled('div', {
  marginBottom: '$md',
})

const Label = styled('label', {
  color: '$textSecondary',
  fontWeight: 'bold',
  fontFamily: '$body',
  fontSize: '$sm',
  accent: 'left',
  spacing: 'relaxed',
  marginBottom: '$xs',
  display: 'block',
  borderRadius: '$sm',
  padding: '$xs',
})

const StyledTextArea = styled('textarea', {
  width: '100%',
  padding: '$sm',
  borderRadius: '$sm',
  backgroundColor: '$surface',
  border: '1px dashed $pink',
  cursor: 'pointer',
  '&:hover': { borderColor: '$hoverBlue' },
  '&:focus-within': { borderColor: '$yellow' },
  color: '#0d9488',
  fontFamily: '$mono',
  fontSize: '$base',
  resize: 'vertical',
})
