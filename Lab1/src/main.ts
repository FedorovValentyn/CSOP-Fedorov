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


function main(): void {
  console.log('='.repeat(60));
  console.log('ЛАБОРАТОРНА РОБОТА №1: TypeScript - Робота з робітниками');
  console.log('='.repeat(60));

  try {
    console.log('Отримання всіх робітників:');
    const allWorkers = getAllWorkers();
    console.log(`Загружено ${allWorkers.length} робітників`);

    console.log('Інформація про робітників:');
    console.log('Перші 3 робітники:');
    allWorkers.slice(0, 3).forEach(worker => {
      console.log(`- ${worker.name} ${worker.surname} (${worker.category})`);
    });


    console.log('Виклик logFirstAvailable():');
    logFirstAvailable();

    console.log('Прізвища робітників за категоріями:');

    console.log('1. Дизайнери (за замовчуванням):');
    const designerSurnames = getWorkersSurnamesByCategory();
    logWorkersNames(designerSurnames);
    
    // Developer
    console.log('2. Розробники:');
    const developerSurnames = getWorkersSurnamesByCategory(Category.Developer);
    logWorkersNames(developerSurnames);

    // 1.3 Завдання 2: Стрілочні функції з forEach
    console.log(' Демонстрація стрілочних функцій:');
    demonstrateArrowFunctions();

    // 1.4 Завдання 1-2: createCustomerID() та myID
    console.log('Робота з функціями створення ID:');
    console.log(`myID: ${myID}`);
    
    // 1.4 Завдання 3-4: idGenerator
    console.log('Використання idGenerator:');
    const generatedID1 = idGenerator('Тест', 123);
    console.log(`idGenerator result: ${generatedID1}`);
    
    // Присвоєння функції createCustomerID до idGenerator та виклик
    const anotherGenerator = createCustomerID;
    const generatedID2 = anotherGenerator('Клієнт', 456);
    console.log(`createCustomerID result: ${generatedID2}`);

    // 1.5 Завдання 1: createCustomer() з різною кількістю параметрів
    console.log('Створення клієнтів:');
    
    console.log('Один параметр:');
    createCustomer('Іван');
    
    console.log('Два параметри:');
    createCustomer('Марія', 28);
    
    console.log('Три параметри:');
    createCustomer('Олексій', 35, 'Київ');


    console.log('logFirstAvailable() без параметрів:');
    logFirstAvailable();


    console.log('Перевірка доступності робітників:');
    const myWorkers = checkoutWorkers('Валентин', 7, 1, 3, 4);
    
    console.log('Доступні робітники:');
    myWorkers.forEach((workerName, index) => {
      console.log(`${index + 1}. ${workerName}`);
    });


  } catch (error) {
    console.error('Помилка виконання:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}