import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
  "header"
  "content";
`;

export const Content = styled.main`
  grid-area: content;
  height: 100vh;
  padding: 3.5rem 2.25rem;

  table {
    padding: 1.5rem;
    border: 2px solid ${({ theme }) => theme.COLORS.DARK.DARK_1000};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
    width: 100%;

    tbody {
      display: flex;
      flex-direction: column;

      tr {
        display: grid;
        grid-template-columns: 0fr 1fr;
        grid-template-areas:
        "code date"
        "details details"
        "select select";
        gap: 1rem;
      }
      
      #selected-value {
        font-size: 0.875rem;
      }
      
      td #options {

        .option:nth-child(1) svg:nth-child(2) {
          color: ${({ theme }) => theme.COLORS.TINTS.TOMATO_400};
        }

        .option:nth-child(2) svg:nth-child(2) {
          color: ${({ theme }) => theme.COLORS.TINTS.CARROT_100};
        }

        .option:nth-child(3) svg:nth-child(2) {
          color: ${({ theme }) => theme.COLORS.TINTS.MINT_100};
        }
      }

      td:nth-child(1), td:nth-child(2) {
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-family: "Roboto";
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400};
      }

      td:nth-child(1) {
        grid-area: code;
      }

      td:nth-child(2) {
        grid-area: date;
      }

      td:nth-child(3) {
        grid-area: details;
      }

      td:nth-child(4) {
        grid-area: select;
      }

      div p {
        font-size: 0.875rem;
        text-align: center;
        font-weight: 500;
        padding: 1rem 0;
      }
    }


    thead {
      display: none;
    }

    label {
      display: none;
    }

    ul {
      top: 110%;
      height: 300%;
    }
  }

  #user-table {
    
    tr {
      display: grid;
      grid-template-columns: 0.5fr 0.35fr 1.5fr;
      grid-area: 
      "status code date"
      "details details details";

      td:nth-child(1) {
        grid-area: 1/1/2/2;
      }
      td:nth-child(2) {
        grid-area: 1/2/2/3;
      }
      td:nth-child(3) {
        grid-area: 2/1/3/4;
      }
      td:nth-child(4) {
        grid-area: 1/3/2/4;
        justify-self: start;
      }
    }
  }

  @media screen and (min-width: 850px) {
    padding: 2rem 7.5rem;
    
    table {
      padding: 0;
      border: none;

      thead {
        display: block;
        border: 2px solid ${({ theme }) => theme.COLORS.DARK.DARK_1000};
        border-radius: 0.5rem 0.5rem 0 0;

        tr {
          display: grid;
          grid-template-columns: 1.75fr 1fr 3fr 1fr;
          grid-template-areas:
          "status code details time";
          

          th {
            display: flex;
            align-items: center;
            border-right: 2px solid ${({ theme }) => theme.COLORS.DARK.DARK_1000};
            padding: 1.25rem 1.5rem;
            font-size: 0.875rem;
            font-weight: 700;
            font-family: "Roboto";
            line-height: 1.25rem;
            color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_300};

            &:last-child {
              border: none;
            }
          }

          th:nth-child(1) {
            grid-area: status;
          }

          th:nth-child(2) {
            grid-area: code;
          }
          
          th:nth-child(3) {
            grid-area: details;
          }
        }
      }

      tbody {
        
        tr {
          border: 2px solid ${({ theme }) => theme.COLORS.DARK.DARK_1000};
          border-top: 0;
          display: grid;
          grid-template-columns: 1.74fr 1fr 3fr 1fr;
          grid-template-areas: "status code details date";
          gap: 0;

          td {
            border: 1px solid ${({ theme }) => theme.COLORS.DARK.DARK_1000};
            border-top: none;
            display: flex;
            align-items: center;
          }

          td:nth-child(1) {
            grid-area: code;
          }
          td:nth-child(2) {
            grid-area: date;
          }

          td:nth-child(3) {
            grid-area: details;
            gap: 0.5rem;
          }
          td:nth-child(4) {
            grid-area: status;

            #options {
              height: 265%;
            }
          }
        }

        td {
          padding: 1rem 1rem ;
        }
      }
    }
    
    .table-head {
      

      tr {
      }
    }

    #user-table {
      
      tr {
        border: 2px solid ${({ theme }) => theme.COLORS.DARK.DARK_1000};
        border-top: 0;
        display: grid;
        grid-template-columns: 1.75fr 1fr 3fr 1fr;
        grid-template-areas: "status code details date";
        gap: 0;

        td {
          border: none;
          border-right: 2px solid ${({ theme }) => theme.COLORS.DARK.DARK_1000};
          display: flex;
          align-items: center;
        }

        td:nth-child(1) {
            grid-area: status;
        }

        td:nth-child(2) {
          grid-area: code;
        }

        td:nth-child(3) {
          grid-area: details;
          gap: 0.5rem;
        }

        td:nth-child(4) {
          grid-area: date;
          border-right: none;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    tbody tr td {
      padding: 1rem 1.5rem;
    }
  }
`;
