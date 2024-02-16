import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_modal/team')({
  component: () => <div>Hello /_modal/c!</div>
})