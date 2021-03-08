enum languages {
  'typescript' = 'typescript',
  'clojure' = 'clojure',
}

interface Engineer {
  readonly id: number;
  name: string;
  language: languages;
}

interface JuniorEngineer extends Engineer {
  nickname?: string;
}

interface Engineerable {
  (e: Engineer): void;
}

const displayEngineer = (e: Engineer): void => {
  console.log(`My name is ${e.name} and I code in ${e.language}`);
};

const languageEngineer = (e: Engineer): void => {
  switch (e.language) {
    case languages.clojure:
      console.log('brave and true!');
      break;
    case languages.typescript:
      console.log('all the types!');
      break;
  }
};

const engineerPipeline = (fn: Engineerable, ...e: Engineer[]) => {
  e.forEach((e) => fn(e));
};

const e1: Engineer = {
  id: 1,
  name: 'dave',
  language: languages.typescript,
};

const e2: Engineer = {
  id: 2,
  name: 'rick',
  language: languages.clojure,
};

const junior1: JuniorEngineer = {
  id: 3,
  name: 'sam',
  language: languages.typescript,
  nickname: 'sammy',
};

const junior2: JuniorEngineer = {
  id: 3,
  name: 'raf',
  language: languages.typescript,
};

engineerPipeline(displayEngineer, e1, e2, junior1, junior2);
