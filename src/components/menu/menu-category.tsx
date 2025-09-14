import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface MenuItem {
  name: string;
  price: string;
}

interface MenuCategoryProps {
  name: string;
  itemCount: number;
  color: string;
  items?: MenuItem[];
  isExpanded: boolean;
  onToggle: () => void;
}

export function MenuCategory({ 
  name, 
  itemCount, 
  color, 
  items = [], 
  isExpanded, 
  onToggle 
}: MenuCategoryProps) {
  return (
    <Card 
      className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-200 cursor-pointer border-orange-200"
      onClick={onToggle}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-gray-800">{name}</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">({itemCount})</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-600" />
            )}
          </div>
        </div>
      </CardHeader>
      
      {/* Expanded Menu Items */}
      {isExpanded && (
        <CardContent className="pt-0">
          <div className="space-y-2 max-h-64 overflow-y-auto pr-4">
            {items.length > 0 ? (
              items.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-700 text-sm">{item.name}</span>
                  <span className="font-semibold text-gray-800 text-sm">{item.price}</span>
                </div>
              ))
            ) : (
              Array.from({ length: Math.min(5, itemCount) }, (_, i) => ({
                name: `${name} Item ${i + 1}`,
                price: `₹${Math.floor(Math.random() * 100) + 50}`
              })).map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-700 text-sm">{item.name}</span>
                  <span className="font-semibold text-gray-800 text-sm">{item.price}</span>
                </div>
              ))
            )}
          </div>
        </CardContent>
      )}
      
      {/* Category Button */}
      <CardContent className="pt-0">
        <Button 
          variant="outline" 
          size="sm" 
          className={`w-full bg-gradient-to-r ${color} text-white border-0 hover:opacity-90`}
        >
          {name}
        </Button>
      </CardContent>
    </Card>
  );
}