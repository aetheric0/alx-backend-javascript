interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

class Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;

  constructor(firstName: string, lastName: string, age: number, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
} 

const student1 = new Student('Ebuka', 'Darlington', 25, 'Oxford');
const student2 = new Student('Leon', 'Braveheart', 26, 'Lagos');

const studentsList: Student[] = [student1, student2];

function renderStudentTable(students: Student[]): void {
  const table = document.createElement('table');
  const headerRow = table.insertRow();
  headerRow.innerHTML = `<th>First Name</th><th>Location</th>`

  students.forEach(student => {
    const row = table.insertRow();
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`
  });

  document.body.appendChild(table);
}

renderStudentTable(studentsList);
