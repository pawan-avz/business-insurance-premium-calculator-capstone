let selected_business = JSON.parse(localStorage.getItem("selected_business"));

const maximum_amt = 50000; //it is taken from form number 3
export const selected_info = [
  {
    item: "BIPC",
    dataLabel: "Insurer",
  },
  {
    item: "Business",
    dataLabel: "Category",
  },
  {
    item: selected_business,
    dataLabel: "Product",
  },
  {
    item: maximum_amt,
    dataLabel: "Coverage",
  },
];
