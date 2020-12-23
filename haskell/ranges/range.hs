-- Example syntax: [10..100]
makeRange :: Enum a => a -> a -> [a]
makeRange start end = [start..end]

--- Example syntax: [10,10..20]
makeRangeWithStep :: Enum a => a -> a -> a -> [a]
makeRangeWithStep start step end = [start,step..end]

