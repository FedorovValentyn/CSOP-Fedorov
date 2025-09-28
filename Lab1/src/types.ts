/**
 * Enum для категорій робітників
 */
export enum Category {
  BusinessAnalyst = 'Business analyst',
  Developer = 'Developer',
  Designer = 'Designer',
  QA = 'QA',
  ScrumMaster = 'Scrum master'
}

/**
 * Інтерфейс для робітника з строгою типізацією
 */
export interface Worker {
  readonly id: number;
  readonly name: string;
  readonly surname: string;
  readonly available: boolean;
  readonly category: Category;
  readonly salary: number;
}

/**
 * Тип для функції створення ID клієнта
 */
export type CreateCustomerIDFunction = (name: string, id: number) => string;

/**
 * Тип для колекції робітників
 */
export type WorkersCollection = ReadonlyArray<Worker>;

/**
 * Тип для масиву прізвищ
 */
export type SurnamesArray = Array<string>;

/**
 * Тип для масиву імен робітників
 */
export type WorkerNamesArray = Array<string>;