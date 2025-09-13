import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin } from "lucide-react";

interface BranchCardProps {
  name: string;
  address: string;
  phone: string;
  mapsUrl: string;
}

export function BranchCard({ name, address, phone, mapsUrl }: BranchCardProps) {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-xl text-orange-700">{name}</CardTitle>
        <CardDescription className="text-gray-600 leading-relaxed">
          {address}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-green-600" />
          <a 
            href={`tel:${phone.replace(/[^\d+]/g, '')}`}
            className="text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            {phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-600" />
          <a 
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            View on Maps
          </a>
        </div>
      </CardContent>
    </Card>
  );
}