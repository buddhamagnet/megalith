
-- The else part of an if clause is mandatory in Haskell as
-- functions always need to return something. No void side-effect
-- ridden BS here.
doubleSmall x = if x > 100 then x else x * 2

doubleSmall' x = (if x > 100 then x else x * 2) + 1

