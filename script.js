// let's write javascript
document.addEventListener('DOMContentLoaded', () => {

    const ageForm = document.getElementById('age-form');
    const resultDiv = document.getElementById('result');
    // Add an event listener for form submission
    ageForm.addEventListener('submit', (event) => {
        // Prevent the default for submission behavior 
        event.preventDefault()

        // get the date of birth value from input
        const dobInput = document.getElementById('dob').value;

        // Check if a date was entered 
        if (dobInput) {
            // Calculate the age
            const age = calculateAge(new Date(dobInput));
            // Display the result
            resultDiv.textContent = `You are ${age} Year old`;
        } else {
            resultDiv.textContent = `Please enter your date of birth.`;
        }
    });

    function calculateAge(dob) {
        // Get The Current Date
        const currentDate = new Date()

        // calculate the age in years
        let age = currentDate.getFullYear() - dob.getFullYear();

        // Adjust the age if the birthday has not occurred yet in this year
        const monthDifference = currentDate.getMonth() - dob.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate())) {
            age--;
        }

        // Return The Calculated age
        return age;
    }
});