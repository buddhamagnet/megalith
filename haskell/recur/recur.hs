maximum' :: (Ord a) => [a] -> a
maximum' [] = error "empty list"
maximum' [x] = x
maximum' (x:xs) = max x (maximum' xs)

-- Given a list [1,12,9,13,9]
-- Matches pattern and we have max 1 (maximum' [12,9,13,9])
-- Matches pattern and we have max 12 (maximum' [9,13,9])
-- Matches pattern and we have max 9 (maximum' [13,9])
-- Matches pattern and we have max 13 (maximum' [9])

replicate' :: Int -> a -> [a]
replicate' times x
  | times <= 0 = []
  | otherwise = x : replicate' (times-1) x

take' amount _
  | amount <= 0 = []
take' _ [] = []
take' amount (x:xs) = x : take' (amount-1) xs

reverse' [] = []
reverse' (x:xs) = reverse' xs ++ [x]

repeat' x = x:repeat' x

zip' :: [a] -> [b] -> [(a, b)]
zip' _ [] = []
zip' [] _ = []
zip' (x:xs) (y:ys) = (x,y):zip' xs ys 

elem' a [] = False
elem' a (x:xs)
  | a == x = True
  | otherwise = a `elem` xs

quicksort [] = []
quicksort (x:xs) =
    let smallerOrEqual = [a | a <- xs, a <= x ]
        larger = [a | a <- xs, a > x]
    in quicksort smallerOrEqual ++ [x] ++ quicksort larger