export function validateForm(data) {

    const errors = [];

    // Validate first name
    if (!data.fname || data.fname.trim() === "") {
        errors.push("First name is required");
    }
    // Validate last name
    if (!data.lname || data.lname.trim() === "") {
        errors.push("Last name is requirerd");
    }
    // Validate email
    if (!data.email || data.email.trim() === "" || 
        data.email.indexOf("@") === -1 || data.email.indexOf(".") === -1) {
        errors.push("Email is requirerd and must be valid");
    }
    // Validate method (pickup or delivery)
    if (!data.method) {
        errors.push("Select pickup or delivery");
    } else {
        const validOptions = ["pickup", "delivery"];
        if (!validOptions.includes(data.method)) {
            errors.push("Go away, method evildoer!")
        }
    }
    // Validate size
    console.log(data.size);
    if (data.size === "none") {
        errors.push("Please select a size");
    } else {
        const validOptions = ["small", "med", "large"];
        if (!validOptions.includes(data.size)) {
            errors.push("Go away, size evildoer!");
        }
    }

    return {
        isValid: errors.length === 0,
        errors
    }
}