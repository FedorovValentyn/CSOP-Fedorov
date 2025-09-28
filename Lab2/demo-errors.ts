// Демонстрація помилок згідно з завданням 2.1.2
// Цей файл показує, що станеться, якщо видалити id з робітників

interface Worker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
}

// Функція getAllWorkers з типом повертаємого значення
function getAllWorkers(): Worker[] {
    return [
        // Видаляємо id - це викличе помилку TypeScript
        { name: 'John', surname: 'Doe', available: true, salary: 50000 },
        { name: 'Jane', surname: 'Smith', available: false, salary: 60000 },
        { name: 'Bob', surname: 'Johnson', available: true, salary: 55000 }
    ];
}

// Цей код викличе помилку компіляції TypeScript:
// Property 'id' is missing in type '{ name: string; surname: string; available: boolean; salary: number; }' 
// but required in type 'Worker'.

// Щоб виправити помилку, потрібно додати id:
function getAllWorkersFixed(): Worker[] {
    return [
        { id: 1, name: 'John', surname: 'Doe', available: true, salary: 50000 },
        { id: 2, name: 'Jane', surname: 'Smith', available: false, salary: 60000 },
        { id: 3, name: 'Bob', surname: 'Johnson', available: true, salary: 55000 }
    ];
}
