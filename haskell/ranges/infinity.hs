--- Example take 4 [0,10..]
makeRangeInfinite :: Enum a => a -> a -> [a]
makeRangeInfinite start step = [start,step..] 

makeRangeCycle :: [a] -> Int -> [a]
makeRangeCycle l n = take n (cycle l)

makeRangeRepeat :: a -> Int -> [a]
makeRangeRepeat i n = take n (repeat i)

makeRangeReplicated :: a -> Int -> [a]
makeRangeReplicated i n = replicate n i