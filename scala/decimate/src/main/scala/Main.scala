object Main extends App {

  // Recursion example 1 - string repeat.
  def repeatString(str: String, repeat: Int): String =
    if (repeat == 1) /* base case */ str else str + repeatString(str, repeat -1) 
  
  // Recursion example 2 - factorial.
  def factorial(num: BigInt): BigInt = 
    if (num == 1) /* base case */ 1
    else num * factorial(num - 1)

  // Recursion example 3 - fibonacci.
  def fib(num: Int): Int = 
    if (num <= 2) /* base case */ 1
    else fib(num -1 ) + fib(num - 2)

  // Recursion example4 with auxilliary function - primes.s
  def isPrime(num: Int): Boolean = {
    def isPrimeUntil(t: Int): Boolean = 
      if (t <=1) /* base case */ true
      else num % t != 0 && isPrimeUntil(t - 1)
    isPrimeUntil(num / 2)
  }
}
