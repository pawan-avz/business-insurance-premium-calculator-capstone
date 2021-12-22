export default function validateForm(values) {
  let newerrors ={};

  let flag=false;
  
  for (const property in values) {
    
    if (!values.brandName.trim()) {
      flag=true;
      newerrors.brandName = `brand name is required *`;
    }
    if (!values.model.trim()) {
      flag=true;
      newerrors.model = ` model is required *`;
    }
    if (!values.rate.trim()) {
      flag=true;
      newerrors.rate = ` rate is required *`;
    }
    if (!values.date.trim()) {
      flag=true;
      newerrors.date = ` date is required *`;
    }
  }

  return {newerrors,flag};
}
