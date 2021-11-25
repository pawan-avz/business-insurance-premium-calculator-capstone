export default function validateForm(values) {

    let errors = {};
  
    if (!values.date.trim()) {
      errors.date = "date name is required";
    } 
    if(values.property.length===0){
        errors.property = "select atleast one property";  
    }
   
    return errors;
  }
  