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
export const getDaysBetweenDates = (endDate: string): number => {
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
