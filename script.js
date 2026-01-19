let btn = document.getElementById("generatorBtn");
let marksInput = document.getElementById("marks");
let marksValue = document.getElementById("marksValue");

// Marks value show
marksInput.addEventListener("input", function () {
    marksValue.innerText = marksInput.value;
});  // <-- MISSING BRACKET FIXED

// Generate Button Click
btn.addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    // gender
    let gender = document.querySelector('input[name="gender"]:checked');
    gender = gender ? gender.value : "--";

    // course
    let selectedcourses = document.querySelectorAll('input[type="checkbox"]:checked'); // FIXED
    let course = [];
    selectedcourses.forEach((c) => course.push(c.value));

    // marks
    let marks = marksInput.value;

    // show card
    document.getElementById("cardName").innerText = name || "Student Name";
    
    document.getElementById("cardRoll").innerText = roll
        ? "Roll No: " + roll
        : "Roll No: --";

    document.getElementById("cardEmail").innerText = email
        ? "Email: " + email
        : "Email: --";

    document.getElementById("cardAge").innerText = age
        ? "Age: " + age      // FIXED
        : "Age: --";

    document.getElementById("cardGender").innerText = "Gender: " + gender;

    document.getElementById("cardCourse").innerText =
        course.length ? "Course: " + course.join(", ") : "Course: --";

    document.getElementById("cardMarks").innerText = "Marks: " + marks + "/100";
});

// Image Upload
const photoInput = document.getElementById("photo");
const cardImage = document.getElementById("cardImage");

photoInput.addEventListener("change", function () {
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            cardImage.src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    }
});