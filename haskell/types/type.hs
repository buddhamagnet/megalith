-- works on instances of Eq
instanceEqual :: Eq a => a -> a -> Bool
instanceEqual x y = x == y

-- works on instances of Ord
instanceComp :: Ord a => a -> a -> Bool
instanceComp x y = x > y

-- works on instances of Ord and returns an Ordering
order :: Ord a => a -> a -> Ordering
order x y = x `compare` y

-- works on instances of Show
instanceShow :: Show a => a -> String
instanceShow x = show x

-- works on instances of Read
instanceRead x = read x
-- use type annotations if necessary
instanceReadFloat x = read x :: Float

-- works on instances of Enum
instanceEnum :: Enum a => a -> a -> [a]
instanceEnum start end = [start..end]

-- returns values of Bounded type classes
instanceBoundaryMaxInt :: Int
instanceBoundaryMinInt = minBound :: Int
instanceBoundaryMinInt :: Int
instanceBoundaryMaxInt = maxBound :: Int
instanceBoundaryAll = minBound :: (Int, Bool, Char)
