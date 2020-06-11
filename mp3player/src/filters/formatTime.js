export default function (num) {
  const time = Math.floor(Number(num));
  const currency = `0${(time/60)<1 ? 0 : Math.floor(time/60)}:${time%60< 10 ? `0${time%60}` : time%60}`;
  return currency;
}