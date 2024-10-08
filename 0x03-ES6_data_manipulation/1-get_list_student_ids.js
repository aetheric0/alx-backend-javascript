export default function getListStudentIds(getListStudents) {
  const arr = [];
  getListStudents.forEach((student, index) => {
    arr.push(student.id);
  });

  return arr;
}
