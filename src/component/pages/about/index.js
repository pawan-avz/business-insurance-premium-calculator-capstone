import React from "react";

const index = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to right, lightblue, white)",
      }}
      className="container-fluid"
    >
      <div className="row">
        <div class="col-md-6 ">
          <p>
            Help protect your business against financial risks with business
            insurance from AVIZVA Insurance Agency. Insurance can help you cover
            your business in relation to property damage, legal liability,
            worker's compensation, and more. Whether you have a small business
            just getting started or are just looking for better rates or
            coverage, having the right insurance policy can make a difference
            when you really need it.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/01/Website_color_schemes_jpg_-ORQZWOE.jpg?auto=format&q=60&fit=max&w=930"
            alt="img"
            width="600px"
          ></img>
        </div>
      </div>
    </div>

    // <table>
    //   <tr>
    //     <td>
    //       <h2>About Us</h2>
    //       <br />
    //       <p>
    //         Help protect your business against financial risks with business
    //         insurance from AVIZVA Insurance Agency. Insurance can help you cover
    //         your business in relation to property damage, legal liability,
    //         worker's compensation, and more. Whether you have a small business
    //         just getting started or are just looking for better rates or
    //         coverage, having the right insurance policy can make a difference
    //         when you really need it.
    //       </p>
    //       <br />
    //       <a href="https://www.investopedia.com/terms/b/business-insurance.asp">
    //         <button type="button" className="btn btn-primary">
    //           Learn More
    //         </button>
    //       </a>
    //     </td>
    //     <td>
    //       <img
    //         src="https://thumbs.dreamstime.com/b/business-team-vector-concept-web-banner-website-page-illustration-big-statistical-dashboard-increasing-bar-graph-144572927.jpg"
    //         alt="img"
    //         width="800px"
    //         height="800px"
    //       ></img>
    //     </td>
    //   </tr>
    // </table>
  );
};

export default index;
