package main

import (
	"fmt"
	"sync"
)

var wg sync.WaitGroup

func main() {
	
	wg.Add(2)

	fmt.Println("starting goroutines")

	// As we are using every available core, we will
	// see the results interleaved as the scheduler
	// allocates goroutines to multiple logical processors.

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
