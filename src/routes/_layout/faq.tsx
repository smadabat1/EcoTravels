import FAQIndex from '@/components/FAQ'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/faq')({
  component: FAQIndex,
});
