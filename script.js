// Function to calculate the difference in days between two dates
var dateDiffInDays = function (date1, date2) {
    // Convert the input dates to Date objects
    const startDate = new Date(date1);
    const endDate = new Date(date2);
    
    // Get the time in milliseconds since January 1, 1970 (UTC epoch) for both dates
    const startUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const endUTC = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    
    // Calculate the difference in milliseconds between the two dates
    const diffInMillis = endUTC - startUTC;
    
    // Convert the difference from milliseconds to days
    const millisecondsInADay = 24 * 60 * 60 * 1000; // Hours * minutes * seconds * milliseconds
    const diffInDays = diffInMillis / millisecondsInADay;
    
    // Return the difference in days (can be negative if the second date is before the first)
    return diffInDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date (YYYY-MM-DD):");
const dateTwo = prompt("Enter End Date (YYYY-MM-DD):");
alert(`Difference in days: ${dateDiffInDays(dateOne, dateTwo)}`);
