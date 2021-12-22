import React from "react";
import axios from "axios";
import { Domain } from "../../../Config";

export default function useForm(setprofile,user,setprofileform) {
  const [userProfile, setUserProfile] = React.useState({
    mobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    email:user.username,
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const URL = Domain + "/set-user-profile";
    console.log(userProfile);
    let data = new FormData();
    data.append("image", userProfile.image);
    data.append("mobile", userProfile.mobile);
    data.append("address", userProfile.address);
    data.append("city", userProfile.city);
    data.append("state", userProfile.state);
    data.append("pincode", userProfile.pincode);
    data.append("email", userProfile.email);
    console.log(data);

    axios
      .post(URL, data, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        },
      })
      .then((response) => {
        setprofile(response.data);
        setprofileform(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (key) => (e) => {
    if (key === "image") {
      setUserProfile((prev) => ({
        ...prev,
        [key]: e.target.files[0],
      }));
    } else {
      const value = e.target.value;
      setUserProfile((prev) => ({
        ...prev,
        [key]: value,
      }));
    }
  };

  return { handleChange, handleSubmit, userProfile };
}
