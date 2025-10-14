import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

// START: Updated dateRange function
export function dateRange(startDate: Date, endDate?: Date | string): string {
  // Format the start date with a space
  const formattedStartDate = `${startDate.toLocaleString("default", { month: "short" })} ${startDate.getFullYear()}`;

  // If there's no end date, just return the start date
  if (!endDate) {
    return formattedStartDate;
  }

  let formattedEndDate;
  // If endDate is a string (like "Current"), use it as is
  if (typeof endDate === "string") {
    formattedEndDate = endDate;
  } else {
    // Otherwise, format the end date with a space
    formattedEndDate = `${endDate.toLocaleString("default", { month: "short" })} ${endDate.getFullYear()}`;
  }

  // Combine them into the final string
  return `${formattedStartDate} - ${formattedEndDate}`;
}
// END: Updated dateRange function