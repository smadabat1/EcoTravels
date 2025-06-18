import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/contact-us')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/contact-us"!</div>
}
