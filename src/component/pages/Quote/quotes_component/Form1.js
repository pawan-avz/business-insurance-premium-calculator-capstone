import React from "react";
import { NavLink } from "react-router-dom";
import "../../../css/form1.css";
const Form1 = (props) => {
  // const state = [
  //   "State",
  //   "Andhra Pradesh",
  //   "Arunachal Pradesh",
  //   "Assam",
  //   "Bihar",
  //   "Chhattisgarh",
  //   "Goa",
  //   "Gujarat",
  //   "Haryana",
  //   "Himachal Pradesh",
  //   "Jammu and Kashmir",
  //   "Jharkhand",
  //   "Karnataka",
  //   "Kerala",
  //   "Madhya Pradesh",
  //   "Maharashtra",
  //   "Manipur",
  //   "Meghalaya",
  //   "Mizoram",
  //   "Nagaland",
  //   "Odisha",
  //   "Punjab",
  //   "Rajasthan",
  //   "Sikkim",
  //   "Tamil Nadu",
  //   "Telangana",
  //   "Tripura",
  //   "Uttarakhand",
  //   "Uttar Pradesh",
  //   "West Bengal",
  //   "Andaman and Nicobar Islands",
  //   "Chandigarh",
  //   "Dadra and Nagar Haveli",
  //   "Daman and Diu",
  //   "Delhi",
  //   "Lakshadweep",
  //   "Puducherry",
  // ];

  // const profession = [
  //   "Profession",
  //   "Accounting",
  //   "Actuarial services",
  //   "Acupressure services",
  //   "Acupuncture services",
  //   "Advertising",
  //   "Answering/paging services",
  //   "Appliance/electronic stores",
  //   "Application development",
  //   "Application service provider",
  //   "Architecture",
  //   "Art therapy",
  //   "Auctioneering",
  //   "Audiology",
  //   "Barbecue truck/trailer operator",
  //   "Beautician/cosmetology services",
  //   "Bookkeeping",
  //   "Brand consultant",
  //   "Building inspection",
  //   "Business consulting",
  //   "Business manager services",
  //   "Cabling installation",
  //   "Carpet/furniture/upholstery cleaning(offsite only)",
  //   "Civil engineering",
  //   "Claims adjusting",
  //   "Clock making/repair",
  //   "Clothing/apparel stores",
  //   "Coffee/donut cart operator",
  //   "Communication equipment installation (cable/satellite)",
  //   "Computer consulting",
  //   "Computer programming services",
  //   "Computer system/network developer",
  //   "Control systems integration/automation",
  //   "Court reporting",
  //   "Credit counseling",
  //   "Dance therapy",
  //   "Data processing",
  //   "Database designer",
  //   "Diet/nutrition services",
  //   "Digital marketing",
  //   "Direct marketing",
  //   "Document preparation",
  //   "Door or window installation/repair",
  //   "Draftsman (including CAD/CAM)",
  //   "Drama therapy",
  //   "Education consulting",
  //   "Electrical engineering",
  //   "Electrical work (interior only)",
  //   "Engineering",
  //   "Environmental engineering",
  //   "Esthetician services",
  //   "Event planning/promotion",
  //   "Executive placement",
  //   "Expert witness services",
  //   "Exterior cleaning services",
  //   "Fence installation/repair",
  //   "Financial auditing or consulting",
  //   "First aid and CPR training",
  //   "Floor covering installation(no ceramic tile/stone)",
  //   "Florists",
  //   "Food truck/trailer operator",
  //   "Food/beverage cart operator",
  //   "Glass installation/repair (no auto work)",
  //   "Graphic design",
  //   "Hair stylist/barber services",
  //   "Home furnishing stores",
  //   "Home health aide",
  //   "Home theater installation",
  //   "Hot dog cart operator",
  //   "Human Resources (HR) consulting",
  //   "Hypnosis",
  //   "IT consulting",
  //   "IT project management",
  //   "IT software/hardware training services",
  //   "Ice cream truck operator",
  //   "Ice cream/snow cone/shaved ice cart operator",
  //   "Industrial engineering",
  //   "Insurance agent",
  //   "Insurance inspector",
  //   "Interior design",
  //   "Interior finishing work",
  //   "Investment advice",
  //   "Janitorial/cleaning services",
  //   "Jewelry stores",
  //   "Land Surveyor",
  //   "Landscape architect",
  //   "Landscaping/gardening services",
  //   "Lawn care services",
  //   "Legal services",
  //   "Lemonade cart operator",
  //   "Life/career/executive coaching",
  //   "Locksmiths",
  //   "Management consulting",
  //   "Manufacturer sales representative",
  //   "Market research",
  //   "Marketing/media consulting",
  //   "Marriage and family therapy",
  //   "Massage therapy",
  //   "Medical billing",
  //   "Mental health counseling",
  //   "Mobile food concessions",
  //   "Mobile food services",
  //   "Mobile food vending services",
  //   "Mobile kitchen operator",
  //   "Mobile street food vendor",
  //   "Mortgage brokering/banking",
  //   "Music therapy",
  //   "Nail technician services",
  //   "Notary services",
  //   "Occupational therapy",
  //   "Other consulting services",
  //   "Other marketing/PR services",
  //   "Other stores (with food/drinks)",
  //   "Other stores (without food/drinks)",
  //   "Painting (interior only)",
  //   "Personal care aide",
  //   "Personal concierge/assistant",
  //   "Personal training (health and fitness)",
  //   "Photography",
  //   "Process engineering",
  //   "Process server",
  //   "Project management",
  //   "Project manager (architecture or engineering)",
  //   "Property management",
  //   "Psychology",
  //   "Public relations",
  //   "Real estate agent/broker",
  //   "Recruiting (employment placements)",
  //   "Research consulting",
  //   "Resume consulting",
  //   "Safety consultant",
  //   "Search engine services (SEO/SEM)",
  //   "Security system installation",
  //   "Sign painting/lettering (exterior only)",
  //   "Sign painting/lettering (interior only)",
  //   "Snack truck operator",
  //   "Snow blowing and removal (no auto coverage)",
  //   "Social media consultant",
  //   "Social work services",
  //   "Software development",
  //   "Sound equipment installation",
  //   "Speech therapy",
  //   "Stock brokering",
  //   "Strategy consultant",
  //   "Substance abuse counseling",
  //   "Talent agency",
  //   "Tax preparation",
  //   "Tile/stone/marble/mosaic/terrazzo work(int. only)",
  //   "Training (business, vocational or life skills)",
  //   "Translating/interpreting",
  //   "Transportation engineering",
  //   "Travel agency",
  //   "Trustee services",
  //   "Tutoring",
  //   "Upholstery work",
  //   "Value added reseller of computer hardware",
  //   "Website design",
  //   "Window cleaning (nothing above 15 feet)",
  //   "Yoga/pilates instruction",
  // ];

  const typeOfInsurance = [
    "Select type of insurance",
    "Auto insurance",
    "Health insurance",
    "General insurance",
    "Business insurance",
  ];

  const typeOfBusinessInsurance = [
    "Select type of Business insurance",
    "Commercial property insurance",
    "General liability insurance",
    "Commercial auto liability",
    "Worker's compensation",
  ];
  return (
    <>
      <div className="info_form1">
        <h1
          style={{
            textAlign: "center",
            padding: "10px",
            color: "grey",
            marginTop: "10px",
            boxShadow: "1px 1px 1px #ccc",
            textTransform: "uppercase",
          }}
        >
          Check prices and get coverage today
        </h1>
        <p>
          This website offers General Liability, Professional Liability, and
          Business Owners Policies online.
        </p>
      </div>

      <form>
        <div className="form1">
          <label>Select Business type</label>
          <div className="profession">
            <select>
              {typeOfBusinessInsurance.map((data) => (
                <option>{data}</option>
              ))}
            </select>
          </div>
          <div className="get_quote">
            <NavLink to="/quote/form2">
              <button onClick={props.changeNext}>Get a Quote</button>
            </NavLink>
          </div>
        </div>

        <p className="customer_call">
          Speak with a licensed insurance agent: +91 9999999988 Monday – Friday,
          7am – 10pm ET
        </p>
      </form>
    </>
  );
};

export default Form1;



