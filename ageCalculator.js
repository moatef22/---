document.getElementById('calculateButton').addEventListener('click', calculateAge);

function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const currentDate = new Date();

    const age = currentDate.getFullYear() - dob.getFullYear();

    if (
        currentDate.getMonth() < dob.getMonth() ||
        (currentDate.getMonth() === dob.getMonth() &&
            currentDate.getDate() < dob.getDate())
    ) {
        age--;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your age is ${age} years.`;
}
