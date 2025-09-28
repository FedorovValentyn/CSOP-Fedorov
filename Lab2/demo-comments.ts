// Демонстрація коментарів згідно з завданням 2.4.2 та 2.7.1

interface Person {
    name: string;
    email: string;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string): void;
}

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

// Закоментований код згідно з завданням 2.4.2
// const favoriteLibrarian: Librarian = {
//     name: 'Alice',
//     email: 'alice@university.edu',
//     department: 'Science',
//     assistCustomer: function(custName: string): void {
//         console.log(`${this.name} is assisting ${custName}`);
//     }
// };

// Використання класу замість літерала об'єкта
const favoriteLibrarian: Librarian = new UniversityLibrarian('Alice', 'alice@university.edu', 'Science');

// Закоментований код згідно з завданням 2.7.1
// const ref = new ReferenceItem('TypeScript Guide', 2023);
// ref.publisher = 'Tech Publications';
// console.log(ref.publisher);
// ref.printItem();

// Абстрактний клас не можна інстанціювати напряму
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

// Реалізація абстрактного класу
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
