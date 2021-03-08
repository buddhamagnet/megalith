bmiTell :: (Ord a, Fractional a) => a -> [Char]

-- simple guard
bmiTell bmi
  | bmi < 18.5 = "underweight"
  | bmi < 25.0 = "normal"
  | bmi <= 30.0 = "fat"
  | otherwise = "huge"

-- simple guard with pattern match
bmiTell' (weight, height)
  | weight / height ^ 2 < 18.5 = "underweight"
  | weight / height ^ 2 < 25.0 = "normal"
  | weight / height ^ 2 <= 30.0 = "fat"
  | otherwise = "huge"

-- guard with where
bmiWhere height weight
  | bmi < 18.5 = "underweight"
  | bmi < 25.0 = "normal"
  | bmi <= 30.0 = "fat"
  | otherwise = "huge"
  where bmi = weight / height ^ 2

-- guard with function defined with where
calcBmis xs = [bmi w h | (w, h) <- xs]
  where bmi weight height = weight / height ^ 2

