/**
 * Format a duration in seconds to hours and minutes like "1:30"
 * @param duration
 * @returns string
 */
export function formatDuration(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}:${minutes.toString().padStart(2, '0')}`;
}
