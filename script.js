// Defining variables for my personal information
const firstName = "Pascal-Ricky";
const lastName = "Mikulu";
const yearsOfStudy = 2;
const goal = "I am currently attending SCC to complete a two-year degree in Software Development, and I plan to transfer to a university to pursue a Bachelor's degree in Software Engineering.";


const profile = `My name is ${firstName} ${lastName}. I joined in Spring 2024, but I didn't continue in Summer. ${goal}`;

// id profile
document.getElementById("profile").textContent = profile;