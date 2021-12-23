export default function validateInfo(values) {
  let newerrors = {};
  let valid = true;
  if (!values.firstName.trim()) {
    valid = false;

    newerrors.firstName = "first name is required *";
  } else if (!/^[a-zA-Z ]+$/.test(values.firstName)) {
    valid = false;
    newerrors.firstName = "first name should contains alphabet *";
  }
  if (!values.lastName.trim()) {
    valid = false;
    newerrors.lastName = "last name is required *";
  } else if (!/^[a-zA-Z ]+$/.test(values.lastName)) {
    valid = false;
    newerrors.lastName = "first name should contains alphabet *";
  }

  if (!values.username) {
    valid = false;
    newerrors.username = "Email required *";
  } else if (!/\S+@\S+\.\S+/.test(values.username)) {
    valid = false;
    newerrors.username = "Email address is invalid *";
  }
  if (!values.password) {
    valid = false;
    newerrors.password = "Password is required *";
  } else if (values.password.length < 6) {
    valid = false;
    newerrors.password = "Password needs to be 6 characters or more *";
  }

  if (!values.password2) {
    valid = false;
    newerrors.password2 = "Password is required *";
  } else if (values.password2 !== values.password) {
    valid = false;
    newerrors.password2 = "Passwords do not match *";
  }
  if (!values.gender) {
    valid = false;
    newerrors.gender = "gender is required *";
  }
  return { newerrors, valid };
}
