import { Category } from './types';
import { 
  getAllWorkers, 
  logFirstAvailable, 
  getWorkersSurnamesByCategory, 
  logWorkersNames 
} from './workers';
import { 
  createCustomerID, 
  createCustomer, 
  checkoutWorkers, 
  myID, 
  idGenerator,
  demonstrateArrowFunctions
} from './customers';

/**
 * Головна функція для демонстрації всієї функціональності
 */
function main(): void {
  console.log('='.repeat(60));
  console.log('ЛАБОРАТОРНА РОБОТА: TypeScript - Робота з робітниками');
  console.log('='.repeat(60));

  try {
    // 1.1 Завдання 1: Реалізуйте функцію getAllWorkers()
    console.log('\\n1. Отримання всіх робітників:');
    const allWorkers = getAllWorkers();
    console.log(`Загружено ${allWorkers.length} робітників`);

    // 1.1 Завдання 3: Запустіть функцію getAllWorkers()
    console.log('\\n2. Інформація про робітників:');
    console.log('Перші 3 робітники:');
    allWorkers.slice(0, 3).forEach(worker => {
      console.log(`- ${worker.name} ${worker.surname} (${worker.category})`);
    });

    // 1.1 Завдання 4-5: Реалізуйте і запустіть функцію logFirstAvailable()
    console.log('\\n3. Виклик logFirstAvailable():');
    logFirstAvailable();

    // 1.2 Завдання 3: getWorkersSurnamesByCategory()
    console.log('\\n4. Прізвища робітників за категоріями:');
    
    // За замовчуванням (Designer)
    console.log('\\n4.1. Дизайнери (за замовчуванням):');
    const designerSurnames = getWorkersSurnamesByCategory();
    logWorkersNames(designerSurnames);
    
    // Developer
    console.log('\\n4.2. Розробники:');
    const developerSurnames = getWorkersSurnamesByCategory(Category.Developer);
    logWorkersNames(developerSurnames);

    // 1.3 Завдання 2: Стрілочні функції з forEach
    console.log('\\n5. Демонстрація стрілочних функцій:');
    demonstrateArrowFunctions();

    // 1.4 Завдання 1-2: createCustomerID() та myID
    console.log('\\n6. Робота з функціями створення ID:');
    console.log(`myID: ${myID}`);
    
    // 1.4 Завдання 3-4: idGenerator
    console.log('\\n7. Використання idGenerator:');
    const generatedID1 = idGenerator('Тест', 123);
    console.log(`idGenerator result: ${generatedID1}`);
    
    // Присвоєння функції createCustomerID до idGenerator та виклик
    const anotherGenerator = createCustomerID;
    const generatedID2 = anotherGenerator('Клієнт', 456);
    console.log(`createCustomerID result: ${generatedID2}`);

    // 1.5 Завдання 1: createCustomer() з різною кількістю параметрів
    console.log('\\n8. Створення клієнтів:');
    
    console.log('\\n8.1. Один параметр:');
    createCustomer('Іван');
    
    console.log('\\n8.2. Два параметри:');
    createCustomer('Марія', 28);
    
    console.log('\\n8.3. Три параметри:');
    createCustomer('Олексій', 35, 'Київ');

    // 1.5 Завдання 3: logFirstAvailable без параметра (за замовчуванням)
    console.log('\\n9. logFirstAvailable() без параметрів:');
    logFirstAvailable();

    // 1.5 Завдання 4-5: checkoutWorkers()
    console.log('\\n10. Перевірка доступності робітників:');
    const myWorkers = checkoutWorkers('Валентин', 7, 1, 3, 4);
    
    console.log('\\n10.1. Доступні робітники:');
    myWorkers.forEach((workerName, index) => {
      console.log(`${index + 1}. ${workerName}`);
    });

    console.log('\\n='.repeat(60));
    console.log('ЛАБОРАТОРНУ РОБОТУ ВИКОНАНО УСПІШНО!');
    console.log('='.repeat(60));

  } catch (error) {
    console.error('Помилка виконання:', error);
    process.exit(1);
  }
}

// Запуск головної функції
if (require.main === module) {
  main();
}