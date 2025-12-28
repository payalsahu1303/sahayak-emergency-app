import { Card, CardContent } from "@/components/ui/card";

interface Props {
  name: string;
  distance?: string;
  address?: string;
}

export const EmergencyCard = ({ name, distance, address }: Props) => {
  return (
    <Card className="hover:shadow-lg transition">
      <CardContent className="p-4 space-y-2">
        <h3 className="font-semibold text-lg">{name}</h3>
        {address && (
          <p className="text-sm text-muted-foreground">{address}</p>
        )}
        {distance && (
          <p className="text-sm font-medium text-red-600">
            📍 {distance} away
          </p>
        )}
      </CardContent>
    </Card>
  );
};
