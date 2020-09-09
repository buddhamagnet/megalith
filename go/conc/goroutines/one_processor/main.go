package main

import (
	"fmt"
	"runtime"
	"sync"
)

func main() {
	// Constrain runtime to a single logical processor.
	runtime.GOMAXPROCS(1)

	var wg sync.WaitGroup
	wg.Add(2)

	fmt.Println("starting goroutines")

	// As we are constrained to a single logical processor and the
	// work given to each goroutine will complete fast, the first 
	// goroutine will execute and then the scheduler will swap out to
	// the second one. 

	go func() {
		defer wg.Done()
		for char := 'A'; char < 'A'+26; char++ {
			fmt.Printf("%c ", char)
		}
		fmt.Println()
	}()

	go func() {
		defer wg.Done()
		for char := 'a'; char < 'a'+26; char++ {
			fmt.Printf("%c ", char)
		}
		fmt.Println()

	}()

	wg.Wait()
}
