export default function validateForm(values) {
    console.log("form");
    console.log(values)
    let errors = {};
    for(const property in values){
        console.log(property)
    if (!property.brandName.trim()) {
       
      errors[property].brandName = "brand name is required";
    } 
    if (!property["model"].trim()) {
        errors[property].model= "model is required";
    } 
    if (!property["rate"].trim()) {
        errors[property].rate = "rate is required";
    } 
    if (!property["date"].trim()) {
        errors[property].date = "date is required";
      } 

    }
  
   
   
    return errors;
  }
  