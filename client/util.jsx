
export function customSort(a,b) {
  let year_a = +a[0].slice(-4);
  let q_a = +a[0].slice(1,2);
  let year_b = +b[0].slice(-4);
  let q_b = +b[0].slice(1,2);

  return year_a - year_b || q_a - q_b;
}
