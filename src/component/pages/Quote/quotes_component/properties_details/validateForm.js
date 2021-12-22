export default function validateForm(values) {
  let newerrors ={};

  let flag=false;
  
  for (const property in values) {
    
    if (!values[property].brandName.trim()) {
      flag=true;
      newerrors[property].brandName = `${property} brand name is required *`;
    }
    if (!values[property].model.trim()) {
      flag=true;
      newerrors[property].model = `${property}  model is required *`;
    }
    if (!values[property].rate.trim()) {
      flag=true;
      newerrors[property].rate = `${property}  rate is required *`;
    }
    if (!values[property].date.trim()) {
      flag=true;
      newerrors[property].date = `${property}  date is required *`;
    }
  }

  return {newerrors,flag};
}
