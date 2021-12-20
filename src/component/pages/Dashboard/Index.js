import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Index = () => {
  const [userDetails, setUserDetails] = useState("");
  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
  }, []);

  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem("userDetails");
    history.push("/login");
  };

  console.log(userDetails);
  return (
    <>
      {userDetails ? (
        <div
          style={{
            margin: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              backgroundColor: "teal",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <p style={{ color: "#fff", fontSize: "30px" }}>
              {userDetails.firstName + " " + userDetails.lastName}
            </p>
          </div>
          <h2>{userDetails.username}</h2>
          <h2>{userDetails.gender}</h2>
          <p style={{ marginTop: "50px", cursor: "pointer" }}>
            <a onClick={logOut}>logout</a>
          </p>
        </div>
      ) : (
        <div style={{ height: "100vh" }}>your are not logged in</div>
      )}
    </>
  );
};

export default Index;
