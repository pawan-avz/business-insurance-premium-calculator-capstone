import React from "react";
const useForm = () => {
  const [business, setBusiness] = React.useState({
    registered: "",
    date: "",
    property: [],
  });

  const handleChange = (key) => (event) => {
    let value = event.target.value;
    if (key === "property") {
      setBusiness((oldData) => ({
        ...oldData,
        [key]: [...oldData.property, value],
      }));
    } else {
      setBusiness((oldData) => ({
        ...oldData,
        [key]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(business);
  };
  return { handleChange, handleSubmit, business };
};

export default useForm;
