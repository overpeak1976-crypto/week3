let students = [
    {name:"Gon", score: 80},
    {name:"Killua", score: 100},
    {name:"Kurapika", score: 45},
    {name:"BLeorio", score: 30},
    {name:"Chrollo", score: 50},
    {name:"Hisoka", score: 60},
];
function filterPassedStudents(pass) {

    students.forEach((student) => {
        if (Number(student.score) >= pass) {
            console.log(`Studen: ${student.name} passed with Scroe: ${student.score}`);
        }
    });
}
filterPassedStudents(50);

