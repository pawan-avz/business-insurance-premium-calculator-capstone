export default function validateInfo(values) {

  let errors = {};
  if (!values.firstName.trim()) {
    errors.firstName = "first name is required";
  } else if (!/^[a-zA-Z ]+$/.test(values.firstName)) {
    errors.firstName = "first name should contains alphabet";
  }
  if (!values.lastName.trim()) {
    errors.lastName = "last name is required";
  } else if (!/^[a-zA-Z ]+$/.test(values.lastName)) {
    errors.lastName = "first name should contains alphabet";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password1) {
    errors.password1 = "Password is required";
  } else if (values.password1.length < 6) {
    errors.password1 = "Password needs to be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  if(!values.gender){
    errors.gender= "gender is required";
  }
  return errors;
}
