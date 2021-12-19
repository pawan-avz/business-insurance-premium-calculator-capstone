export const premiumCar = (rate, setPremiumValueOfCar) => {
  setPremiumValueOfCar(parseInt(rate * 0.1));
};

export const handle = (e, setPremiumValue, premiumValue) => {
  e.preventDefault();

  let value = (premiumValue * e.target.value) / 100;
  setPremiumValue(parseInt(premiumValue + value));
  if (e.target.value === "select") {
    setPremiumValue(0);
  }
};

export const removeItem = (index) => {
  let selected_property = JSON.parse(localStorage.getItem("selected_property"));
  let selected_business = JSON.parse(localStorage.getItem("selected_business"));
  let item = Object.keys(selected_property);

  for (var i = 0; i < selected_business.length; i++) {
    if (index === 0) {
      delete selected_property.car;
      selected_business.splice(index, 1);
    } else if (index === 1) {
      delete selected_property.computer;
      selected_business.splice(index, 1);
    } else if (index === 2) {
      delete selected_property.laptop;
      selected_business.splice(index, 1);
    }
    localStorage.setItem(
      "selected_property",
      JSON.stringify(selected_property)
    );

    localStorage.setItem(
      "selected_business",
      JSON.stringify(selected_business)
    );
  }
};
