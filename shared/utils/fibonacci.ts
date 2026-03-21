export function fibonacciShared(n: number): number {
  if (n <= 1) {
    return n
  }
  return fibonacciShared(n - 1) + fibonacciShared(n - 2)
}
