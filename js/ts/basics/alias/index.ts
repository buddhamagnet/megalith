type Engineer = {
  name: string;
  project: string;
  nickname: string;
  role: 'engineer';
};

type Senior = {
  years: number;
};

// Can have fields from either type.
type SeniorBlagger = Engineer | Senior;

// Must have all fields from both types.
type SeniorEngineer = Engineer & Senior;

const kp: Engineer = {
  name: 'Kevin',
  project: 'CURA',
  nickname: 'kp',
  role: 'engineer',
};

const dg: Engineer = {
  name: 'Dave',
  project: 'CURA',
  nickname: 'cabbage',
  role: 'engineer',
};

// Has fields from Senior so compiles.
const blag: SeniorBlagger = {
  years: 12,
};

// Has all fields from Engineer so compiles.
const blag2: SeniorBlagger = {
  name: 'blag2',
  role: 'engineer',
  project: 'ECON',
  nickname: 'blagger2',
};

// Has all fields from Engineer and Senior so compiles.
const blag3: SeniorBlagger = {
  name: 'blag2',
  role: 'engineer',
  project: 'ECON',
  nickname: 'blagger2',
  years: 12,
};

// Has all fields from Engineer and Senior (must have all) so compiles.
const god: SeniorEngineer = {
  name: 'God',
  project: 'ECON',
  nickname: 'god',
  role: 'engineer',
  years: 12,
};
