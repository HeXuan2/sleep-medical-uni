export const formatTimestamp = function(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月份是从0开始的，所以要加1
    const day = date.getDate();
    return year + '年' + month + '月' + day + '日';
}

export const formatTime = function(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
}
