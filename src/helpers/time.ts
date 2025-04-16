export const formatTime = (timeInSeconds: number): string => {
  const seconds = timeInSeconds % 60;
  const minutes = Math.floor(timeInSeconds / 60) % 60;
  const hours = Math.floor(timeInSeconds / 3600);
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;

  if (days > 0) {
    return `${days}d ${remainingHours}h ${minutes}m`;
  } else {
    if (hours > 0) {
      return `${hours}h ${minutes}m ${Math.floor(seconds)}s`;
    } else {
      return `${minutes}m ${Math.floor(seconds)}s`;
    }
  }
};
export const getDaysBetweenDates = (endDate: Date): number => {
  if (!endDate) {
    return 0; // Return 0 if endDate is not provided
  }
  const start = new Date();
  const end = new Date(endDate);

  // Calculate the time difference in milliseconds
  const timeDifference = end.getTime() - start.getTime();

  // Convert milliseconds to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
};
export const formatDate = (date: Date | string): string | null => {
  if (!date) {
    return null; // Return empty string if date is not provided
  }
  const parsedDate = typeof date === "string" ? new Date(date) : date;
  const day = parsedDate.getDate().toString().padStart(2, "0");
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
  const year = parsedDate.getFullYear().toString().slice(-2);

  return `${day}.${month}.${year}`;
};

export const formatDateWithTime = (date: Date | string): string | null => {
  if (!date) {
    return null; // Return empty string if date is not provided
  }
  const parsedDate = typeof date === "string" ? new Date(date) : date;
  const day = parsedDate.getDate().toString().padStart(2, "0");
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
  const year = parsedDate.getFullYear().toString().slice(-2);
  const hours = parsedDate.getHours().toString().padStart(2, "0");
  const minutes = parsedDate.getMinutes().toString().padStart(2, "0");
  return `${day}.${month}.${year} ${hours}:${minutes}`;
};

export const getMonthFromFormatedDate = (date: string): string | null => {
  if (!date) {
    return null;
  }

  const parts = date.split(".");
  const month = parts[1];

  switch (month) {
    case "01":
      return "Jan";
    case "02":
      return "Feb";
    case "03":
      return "Mar";
    case "04":
      return "Apr";
    case "05":
      return "May";
    case "06":
      return "Jun";
    case "07":
      return "Jul";
    case "08":
      return "Aug";
    case "09":
      return "Sep";
    case "10":
      return "Oct";
    case "11":
      return "Nov";
    case "12":
      return "Dec";
    default:
      return "Invalid month";
  }
};
