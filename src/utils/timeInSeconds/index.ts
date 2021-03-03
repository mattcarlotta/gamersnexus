/**
 * Helper function to strip out first and last name initials.
 *
 * @function
 * @param time - time in string HH:MM:SS | HH:MM format
 * @returns number in seconds
 */

const timeInSeconds = (time: string): number => {
  const timeString = time
    .split(":")
    .reduce((a, t) => (60 * parseInt(a, 10) + parseInt(t, 10)) as any);

  return parseInt(timeString, 10);
};

export default timeInSeconds;
