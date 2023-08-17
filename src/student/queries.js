const getStudents = 'SELECT * FROM student';
const getStudentsById = 'SELECT * FROM student WHERE id = $1';
const checkEmailExist = 'SELECT * FROM student WHERE email = $1';
const addStudents = 'INSERT INTO student (name, email, age, dob) VALUES ($1, $2, $3, $4)';






module.exports = {
    getStudents,
    getStudentsById,
    checkEmailExist,
    addStudents,
};