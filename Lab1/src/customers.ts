import { CreateCustomerIDFunction, WorkerNamesArray } from './types';
import { ValidationHelper } from './validation';
import { getAllWorkers, getWorkerByID } from './workers';

/**
 * Створює ID клієнта з імені та номера
 * @param {string} name - Ім'я клієнта
 * @param {number} id - Номер клієнта
 * @returns {string} Рядок з конкатенацією значень
 */
export function createCustomerID(name: string, id: number): string {
  // Валідація вхідних параметрів
  if (!ValidationHelper.isValidString(name)) {
    throw new Error('Ім\'я клієнта має бути непорожнім рядком');
  }
  
  if (!ValidationHelper.isValidId(id)) {
    throw new Error('ID клієнта має бути позитивним цілим числом');
  }

  return `${name}_${id}`;
}

/**
 * Створює інформацію про клієнта
 * @param {string} name - Обов'язковий параметр: ім'я клієнта
 * @param {number} age - Необов'язковий параметр: вік клієнта
 * @param {string} city - Необов'язковий параметр: місто клієнта
 * @returns {void}
 */
export function createCustomer(name: string, age?: number, city?: string): void {
  // Валідація обов'язкового параметра
  if (!ValidationHelper.isValidString(name)) {
    throw new Error('Ім\'я є обов\'язковим параметром і має бути непорожнім рядком');
  }

  // Виведення імені з використанням template string
  console.log(`Створено клієнта: ${name}`);

  // Виведення віку, якщо заданий
  if (age !== undefined) {
    if (!ValidationHelper.isValidPositiveNumber(age) || age > 150 || age < 0) {
      console.log('Попередження: некоректний вік');
    } else {
      console.log(`Вік клієнта: ${age} років`);
    }
  }

  // Виведення міста, якщо задане
  if (city !== undefined) {
    if (ValidationHelper.isValidString(city)) {
      console.log(`Місто клієнта: ${city}`);
    } else {
      console.log('Попередження: некоректне місто');
    }
  }
}

/**
 * Перевіряє доступність робітників та повертає масив імен доступних робітників
 * @param {string} customer - Ім'я замовника
 * @param {...number[]} workerIDs - Змінна кількість ідентифікаторів робітників
 * @returns {WorkerNamesArray} Масив імен доступних робітників
 */
export function checkoutWorkers(customer: string, ...workerIDs: number[]): WorkerNamesArray {
  // Валідація імені замовника
  if (!ValidationHelper.isValidString(customer)) {
    throw new Error('Ім\'я замовника має бути непорожнім рядком');
  }

  // Валідація масиву ID
  if (!ValidationHelper.isValidNumberArray(workerIDs)) {
    throw new Error('ID робітників повинні бути позитивними цілими числами');
  }

  console.log(`Клієнт: ${customer}`);

  const availableWorkers: WorkerNamesArray = [];

  // Перевіряємо кожного робітника за ID
  workerIDs.forEach((id: number) => {
    const worker = getWorkerByID(id);
    
    if (worker && worker.available) {
      availableWorkers.push(`${worker.name} ${worker.surname}`);
    }
  });

  return availableWorkers;
}

// Змінна myID строкового типу з викликом функції з конкретними значеннями
export const myID: string = createCustomerID('Валентин', 7);

// Змінна idGenerator з типом функції
export const idGenerator: CreateCustomerIDFunction = (name: string, id: number): string => {
  // Валідація параметрів стрілочної функції
  if (!ValidationHelper.isValidString(name)) {
    throw new Error('Ім\'я має бути непорожнім рядком');
  }
  
  if (!ValidationHelper.isValidId(id)) {
    throw new Error('ID має бути позитивним цілим числом');
  }

  return `${name}_${id}`;
};

/**
 * Демонстрація використання стрілочних функцій з forEach
 * Виводить name та surname робітників з категорії Developer
 */
export function demonstrateArrowFunctions(): void {
  const workers = getAllWorkers();
  
  console.log('Розробники (використовуючи forEach з стрілочною функцією):');
  
  workers
    .filter(worker => worker.category === 'Developer')
    .forEach((worker) => {
      console.log(`${worker.name} ${worker.surname}`);
    });
}