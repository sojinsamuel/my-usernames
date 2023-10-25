export function timeAgo(timestamp: any) {
  const currentTimestamp: any = new Date();
  const pastTimestamp: any = new Date(String(timestamp));

  const timeDifference = currentTimestamp - pastTimestamp;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30.44);
  const years = Math.floor(days / 365.25);

  if (years > 0) {
    return years + (years === 1 ? " year ago" : " years ago");
  } else if (months > 0) {
    return months + (months === 1 ? " month ago" : " months ago");
  } else if (weeks > 0) {
    return weeks + (weeks === 1 ? " week ago" : " weeks ago");
  } else if (days > 0) {
    return days + (days === 1 ? " day ago" : " days ago");
  } else if (hours > 0) {
    return hours + (hours === 1 ? " hour ago" : " hours ago");
  } else if (minutes > 0) {
    return minutes + (minutes === 1 ? " minute ago" : " minutes ago");
  } else if (seconds > 0) {
    return seconds + (seconds === 1 ? " second ago" : " seconds ago");
  } else {
    return "now";
  }
}
