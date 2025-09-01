import { useEffect, useState } from 'react'
import { styled } from '@/stitches.config'
import { readMarkdownFiles } from '@/utils/fileUtils'
import { FullWidthContainer } from '@/ui/FullWidthContainer'
import { Section } from '@/ui/Section'
import { ButtonRow } from '@/ui/ButtonRow'
import { Button } from '@/ui/Button'
import { Card } from '@/ui/Card'
import { SectionTitle } from '@/ui/SectionTitle'
import { TabLabel } from '@/ui/TabLabel'
import { TextArea } from '@/ui/TextArea'

const FileList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  backgroundColor: '$surface',
  border: '1px solid $blue',
  borderRadius: '$sm',
  maxHeight: '300px',
  overflowY: 'auto',
  fontFamily: '$mono',
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$blue',
    borderRadius: '4px',
  },
})

const FileItem = styled('li', {
  padding: '$sm',
  borderBottom: '1px solid $border',
  color: '$textSecondary',
  cursor: 'pointer',
  transition: 'background 0.2s ease',
  '&:hover': {
    backgroundColor: '$background',
    color: '$textPrimary',
  },
})

export function ExportView() {
  const [files, setFiles] = useState([])
  const [preview, setPreview] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  useEffect(() => {
    readMarkdownFiles().then(setFiles)
  }, [])

  const handleSelect = async (filename) => {
    setSelectedFile(filename)
    const content = await readMarkdownFiles(filename)
    setPreview(content)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(preview)
    alert('Contenido copiado al portapapeles.')
  }

  const handleOpen = () => {
    if (selectedFile) {
      const url = URL.createObjectURL(new Blob([preview], { type: 'text/markdown' }))
      window.open(url, '_blank')
    }
  }

  return (
    <FullWidthContainer>
      <Card>
        <Section accent="left">
          <SectionTitle>📁 Exportaciones Markdown</SectionTitle>
          <FileList>
            {files.map((file) => (
              <FileItem key={file} onClick={() => handleSelect(file)}>
                {file}
              </FileItem>
            ))}
          </FileList>
        </Section>

        <Section accent="cyan">
          <TabLabel>📄 Vista previa</TabLabel>
          <TextArea
            readOnly
            value={preview || 'Selecciona un archivo para ver su contenido.'}
            css={{ maxHeight: '400px', overflowY: 'auto' }}
          />
        </Section>

        <ButtonRow>
          <Button variant="primary" onClick={handleOpen}>Abrir archivo</Button>
          <Button variant="primary" onClick={handleCopy}>Copiar contenido</Button>
        </ButtonRow>
      </Card>
    </FullWidthContainer>
  )
}
