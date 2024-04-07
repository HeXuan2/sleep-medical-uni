export const formatTimestamp = function(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月份是从0开始的，所以要加1
    const day = date.getDate();
    return year + '年' + month + '月' + day + '日';
}


export const formatTimestamp_ = function(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份是从0开始的，所以要加1
    const day = String(date.getDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
}


export const formatTime = function(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
}
