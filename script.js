const result = document.getElementById("result");
const button = document.getElementById("calculateButton");
const input = document.getElementById("targetDate");

// Calculate how many days until the inputDate
function calculateDaysUntil(date) {
    const today = new Date();
    const target = new Date(date);
    
    // Set to dates to midnight for calculations
    today.setHours(0,0,0,0);
    target.setHours(0,0,0,0)
    
    const msPerDay = 1000 * 60 * 60 * 24;
    const diff = target - today;
    return Math.ceil(diff / msPerDay)
}

// Button click handler
button.addEventListener("click", () => {
    const dateValue = input.value

    if (!dateValue) {
        result.textContest = "Please select a date!"
        return;
    }

    const days = calculateDaysUntil(dateValue)

    if (days < 0) {
        result.textContent = "That date has already passed! " + "It was " + Math.abs(days) + " day(s) ago!"
    } else if (days === 0) {
        result.textContent = "That date is today!"
    } else {
        result.textContent = "There are " + days + " day(s) until " + dateValue;
    }
});
