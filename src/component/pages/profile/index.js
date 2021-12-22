import React from 'react'
import {connect} from 'react-redux';
import "./style.css"
function Index({user}) {
    const [profile,setprofile]=React.useState(true)
    return (
    <>
    {profile?<>
        <div className="container bootstrap snippets bootdey">
<div className="panel-body inf-content">
    <div className="row">
        <div className="col-md-4">
            <img alt="" style="width:600px;" title="" className="img-circle img-thumbnail isTooltip" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario"/> 
            <ul title="Ratings" className="list-inline ratings text-center">
                <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
            </ul>
        </div>
        <div className="col-md-6">
            <strong>Information</strong><br/>
            <div className="table-responsive">
            <table className="table table-user-information">
                <tbody>
                    <tr>        
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-asterisk text-primary"></span>
                                Identificacion                                                
                            </strong>
                        </td>
                        <td className="text-primary">
                            123456789     
                        </td>
                    </tr>
                    <tr>    
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-user  text-primary"></span>    
                                Name                                                
                            </strong>
                        </td>
                        <td className="text-primary">
                            Bootdey     
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-cloud text-primary"></span>  
                                Lastname                                                
                            </strong>
                        </td>
                        <td className="text-primary">
                            Bootstrap  
                        </td>
                    </tr>

                    <tr>        
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-bookmark text-primary"></span> 
                                Username                                                
                            </strong>
                        </td>
                        <td className="text-primary">
                            bootnipets 
                        </td>
                    </tr>


                    <tr>        
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-eye-open text-primary"></span> 
                                Role                                                
                            </strong>
                        </td>
                        <td className="text-primary">
                            Admin
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-envelope text-primary"></span> 
                                Email                                                
                            </strong>
                        </td>
                        <td className="text-primary">
                            noreply@email.com  
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-calendar text-primary"></span>
                                created                                                
                            </strong>
                        </td>
                        <td className="text-primary">
                            20 jul 20014
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-calendar text-primary"></span>
                                Modified                                                
                            </strong>
                        </td>
                        <td className="text-primary">
                             20 jul 20014 20:00:00
                        </td>
                    </tr>                                    
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>
</div> 

    </>:
    <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">{user&&user.firstName} {user&&user.lastName}</span><span className="text-black-50">{user&&user.email}</span><span> </span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 "><label className="labels">Profile image :</label><input type="file" accept='image/**' className="form-control" name="image"  /></div>
                    <div className="col-md-12"><label className="labels">Mobile Number :</label><input type="text" className="form-control" placeholder="enter phone number" value=""/></div>
                    <div className="col-md-12"><label className="labels">Address :</label><input type="text" className="form-control" placeholder="enter address line " value=""/></div>
                    <div className="col-md-12"><label className="labels">city :</label><input type="text" className="form-control" placeholder="city" value=""/></div>
                    <div className="col-md-12"><label className="labels">State :</label><input type="text" className="form-control" placeholder="state" value=""/></div>
                    
                    <div className="col-md-12"><label className="labels">Postcode :</label><input type="text" className="form-control" placeholder="enter pincode" value=""/></div>
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        
    </div>
</div>
}



    </>
    )
}


const mapStateToProps = (state) => {
    return {
      auth: state.auth,
      user:state.user.users,
    };
  };
  
 
  
export default connect(mapStateToProps)(Index);