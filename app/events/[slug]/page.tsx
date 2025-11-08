import EventDetail from "@/Components/EventDetail";
import { Suspense } from "react";

const EventDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  // params is already a Promise<{ slug: string }>
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventDetail params={params} />
    </Suspense>
  )
}

export default EventDetailsPage