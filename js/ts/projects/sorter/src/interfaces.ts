export interface Sortable {
  swap(left: number): void;
  compare(j: number): boolean;
  length(): number;
  display(): void;
}
