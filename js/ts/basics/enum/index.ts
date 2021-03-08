enum languages {
  'typescript' = 'type safety ftw',
  'javascript' = 'weak as',
  'elixir' = 'functional as f@@k',
  'clojure' = 'too many parens',
  'haskell' = 'too many maths',
  'elm' = 'up front and functional',
}

const motto = (language: languages): void => console.log(language);

motto(languages.typescript);
