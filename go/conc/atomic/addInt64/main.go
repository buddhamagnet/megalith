package main

import (
	"fmt"
	"runtime"
	"sync"
	"sync/atomic"
)

var (
	counter int64
	wg      sync.WaitGroup
)

func main() {
	wg.Add(2)

	go incCounter(1)
	go incCounter(2)

	wg.Wait()

	fmt.Println("final counter: ", counter)
}

func incCounter(id int) {
	defer wg.Done()

	for count := 0; count < 2; count++ {
		// Force a race condition on the counter by assigning the
		// value of a counter, then forcing the scheduler to switch
		// to the other goroutine before incrementing the counter.
		atomic.AddInt64(&counter, 1)
		runtime.Gosched()
	}
}
