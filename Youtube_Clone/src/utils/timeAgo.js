export function timeAgo(uploadDate) {
    const uploadTime = new Date(uploadDate);
    const now = new Date();
    const diffInSeconds = Math.floor((now - uploadTime) / 1000);

    if (diffInSeconds < 60) {
        return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
        return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    } else if (diffInSeconds < 86400) {
        return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    } else if (diffInSeconds < 2592000) { // 30 days
        return `${Math.floor(diffInSeconds / 86400)} days ago`;
    } else if (diffInSeconds < 31536000) { // 12 months
        return `${Math.floor(diffInSeconds / 2592000)} months ago`;
    } else {
        return `${Math.floor(diffInSeconds / 31536000)} years ago`;
    }
}
