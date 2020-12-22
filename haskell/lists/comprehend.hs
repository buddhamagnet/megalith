--- Example: listComprehension [1,2,3,4] (\x -> x * 2)
listComprehension l fn = [fn x | x <- l]

--- Example: listComprehensionWithPredicate [1,2,3,4] (\x -> x) (\x -> x > 3)
listComprehensionWithPredicate l fn pred = [fn x | x <-l, pred x]

--- Example: listComprehensionWithPredicate [1,2,3,4] (\x -> x) (\x -> x > 3)
listComprehensionMultiple l1 l2 fn = [fn x y | x <- l1, y <-l2]

--- Example: filter suits from pack of cards: [x | x <- listComprehensionCards, snd x == "Spades"]
listComprehensionCards = [(x, y) | x <- ["Jack", "King", "Queen", "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"], y <- ["Spades", "Clubs", "Hearts", "Diamonds"]]

--- Example: redefine the length function.
listLength l = sum [1 | _ <- l]

--- Example: remove uppercase letters.
stripNonUpper s = [c | c <- s, c `elem` ['A'..'Z']]