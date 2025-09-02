// src/ui/icons.jsx
import { styled } from '@/stitches.config'
import {
  ArchiveIcon,
  BarChartIcon,
  CalendarIcon,
  CheckCircledIcon,
  ClockIcon,
  CodeIcon,
  GitHubLogoIcon,
  Link1Icon,
  MagnifyingGlassIcon,
  Pencil2Icon,
  RocketIcon,
  TrashIcon,
  UploadIcon,
  LightningBoltIcon,
  LayersIcon,
} from '@radix-ui/react-icons'

// 🎨 Componente base con variantes visuales
const IconBase = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'color 120ms ease',

  variants: {
    color: {
      default: { color: '$textPrimary' },
      yellow: { color: '$yellow' },
      blue: { color: '$blue' },
      green: { color: '$green' },
      purple: { color: '$purple' },
      orange: { color: '$orange' },
      red: { color: '$red' },
      cyan: { color: '$cyan' },
    },
    size: {
      xs: { width: 14, height: 14 },
      sm: { width: 16, height: 16 },
      md: { width: 18, height: 18 },
      lg: { width: 22, height: 22 },
    },
  },

  defaultVariants: {
    color: 'default',
    size: 'md',
  },
})

// 🧩 Íconos técnicos con estilo aplicado
export const Icons = {
  archive: styled(ArchiveIcon, IconBase),
  chart: styled(BarChartIcon, IconBase),
  calendar: styled(CalendarIcon, IconBase),
  check: styled(CheckCircledIcon, IconBase),
  clock: styled(ClockIcon, IconBase),
  code: styled(CodeIcon, IconBase),
  github: styled(GitHubLogoIcon, IconBase),
  link: styled(Link1Icon, IconBase),
  search: styled(MagnifyingGlassIcon, IconBase),
  edit: styled(Pencil2Icon, IconBase),
  rocket: styled(RocketIcon, IconBase),
  trash: styled(TrashIcon, IconBase),
  upload: styled(UploadIcon, IconBase),
  bolt: styled(LightningBoltIcon, IconBase),
  layers: styled(LayersIcon, IconBase),
}
