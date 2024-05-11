interface Person {
  id: number;
  // other properties can be added here
}

function logPersonId(person: Person): void {
  console.log(person.id);
}

// Example usage:
const Steve: Person = { id: 2 };
logPersonId(Steve);
