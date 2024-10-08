export default function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  const arr = [];
  getListStudents.forEach((student) => {
    arr.push(student.id);
  });

  return arr;
}
