export function getCurrentDateTime() {

    // Create a new Date object
    const currentDate = new Date();

    // Get the date components
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const day = currentDate.getDate();

    // Get the time components
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Format the date and time
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    // Return the formatted date and time
    return formattedDateTime;
}
