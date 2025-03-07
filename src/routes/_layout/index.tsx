import LandingPageIndex from '@/components/Landingpage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/')({
  component: LandingPageIndex,
})
