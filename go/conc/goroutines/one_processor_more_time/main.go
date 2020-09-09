package main

import (
	"fmt"
	"runtime"
	"sync"
)

var wg sync.WaitGroup

func main() {
	// Constrain runtime to a single logical processor.
	runtime.GOMAXPROCS(1)

	wg.Add(2)

	fmt.Println("starting goroutines")

	// As we are constrained to a single logical processor and the
	// work given to each goroutine is significant, the scheduler will
	// time slice each goroutine.

	go printPrime("A")
	go printPrime("B")

	wg.Wait()
}

func printPrime(identity string) {
	defer wg.Done()

	next:
	for outer := 2; outer < 5000; outer++ {
		for inner := 2; inner < outer; inner ++ {
			if outer % inner == 0 {
				continue next
			}
		}
		fmt.Printf("%s:%d\n", identity, outer)
	}
	fmt.Printf("%s COMPLETED\n", identity)
}
