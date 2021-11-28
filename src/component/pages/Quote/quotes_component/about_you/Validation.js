

const Validation =(values) =>{
    let errors ={};
 
    if(!values.name){
        errors.name="name is required *";
    }

    if(!values.email){
        errors.email="Email is required *" ;
    }else if(!/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(values.email)){
        errors.email = "Email is not valid *"
    }
    
    if(!values.mobile){
        errors.mobile="Mobile number is required *"
    }else if(values.mobile !== 10){
        errors.mobile="Mobile number is invalid *"
    }

    if(!values.address){
        errors.address="Address is required *"
    }
    
    if(!values.dob){
        errors.dob="Date of birth is required *"
    }

    if(!values.city){
        errors.city="city is required *"
    }

    if(!values.state){
        errors.state="state is required *"
    }

    if(!values.pincode){
        errors.pincode="pincode is required *"
    }

    return errors;
 }
 
 export default Validation;
 