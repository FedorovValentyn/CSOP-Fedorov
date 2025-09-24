import { Category, Worker, WorkersCollection, SurnamesArray } from './types';
import { ValidationHelper } from './validation';

/**
 * Повертає колекцію робітників
 * @returns {WorkersCollection} Колекція робітників з повною типізацією
 */
export function getAllWorkers(): WorkersCollection {
  const workers: Worker[] = [
    {
      id: 1,
      name: 'Олександр',
      surname: 'Коваленко',
      available: true,
      category: Category.Developer,
      salary: 45000
    },
    {
      id: 2,
      name: 'Марія',
      surname: 'Петренко',
      available: false,
      category: Category.Designer,
      salary: 38000
    },
    {
      id: 3,
      name: 'Дмитро',
      surname: 'Іваненко',
      available: true,
      category: Category.QA,
      salary: 35000
    },
    {
      id: 4,
      name: 'Анна',
      surname: 'Сидоренко',
      available: true,
      category: Category.BusinessAnalyst,
      salary: 42000
    },
    {
      id: 5,
      name: 'Іван',
      surname: 'Мельник',
      available: false,
      category: Category.ScrumMaster,
      salary: 50000
    },
    {
      id: 6,
      name: 'Тетяна',
      surname: 'Бондаренко',
      available: true,
      category: Category.Developer,
      salary: 47000
    },
    {
      id: 7,
      name: 'Валентин',
      surname: 'Федоров',
      available: true,
      category: Category.Developer,
      salary: 48000
    }
  ];

  // Валідація кожного робітника
  workers.forEach((worker, index) => {
    if (!ValidationHelper.isValidWorker(worker)) {
      throw new Error(`Invalid worker data at index ${index}`);
    }
  });

  return workers as WorkersCollection;
}

/**
 * Виводить інформацію про першого доступного робітника та загальну кількість
 * @param {WorkersCollection} workers - Колекція робітників (за замовчуванням getAllWorkers())
 * @returns {void}
 */
export function logFirstAvailable(workers: WorkersCollection = getAllWorkers()): void {
  // Валідація вхідних даних
  if (!Array.isArray(workers) || workers.length === 0) {
    console.log('Немає робітників для обробки');
    return;
  }

  // a. Кількість робітників
  console.log(`Загальна кількість робітників: ${workers.length}`);

  // Знаходимо першого доступного робітника
  const firstAvailable = workers.find(worker => worker.available);

  if (firstAvailable) {
    // b. Ім'я та прізвище першого доступного робітника з використанням бектіків
    console.log(`Перший доступний робітник: ${firstAvailable.name} ${firstAvailable.surname}`);
  } else {
    console.log('Немає доступних робітників');
  }

  // c. for-of для обходу колекції
  console.log('\\nВсі робітники:');
  for (const worker of workers) {
    // d. Бектіки для виведення строкових значень
    console.log(`ID: ${worker.id}, Ім'я: ${worker.name} ${worker.surname}, Доступний: ${worker.available ? 'Так' : 'Ні'}, Категорія: ${worker.category}`);
  }
}

/**
 * Повертає масив прізвищ робітників за категорією
 * @param {Category} category - Категорія робітників (за замовчуванням Category.Designer)
 * @returns {SurnamesArray} Масив прізвищ
 */
export function getWorkersSurnamesByCategory(category: Category = Category.Designer): SurnamesArray {
  // Валідація категорії
  if (!ValidationHelper.isValidCategory(category)) {
    throw new Error(`Invalid category: ${category}`);
  }

  const workers = getAllWorkers();
  
  return workers
    .filter(worker => worker.category === category)
    .map(worker => worker.surname);
}

/**
 * Виводить масив рядків в консоль
 * @param {string[]} names - Масив імен для виведення
 * @returns {void}
 */
export function logWorkersNames(names: string[]): void {
  // Валідація вхідних даних
  if (!Array.isArray(names)) {
    console.log('Помилка: вхідні дані повинні бути масивом');
    return;
  }

  if (names.length === 0) {
    console.log('Масив імен порожній');
    return;
  }

  console.log('Імена робітників:');
  names.forEach((name, index) => {
    if (ValidationHelper.isValidString(name)) {
      console.log(`${index + 1}. ${name}`);
    } else {
      console.log(`${index + 1}. [Некоректне ім'я]`);
    }
  });
}

/**
 * Знаходить робітника за ID і повертає його дані
 * @param {number} id - ID робітника
 * @returns {Worker | undefined} Дані робітника або undefined
 */
export function getWorkerByID(id: number): Worker | undefined {
  // Валідація ID
  if (!ValidationHelper.isValidId(id)) {
    console.log(`Некоректний ID: ${id}`);
    return undefined;
  }

  const workers = getAllWorkers();
  return workers.find(worker => worker.id === id);
}