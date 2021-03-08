-- case expressions are syntactic sugar for pattern matching

-- version 1 - classic pattern matching
head' :: [p] -> p
head' [] = error "empty list"
head' (x:_) = x

-- version 2 - case expression
headCase :: [p] -> p
headCase xs = case xs of
    [] -> error "empty list"
    (x:_) -> x

-- case expressions can be used anywhere.
describeList xs = "The list is " ++ case xs of
    [] -> "empty"
    [x] -> "a singleton list"
    xs -> "a longer list"

-- we could have done this with where
describeList' xs = "The list is " ++ what xs
  where what [] = "empty"
        what [x] = "a singleton list"
        what xs = "a longer list"