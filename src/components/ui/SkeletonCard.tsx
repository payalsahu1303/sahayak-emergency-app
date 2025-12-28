import { Card, CardContent } from "@/components/ui/card";

export function SkeletonCard() {
  return (
    <Card className="animate-pulse">
      <CardContent className="space-y-2 p-4">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
      </CardContent>
    </Card>
  );
}
