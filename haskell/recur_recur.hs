replicate' :: (Ord t, Num t) => t -> a -> [a]
replicate' num val
  | num <= 0 = []
  | otherwise = val : replicate' (num-1) val

take' n _
 | n <= 0 = []
take' _ [] = []
take' n (x:xs) = x : take' (n-1) xs  
