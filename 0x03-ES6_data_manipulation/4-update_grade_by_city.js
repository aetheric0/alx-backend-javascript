export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents.filter((student) => student.location === city).map((student) => {
    const gradeEntry = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeEntry ? gradeEntry.grade : 'N/A',
    };
  });
}
