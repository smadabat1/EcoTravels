import FlightIndex from '@/components/Flights'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/flights')({
  component: FlightIndex,
});