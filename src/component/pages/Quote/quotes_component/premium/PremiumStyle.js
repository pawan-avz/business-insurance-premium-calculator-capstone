import styled from "styled-components";

export const Container = styled.div`
  overflow-y: scroll;
  padding: 10px;
  padding-top: 0px;
  margin: 5%;
  min-height: 60vh;
  font-family: "lato", sans-serif;
`;

export const HeadingDiv = styled.div`
  display: flex;
  justify-content: center;
  // margin-top: 15%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 6vh;
    width: 50%;
    padding: 5px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    p {
      font-size: 25px;
      border: 0px 1px 1px 1px solid teal;

      @media only screen and (max-width: 600px) {
        font-size: 18px;
      }
    }
  }
`;

export const ContentDiv = styled.div`
  margin-top: 20px;
  width: 100%;
`;

export const UL = styled.ul`
  li {
    width: 90%;
    color: #fff;
    font-weight: bold;
    border-radius: 3px;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .table-row {
    background-color: #376e6f;

    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  }

  .col-1 {
    width: 50%;
    text-align: left;
  }
  .col-2 {
    text-align: right;
  }

  select {
    border: none;
    border-bottom: 1px solid #6c7a89;
    width: 20%;
    padding: 5px;
  }
  select:focus {
    outline: none;
  }

  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }
    .table-row {
    }
    li {
      display: block;
    }
    .col {
      flex-basis: 100%;
    }
    .col {
      display: flex;
      padding: 10px 0;
      &:before {
        color: #6c7a89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
      }
    }
  }
`;

// export const Ul = styled.ul`
//   padding: 0px;
//   li {
//     font-size: 14px;
//     border-radius: 3px;
//     padding: 15px 20px;
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 25px;
//   }
//   .table-header {
//     background-color: #95a5a6;
//     font-size: 14px;
//     text-transform: uppercase;
//     letter-spacing: 0.03em;
//   }
//   .table-row {
//     background-color: #ffffff;
//     box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
//   }

//   div {
//     flex-basis: 10%;
//     select {
//       border: none;
//       border-bottom: 1px solid #6c7a89;
//       width: 100%;
//       padding: 5px;
//     }
//     select:focus {
//       outline: none;
//     }
//   }
//   .total {
//     text-align: center;
//   }
//   .grandtotal {
//     background-color: crimson;
//     color: #ffffff;
//     box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
//     font-size: 15px;
//   }

//   @media only screen and (max-width: 600px) {
//     .table-header {
//       display: none;
//     }
//     li {
//       padding: 10px;
//     }

//     .table-row {
//       pdding: 0px;
//       background-color: #ffffff;
//     }

//     .table-row div {
//       padding: 20px;
//       margin: 10px;
//       background-color: #ffffff;
//       box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
//     }

//     li {
//       display: block;
//     }

//     div {
//       flex-basis: 100%;
//     }

//     div {
//       display: flex;
//       justify-content: space-around;
//       padding: 10px 0;
//       &:before {
//         color: #6c7a89;
//         padding-right: 10px;
//         content: attr(dataLabel);
//         flex-basis: 50%;
//         text-align: left;
//       }
//       select {
//         width: 18%;
//       }
//     }
//     .total {
//       background-color: #396eb0 !important;
//       color: #ffffff !important;
//       &:before {
//         color: #ffffff;
//       }
//     }
//     .grandtotal {
//       display: flex;

//       div {
//         &:before {
//           content: none;
//         }
//       }
//     }
//   }
// `;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
`;

export const ContinueButton = styled.button`
  background-color: rgb(6, 115, 165);

  cursor: pointer;
  padding: 10px 20px;
  width: 100px;
  color: white;
  border-radius: 6px;
  border: none;
  margin: 0 20px;
`;
export const BackButton = styled.button`
  background-color: crimson;
  padding: 10px 30px;
  width: 100px;
  cursor: pointer;
  color: white;
  border-radius: 6px;
  margin: 0 20px;
  border: none;
`;
