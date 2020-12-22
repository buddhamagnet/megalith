--- Example take 4 [0,10..]
makeRangeInfinite start step = [start,step..] 

makeRangeCycle l n = take n (cycle l)

makeRangeRepeat i n = take n (repeat i)

makeRangeReplicated i n = replicate n i