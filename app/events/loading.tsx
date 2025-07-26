import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function EventsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
      {/* Navigation Skeleton */}
      <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="w-8 h-8 rounded-lg bg-white/20" />
              <div>
                <Skeleton className="h-5 w-24 bg-white/20" />
                <Skeleton className="h-3 w-32 mt-1 bg-white/20" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-9 w-16 bg-white/20" />
              <Skeleton className="h-9 w-20 bg-white/20" />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <Skeleton className="h-12 w-96 mx-auto mb-4 bg-white/20" />
          <Skeleton className="h-6 w-[600px] mx-auto bg-white/20" />
        </div>

        {/* Search and Filter Skeleton */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <Skeleton className="h-10 w-full max-w-md bg-white/20" />
            <div className="flex items-center space-x-4">
              <Skeleton className="h-10 w-32 bg-white/20" />
              <Skeleton className="h-10 w-24 bg-white/20" />
            </div>
          </div>
        </div>

        {/* Tabs Skeleton */}
        <div className="mb-8">
          <div className="grid w-full grid-cols-2 bg-white/10 border-white/20 rounded-lg p-1">
            <Skeleton className="h-10 bg-white/20" />
            <Skeleton className="h-10 bg-white/20" />
          </div>
        </div>

        {/* Events Grid Skeleton */}
        <div className="grid lg:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="backdrop-blur-md bg-white/10 border-white/20">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Skeleton className="h-6 w-16 bg-white/20" />
                      <Skeleton className="h-6 w-20 bg-white/20" />
                    </div>
                    <Skeleton className="h-6 w-64 mb-2 bg-white/20" />
                    <Skeleton className="h-4 w-full bg-white/20" />
                    <Skeleton className="h-4 w-3/4 mt-1 bg-white/20" />
                  </div>
                  <div className="text-right">
                    <Skeleton className="h-6 w-12 bg-white/20" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Event Details Skeleton */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-48 bg-white/20" />
                  <Skeleton className="h-4 w-32 bg-white/20" />
                  <Skeleton className="h-4 w-40 bg-white/20" />
                  <Skeleton className="h-4 w-36 bg-white/20" />
                </div>

                {/* Organizer Skeleton */}
                <div className="flex items-center space-x-3 p-3 bg-black/20 rounded-lg">
                  <Skeleton className="w-8 h-8 rounded-full bg-white/20" />
                  <div>
                    <Skeleton className="h-4 w-24 mb-1 bg-white/20" />
                    <Skeleton className="h-3 w-20 bg-white/20" />
                  </div>
                </div>

                {/* Tags Skeleton */}
                <div className="flex flex-wrap gap-1">
                  <Skeleton className="h-6 w-16 bg-white/20" />
                  <Skeleton className="h-6 w-20 bg-white/20" />
                  <Skeleton className="h-6 w-14 bg-white/20" />
                </div>

                {/* Progress Bar Skeleton */}
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <Skeleton className="h-3 w-32 bg-white/20" />
                    <Skeleton className="h-3 w-8 bg-white/20" />
                  </div>
                  <Skeleton className="h-2 w-full bg-white/20" />
                </div>

                {/* Action Buttons Skeleton */}
                <div className="flex space-x-2 pt-2">
                  <Skeleton className="h-8 flex-1 bg-white/20" />
                  <Skeleton className="h-8 w-10 bg-white/20" />
                  <Skeleton className="h-8 w-10 bg-white/20" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
