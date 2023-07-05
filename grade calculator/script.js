
//Selecting various tags from the document
const Input = document.querySelector(".input");
const form = document.querySelector(".form")
//Adding an event listener to the form
form.addEventListener("submit", () => {
    calculateGrade(parseInt(Input.value, 10));
});

//Function for calculating the grade based on the marks
const calculateGrade = (grade) => {
    if (!(grade < 0 || grade > 100)) {
        if (grade > 79) {
            alert("A");
        } else if (grade >= 60) {
            alert("B");
        } else if (grade >= 49) {
            alert("C");
        } else if (grade >= 40) {
            alert("D");
        } else if (grade < 40) {
            alert("E");
        }
    } else {
        alert("Invalid Grade. Enter a grade value between 0 and 100");
    }
};
