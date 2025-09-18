'use client';

import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { BranchCard } from "@/components/branch/branch-card";
import Image from "next/image";

const branches = [
  {
    name: "Manjalpur",
    address: "Shop No. 8, Amarjyot Shopping Center, Nr. Spandan Circle, Lalbaug Dairy Road, Manjalpur, Vadodara",
    mapsUrl: "https://maps.google.com/?q=Shop+No.+8,+Amarjyot+Shopping+Center,+Nr.+Spandan+Circle,+Lalbaug+Dairy+Road,+Manjalpur,+Vadodara"
  },
  {
    name: "Fatehgunj",
    address: "21, Eastern Society, Near Frigtemp Hot Dog, Fatehgunj Main Road, Vadodara",
    mapsUrl: "https://maps.google.com/?q=21,+Eastern+Society,+Near+Frigtemp+Hot+Dog,+Fatehgunj+Main+Road,+Vadodara"
  },
  {
    name: "Nizampura",
    address: "G-4, Vraj Complex, Opp. Gelani Petrol Pump, Nizampura Main Road, Vadodara",
    mapsUrl: "https://maps.google.com/?q=G-4,+Vraj+Complex,+Opp.+Gelani+Petrol+Pump,+Nizampura+Main+Road,+Vadodara"
  },
  {
    name: "Uma Char Rasta",
    address: "Shop No. 2, Indraprasth Complex, Near Uma Char Rasta, Waghodiya Road, Vadodara",
    mapsUrl: "https://maps.google.com/?q=Shop+No.+2,+Indraprasth+Complex,+Near+Uma+Char+Rasta,+Waghodiya+Road,+Vadodara"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-green-50 to-pink-50">
      {/* Logo Section - Full Width */}
      <div className="w-full p-8 rounded-lg shadow-md" style={{ backgroundImage: 'url("/logo_background.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="container mx-auto px-4 py-8 max-w-4xl flex flex-col items-center justify-center"> {/* Added container for content centering */}
          <div className="relative w-40 h-40 md:w-52 md:h-52 mb-8">
            <div className="w-full h-full bg-gradient-to-br from-orange-200 to-pink-200 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <Image
                src="/RR_LOGO.jpg"
                alt="Rajrajeshwari Logo"
                width={200}
                height={200}
                className="object-cover w-full h-full" // Changed to object-cover
              />
            </div>
          </div>
          
          {/* View Menu Button */}
          <Link href="/menu">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white font-semibold rounded-full shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              View Menu
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Branches Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Locations</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {branches.map((branch, index) => (
              <BranchCard
                key={index}
                name={branch.name}
                address={branch.address}
                mapsUrl={branch.mapsUrl}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-background dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Digital Menu crafted with precision by{' '}
                <a 
                  href="https://www.lazlle.studio/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 transition-colors"
                >
                  Lazlle & Co
                </a>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Professional QR Code Menu Solutions for Restaurants
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>9601834906</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Find us on Google Maps</span>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <p className="text-xs text-gray-400 dark:text-gray-500">
                © 2025 Shree RajRajeshwari. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}