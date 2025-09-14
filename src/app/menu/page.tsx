'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { MenuCategory } from "@/components/menu/menu-category";
import { menuData } from "@/lib/menu-data";

const menuCategories = [
  { name: "FRESH JUICE", itemCount: 74, color: "from-blue-400 to-blue-500" },
  { name: "MILK SHAKE", itemCount: 57, color: "from-cyan-400 to-cyan-500" },
  { name: "MILK SHAKE WITH ICE CREAM", itemCount: 57, color: "from-lime-400 to-lime-500" },
  { name: "THICK SHAKE", itemCount: 32, color: "from-fuchsia-400 to-fuchsia-500" },
  { name: "ICE CREAM", itemCount: 21, color: "from-red-400 to-red-500" },
  { name: "SMOOTHIE", itemCount: 18, color: "from-violet-400 to-violet-500" },
  { name: "LASSI", itemCount: 14, color: "from-indigo-400 to-indigo-500" },
  { name: "MOCKTAIL", itemCount: 12, color: "from-rose-400 to-rose-500" },
  { name: "FALOODA", itemCount: 8, color: "from-pink-400 to-pink-500" },
  { name: "FRESH FRUIT SHORT'S", itemCount: 8, color: "from-orange-400 to-orange-500" },
  { name: "SPECIAL VARIETY BLOSSOM", itemCount: 8, color: "from-amber-400 to-amber-500" },
  { name: "BEVERAGES", itemCount: 7, color: "from-green-400 to-green-500" },
  { name: "FALOODA WITH ICE CREAM", itemCount: 7, color: "from-purple-400 to-purple-500" },
  { name: "HEALTHY VEGETABLE JUICE", itemCount: 7, color: "from-yellow-400 to-yellow-500" },
  { name: "SPECIAL SUNDAY ICE CREAM", itemCount: 7, color: "from-emerald-400 to-emerald-500" },
  { name: "FRUIT DISH", itemCount: 3, color: "from-teal-400 to-teal-500" },
];

export default function MenuPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-green-50 to-pink-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Our Menu</h1>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {menuCategories.map((category, index) => (
            <MenuCategory
              key={index}
              name={category.name}
              itemCount={category.itemCount}
              color={category.color}
              isExpanded={expandedCategory === category.name}
              onToggle={() => toggleCategory(category.name)}
              items={menuData[category.name]}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-600">
          <p className="text-sm">© 2025 Shree Rajrajeshwari Juice & Ice Cream Parlour</p>
        </div>
      </div>
    </div>
  );
}