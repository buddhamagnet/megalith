head' :: [a] -> a
head' [] = error "EMPTY"
head' (x:_) = x

tail' :: [a] -> [a]
tail' [] = error "EMPTY"
tail' [x] = [x]
tail' (_:x) = x