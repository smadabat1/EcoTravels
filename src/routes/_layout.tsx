import LandingPageLayout from '@/components/Landingpage/layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
  component: LandingPageLayout,
})
