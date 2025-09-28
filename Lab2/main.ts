// 2.1. Визначення інтерфейсу Worker
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
        { id: 1, name: 'John', surname: 'Doe', available: true, salary: 50000, markPrize: logPrize },
        { id: 2, name: 'Jane', surname: 'Smith', available: false, salary: 60000, markPrize: logPrize },
        { id: 3, name: 'Bob', surname: 'Johnson', available: true, salary: 55000, markPrize: logPrize }
    ];
}

// Функція getWorkerByID з типом Worker | undefined
function getWorkerByID(id: number): Worker | undefined {
    const workers = getAllWorkers();
    return workers.find(worker => worker.id === id);
}

// Функція PrintWorker
function PrintWorker(worker: Worker): void {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
}

// 2.2. Визначення інтерфейсів для типів функцій
interface PrizeLogger {
    (prize: string): void;
}

// Розширення інтерфейсу Worker
interface Worker {
    markPrize: PrizeLogger;
}

// Змінна logPrize
const logPrize: PrizeLogger = (prize: string): void => {
    console.log(`Prize: ${prize}`);
};

// 2.3. Розширення інтерфейсів
interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string): void;
}

// Змінні favoriteAuthor та favoriteLibrarian
const favoriteAuthor: Author = {
    name: 'Isaac Asimov',
    email: 'isaac@example.com',
    numBooksPublished: 500
};

// 2.4. Інтерфейси для типів класів
class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    constructor(name: string, email: string, department: string) {
        this.name = name;
        this.email = email;
        this.department = department;
    }

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

// Змінна favoriteLibrarian з класом UniversityLibrarian
const favoriteLibrarian: Librarian = new UniversityLibrarian('Alice', 'alice@university.edu', 'Science');

// 2.5. Створення та використання класів
class ReferenceItem {
    public title: string;
    protected year: number;
    private _publisher: string = '';
    static department: string = 'Default Department';

    constructor(newTitle: string, newYear: number) {
        console.log('Creating a new ReferenceItem ...');
        this.title = newTitle;
        this.year = newYear;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
}

// Змінна ref
const ref = new ReferenceItem('TypeScript Guide', 2023);
ref.publisher = 'Tech Publications';
console.log(ref.publisher);
ref.printItem();

// 2.6. Розширення класів
class Encyclopedia extends ReferenceItem {
    public edition: number;

    constructor(newTitle: string, newYear: number, newEdition: number) {
        super(newTitle, newYear);
        this.edition = newEdition;
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

// Змінна refBook
const refBook = new Encyclopedia('Encyclopedia of Science', 2022, 3);
refBook.printItem();

// 2.7. Створення абстрактних класів
abstract class AbstractReferenceItem {
    public title: string;
    protected year: number;
    private _publisher: string = '';
    static department: string = 'Default Department';

    constructor(newTitle: string, newYear: number) {
        console.log('Creating a new ReferenceItem ...');
        this.title = newTitle;
        this.year = newYear;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${AbstractReferenceItem.department}`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    abstract printCitation(): void;
}

// Оновлений клас Encyclopedia для абстрактного батьківського класу
class EncyclopediaAbstract extends AbstractReferenceItem {
    public edition: number;

    constructor(newTitle: string, newYear: number, newEdition: number) {
        super(newTitle, newYear);
        this.edition = newEdition;
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

// Тестування всіх функцій та класів
console.log('\n=== Тестування функцій ===');
const workers = getAllWorkers();
console.log('All workers:', workers);

const worker = getWorkerByID(1);
if (worker) {
    PrintWorker(worker);
}

console.log('\n=== Тестування PrizeLogger ===');
logPrize('Best Employee Award');

console.log('\n=== Тестування Author ===');
console.log('Favorite Author:', favoriteAuthor);

console.log('\n=== Тестування Librarian ===');
favoriteLibrarian.assistCustomer('Student');

console.log('\n=== Тестування Encyclopedia ===');
refBook.printCitation();
