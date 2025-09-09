"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"
import { getBusinessHours, type BusinessHours } from "@/lib/business-hours"

interface BusinessHoursDisplayProps {
  className?: string;
  showIcon?: boolean;
  textSize?: string;
}

export function BusinessHoursDisplay({ 
  className = "", 
  showIcon = true, 
  textSize = "text-sm sm:text-base xl:text-lg" 
}: BusinessHoursDisplayProps) {
  const [businessHours, setBusinessHours] = useState<BusinessHours | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateBusinessHours = () => {
      setBusinessHours(getBusinessHours());
    };

    // Update immediately
    updateBusinessHours();

    // Update every minute to keep status current
    const interval = setInterval(updateBusinessHours, 60000);

    return () => clearInterval(interval);
  }, []);

  // Don't render anything on server to avoid hydration mismatch
  if (!mounted || !businessHours) {
    return (
      <div className={className}>
        <p className={`font-semibold ${textSize} text-[#11224d] flex items-center gap-2`}>
          {showIcon && <Clock className="h-4 w-4" />}
          Business Hours
        </p>
        <p className={`text-[#193a6f] ${textSize}`}>
          Monday to Friday: 9:00 AM - 5:00 PM (CT)
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <p className={`font-semibold ${textSize} text-[#11224d] flex items-center gap-2`}>
        {showIcon && <Clock className="h-4 w-4" />}
        Business Hours
      </p>
      <p className={`text-[#193a6f] ${textSize}`}>
        {businessHours.hoursText}
      </p>
      <p className={`${textSize} font-medium mt-1 ${
        businessHours.isOpen ? 'text-green-600' : 'text-red-600'
      }`}>
        {businessHours.status}
      </p>
    </div>
  );
}
