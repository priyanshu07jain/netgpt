export const checkValidateData = (email, password) => {
  
    // Regex for name validation (allows letters, spaces, hyphens, and apostrophes)
    // const isNameValid = /^[a-zA-Z]+([-'\\s][a-zA-Z]+)*$/.test(name);

    // Regex for email validation
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(email);
  
    // Regex for password validation (example: at least 8 characters, 1 uppercase, 1 lowercase, 1 number)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    
  
    // if (!isNameValid) return "Name is not valid";
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
    
  
    return null;
  };