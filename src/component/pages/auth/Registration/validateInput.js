const validateInput = (key, value) => {
  let errors = {};
  switch (key) {
    case "firstName":
      {
        if (!/^[a-zA-Z ]+$/.test(value)) {
          errors.firstName = "first name should contains alphabet";
        }
      }
      break;
    case "lastName":
      {
        if (!/^[a-zA-Z ]+$/.test(value)) {
          errors.lastName = "last name should contains alphabet";
        }
      }
      break;
    case "email":
      {
        if (!/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/.test(value)) {
          errors.email = "email should valid";
        }
      }
      break;
    case "password1":
      {
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
          errors.password1 = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
        }
       
      }
      break;
  }
  return errors;
};

export default validateInput;
