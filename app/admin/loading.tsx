import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function AdminLoading() {
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
              <Skeleton className="h-9 w-20 bg-white/20" />
              <Skeleton className="w-8 h-8 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Skeleton */}
        <div className="mb-8">
          <Skeleton className="h-10 w-64 mb-2 bg-white/20" />
          <Skeleton className="h-6 w-96 bg-white/20" />
        </div>

        {/* Tabs Skeleton */}
        <div className="mb-8">
          <div className="grid w-full grid-cols-4 bg-white/10 border-white/20 rounded-lg p-1">
            <Skeleton className="h-10 bg-white/20" />
            <Skeleton className="h-10 bg-white/20" />
            <Skeleton className="h-10 bg-white/20" />
            <Skeleton className="h-10 bg-white/20" />
          </div>
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="backdrop-blur-md bg-white/10 border-white/20">
              <CardHeader className="pb-2">
                <Skeleton className="h-4 w-24 bg-white/20" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16 mb-1 bg-white/20" />
                <Skeleton className="h-3 w-20 bg-white/20" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity Card Skeleton */}
        <Card className="backdrop-blur-md bg-white/10 border-white/20">
          <CardHeader>
            <Skeleton className="h-6 w-32 mb-2 bg-white/20" />
            <Skeleton className="h-4 w-64 bg-white/20" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-3 p-3 bg-black/20 rounded-lg">
                  <Skeleton className="w-4 h-4 bg-white/20" />
                  <div className="flex-1">
                    <Skeleton className="h-4 w-64 mb-1 bg-white/20" />
                    <Skeleton className="h-3 w-32 bg-white/20" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
