export interface BusinessHours {
  isOpen: boolean;
  status: string;
  hoursText: string;
  nextChange: string;
}

export function getBusinessHours(): BusinessHours {
  // Get current time in Houston, TX (Central Time)
  const now = new Date();
  const houstonTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Chicago" }));
  
  const currentDay = houstonTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const currentHour = houstonTime.getHours();
  const currentMinute = houstonTime.getMinutes();
  const currentTime = currentHour + currentMinute / 60; // Convert to decimal hours for easier comparison
  
  // Business hours: Monday (1) to Friday (5), 9 AM to 5 PM
  const isWeekday = currentDay >= 1 && currentDay <= 5;
  const isBusinessHours = currentTime >= 9 && currentTime < 17; // 9 AM to 5 PM
  
  const isOpen = isWeekday && isBusinessHours;
  
  // Format current time for display
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/Chicago'
  };
  
  const currentTimeStr = houstonTime.toLocaleString('en-US', timeOptions);
  
  let status: string;
  let nextChange: string;
  
  if (isOpen) {
    status = `Open Now (until 5:00 PM)`;
    nextChange = "Closes at 5:00 PM";
  } else if (isWeekday) {
    // Weekday but outside business hours
    if (currentTime < 9) {
      status = `Closed (opens at 9:00 AM)`;
      nextChange = "Opens at 9:00 AM";
    } else {
      status = `Closed (opens tomorrow at 9:00 AM)`;
      nextChange = "Opens tomorrow at 9:00 AM";
    }
  } else if (currentDay === 6) {
    // Saturday
    status = `Closed (opens Monday at 9:00 AM)`;
    nextChange = "Opens Monday at 9:00 AM";
  } else {
    // Sunday
    status = `Closed (opens tomorrow at 9:00 AM)`;
    nextChange = "Opens tomorrow at 9:00 AM";
  }
  
  return {
    isOpen,
    status,
    hoursText: `Monday to Friday: 9:00 AM - 5:00 PM (CT)`,
    nextChange
  };
}

export function getBusinessHoursDisplay(): string {
  const hours = getBusinessHours();
  return `${hours.hoursText}\nCurrent Status: ${hours.status}`;
}
