-- let is an expression 
letMe :: Integer
letMe = 4 * (let a = 9 in a + 1) + 2

-- let can be used to define a function locally
letFn xs = [let square x = x * x in [square x | x <- xs]]

-- let bindings can be separated by semicolons
letMany = (let a = 100; b = 200; c = 300 in a * b * c, let foo = "Hello " in foo ++ "Dave!")

-- let bindings can be combined with pattern matching
letSum = (let (a,b,c) = (1,2,3) in a+b+c)

-- guard with function defined with where
calcBmis xs = [bmi w h | (w, h) <- xs]
  where bmi weight height = weight / height ^ 2

-- function defined with let
calcBmis' xs = [bmi | (w, h) <- xs, let bmi weight height = weight / height ^ 2]

-- function defined with let with predicate
calcB xs = [bmi | (w, h) <- xs, let bmi = w / h ^ 2, bmi > 25.0]
