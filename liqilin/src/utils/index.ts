import dayjs from 'dayjs';

/**
 *
 * @param num 需要格式化的数字 将数字格式化为k / w
 */
export function formatNumber(num: number) {
  return num >= 1e3 && num < 1e4
    ? (num / 1e3).toFixed(1) + 'k'
    : num >= 1e4
    ? (num / 1e4).toFixed(1) + 'w'
    : num;
}

/**
 *
 * @param time 时间戳
 * @param formate 需要的时间格式 YYYY-MM-DD 或 MM-DD ...
 */
export function formateDate(time: string | number, formate = 'YYYY-MM-DD') {
  if (!time) {
    return '';
  }
  if (time.toString().length === 10) {
    return dayjs(Number(time) * 1000).format(formate);
  }
  return dayjs(time).format(formate);
}
