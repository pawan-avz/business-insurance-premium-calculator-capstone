

const Validation =(values) =>{
    let newerrors ={};
    let invalid=false;
 
    if(!values.name){
        newerrors.name="name is required *";
    }

    if(!values.email){
        newerrors.email="Email is required *" ;
    }else if(!/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(values.email)){
        newerrors.email = "Email is not valid *"
    }
    
    if(!values.mobile){
        newerrors.mobile="Mobile number is required *"
    }else if(!(/^\d{10}$/.test(values.mobile))){

        newerrors.mobile="Mobile number is invalid *"
    }

    if(!values.address){
        newerrors.address="Address is required *"
    }
    
    if(!values.dob){
        newerrors.dob="Date of birth is required *"
    }

    if(!values.city){
        newerrors.city="city is required *"
    }

    if(!values.state){
        newerrors.state="state is required *"
    }

    if(!values.pincode){
        newerrors.pincode="pincode is required *"
    }
    
    if(Object.keys(newerrors).length!==0){
       invalid=true;
    }
    return {newerrors,invalid};
 }
 
 export default Validation;
 