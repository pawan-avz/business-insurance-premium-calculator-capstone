import React from "react";
import { connect } from "react-redux";
import "./style.css";
import useForm from "./useForm";
function Index({ user }) {
  const [profile, setprofile] = React.useState();
  const [profileform, setprofileform] = React.useState(false);
  const { handleChange, handleSubmit, userProfile } = useForm(
    setprofile,
    user,
    setprofileform
  );
  return (
    <>
      {profileform ? (
        <>
          <div className="container-fluid h-100">
            <div className="container rounded bg-white mt-5 mb-5">
              <div className="row">
                <div className="col-md-4 border-right">
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img
                      className="rounded-circle mt-5"
                      width="150px"
                      src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    />
                    <span className="font-weight-bold">
                      {user && user.firstName} {user && user.lastName}
                    </span>
                    <span className="text-black-50">
                      {user && user.username}
                    </span>
                    <span> </span>
                  </div>
                </div>
                <div className="col-md-7">
                  <strong>Information</strong>
                  <br />
                  <div className="table-responsive">
                    <table className="table table-user-information">
                      <tbody>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-asterisk text-primary"></span>
                              Mobile
                            </strong>
                          </td>
                          <td className="text-primary">{profile.mobile}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-user  text-primary"></span>
                              Name
                            </strong>
                          </td>
                          <td className="text-primary">
                            {profile.user && profile.user.firstName}{" "}
                            {profile.user && profile.user.lastName}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-cloud text-primary"></span>
                              Address
                            </strong>
                          </td>
                          <td className="text-primary">{profile.address}</td>
                        </tr>

                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-bookmark text-primary"></span>
                              City
                            </strong>
                          </td>
                          <td className="text-primary">{profile.city}</td>
                        </tr>

                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-eye-open text-primary"></span>
                              State
                            </strong>
                          </td>
                          <td className="text-primary">{profile.state}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-envelope text-primary"></span>
                              Pincode
                            </strong>
                          </td>
                          <td className="text-primary">{profile.pincode}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-calendar text-primary"></span>
                              Role
                            </strong>
                          </td>
                          <td className="text-primary">
                            {profile.user && profile.user.role}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>
                              <span className="glyphicon glyphicon-calendar text-primary"></span>
                              Email
                            </strong>
                          </td>
                          <td className="text-primary">
                            {profile.user && profile.user.username}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container rounded bg-white mt-5 mb-5 h-100">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
                <span className="font-weight-bold">
                  {user && user.firstName} {user && user.lastName}
                </span>
                <span className="text-black-50">{user && user.email}</span>
                <span> </span>
              </div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12 ">
                    <label className="labels">Profile image :</label>
                    <input
                      type="file"
                      accept="image/**"
                      className="form-control"
                      name="image"
                      onChange={handleChange("image")}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Mobile Number :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter phone number"
                      value={userProfile.mobile}
                      onChange={handleChange("mobile")}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Address :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line "
                      value={userProfile.address}
                      onChange={handleChange("address")}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">city :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="city"
                      value={userProfile.city}
                      onChange={handleChange("city")}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">State :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="state"
                      value={userProfile.state}
                      onChange={handleChange("state")}
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="labels">Postcode :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter pincode"
                      value={userProfile.pincode}
                      onChange={handleChange("pincode")}
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    user: state.user.users,
  };
};

export default connect(mapStateToProps)(Index);
