import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { premiumCar, handle, removeItem } from "./Calculation";
import { selected_info } from "./Data";
import { AiFillDelete } from "react-icons/ai";

import {
  Container,
  HeadingDiv,
  ContentDiv,
  ContinueButton,
  BackButton,
  ButtonDiv,
  Ul,
} from "./PremiumStyle";

function Index() {
  let selected_business = JSON.parse(localStorage.getItem("selected_business"));
  let selected_property = JSON.parse(localStorage.getItem("selected_property"));

  const [premiumValueOfCar, setPremiumValueOfCar] = useState(0);
  const [premiumValueOfLaptop, setPremiumValueOfLaptop] = useState(0);
  const [premiumValueOfcomputer, setPremiumValueOfcomputer] = useState(0);

  const [totalPremiumValueOfCar, setTotalPremiumValueOfCar] = useState(0);
  const [totalPremiumValueOfLaptop, setTotalPremiumValueOfLaptop] = useState(0);
  const [totalPremiumValueOfcomputer, setTotalPremiumValueOfcomputer] =
    useState(0);

  const [grandTotal, setGrandTotal] = useState(0);
  const [selections, setSelections] = useState({});

  const changed = (value, e) => {
    setSelections({ ...selections, [`${value}`]: e.target.value });
  };

  console.log(selections);
  useEffect(() => {
    selected_business.includes("car") &&
      premiumCar(selected_property.car.rate, setPremiumValueOfCar);

    selected_business.includes("computer") &&
      premiumCar(selected_property.computer.rate, setPremiumValueOfcomputer);

    selected_business.includes("laptop") &&
      premiumCar(selected_property.laptop.rate, setPremiumValueOfLaptop);
  }, []);

  useEffect(() => {
    setGrandTotal(
      totalPremiumValueOfCar +
        totalPremiumValueOfLaptop +
        totalPremiumValueOfcomputer
    );
  });

  return (
    <>
      <HeadingDiv>
        <div>
          <p>Premium Calculated</p>
        </div>
      </HeadingDiv>
      <Container>
        <ContentDiv>
          <Ul>
            <li className="table-header">
              {[
                "insurer",
                "category",
                "product",
                "coverage",
                "premium",
                "deductible*",
                "total",
                "remove",
              ].map((data, index) => (
                <div
                  style={{ textAlign: data === "total" ? "center" : "" }}
                  data={data}
                  key={index}
                >
                  {data.toUpperCase()}
                </div>
              ))}
            </li>
            {selected_business.map((selectedBusiness, index) => (
              <li className="table-row" key={index}>
                {selected_info.map((innerData, index) =>
                  typeof innerData.item === "object" ? (
                    <div dataLabel={innerData.dataLabel} key={index}>
                      {selectedBusiness.toUpperCase()}
                    </div>
                  ) : (
                    <div dataLabel={innerData.dataLabel} key={index}>
                      {innerData.item}
                    </div>
                  )
                )}
                {/* base premium */}
                <div dataLabel="Premium">
                  ₹{" "}
                  {selectedBusiness === "car"
                    ? premiumValueOfCar
                    : selectedBusiness === "computer"
                    ? premiumValueOfcomputer
                    : premiumValueOfLaptop}
                </div>
                <div dataLabel="Deductible*">
                  {/* for deductible amount */}
                  <select
                    onChange={(e) => {
                      changed(index, e);
                      handle(
                        e,
                        selectedBusiness === "car"
                          ? setTotalPremiumValueOfCar
                          : selectedBusiness === "computer"
                          ? setTotalPremiumValueOfcomputer
                          : setTotalPremiumValueOfLaptop,

                        selectedBusiness === "car"
                          ? premiumValueOfCar
                          : selectedBusiness === "computer"
                          ? premiumValueOfcomputer
                          : premiumValueOfLaptop
                      );
                    }}
                  >
                    {["select", 10, 20, 30].map((optn) => (
                      <option key={optn} value={optn}>
                        {optn === "select" ? optn : optn + " %"}
                      </option>
                    ))}
                  </select>
                </div>
                {/* for total */}
                <div className="total" dataLabel="Total">
                  ₹{" "}
                  {selectedBusiness === "car"
                    ? totalPremiumValueOfCar
                    : selectedBusiness === "computer"
                    ? totalPremiumValueOfcomputer
                    : totalPremiumValueOfLaptop}
                </div>
                {/* for delete */}
                <div
                  dataLabel="Remove"
                  style={{
                    color: "crimson",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                  onClick={() => removeItem(index)}
                >
                  <AiFillDelete style={{ fontSize: "20px" }} />
                </div>
              </li>
            ))}
            <li className="grandtotal">
              <div>Grand Total</div>
              <div>₹ {grandTotal}</div>
            </li>
          </Ul>
        </ContentDiv>
        <ButtonDiv>
          <NavLink to={`/quote/form4`}>
            <BackButton> back</BackButton>
          </NavLink>
          <ContinueButton
            onClick={() => alert("clicked!!")}
            selectedDeductible={selections} //for disbale style in styled component
            disabled={
              selections[0] == "select" ||
              selections[0] === undefined ||
              selections[1] === "select" ||
              selections[1] === undefined ||
              selections[2] === "select" ||
              selections[2] === undefined
                ? true
                : false
            }
          >
            purchase
          </ContinueButton>
        </ButtonDiv>
      </Container>
    </>
  );
}

export default Index;
