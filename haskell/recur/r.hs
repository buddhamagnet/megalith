replicate' x n
  | n <= 0 = []
  | otherwise = x : replicate' x (n-1)