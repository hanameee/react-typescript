interface Person {
    name: string;
    age?: number; // ? means value is not mandatory
}

interface Developer extends Person {
    // Since Developer extends Person, we don't have to declare name & age again
    skills: string[];
}

const someone: Person = {
    name: "아무개"
};

const hannah: Developer = {
    name: "해나",
    skills: ["javascript", "typescript"]
};

const peopleArr: Person[] = [someone, hannah];
