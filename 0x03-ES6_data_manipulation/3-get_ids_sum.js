export default function getStudentIdsSum(getListStudents) {
  let sum = 0;
  for (const student of getListStudents) {
    sum += student.id;
  }

  return sum;
}
