let students = [
    { name:"สมศักดิ์", grade: 4.00 },
    { name:"สมศรี", grade: 3.56 },
    { name:"สมปอย", grade: 3.99 },
];

students.forEach((students,index) => {
    console.log(`student ${index + 1}: Name:${students.name} grade:${students.grade}`);
});

function showStudentCount(){
    console.log(`Total students: ${students.length}`);
}
showStudentCount()


