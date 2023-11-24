// Styling Imports
import { Container, Content } from "./styles";

// Components Imports
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Select } from "../../components/Select";
import { Footer } from "../../components/Footer";

// Strategic Imports
import { useAuth } from "../../hooks/auth";

// Icons Imports
import { LuClock, LuCheck } from "react-icons/lu";
import { FaCircle } from "react-icons/fa6";
import img from "../../assets/Logo.svg";

export function Orders() {

  const { user } = useAuth()

  const isAdmin = user.role === "admin";

  const orders = ["Salada Ravanelo", "Pancho"];
  const item = [
    {
      name: "Salada Ravenlo",
      quantity: "3",
      id: 1
    },
    {
      name: "Pancho",
      quantity: "2",
      id: 2
    }
  ];

  function handleClick() {
    document.querySelectorAll("#category-select input").forEach(input => {
      input.click(document.getElementById("options-view"));
    });
  }

  return (
    <Container>
      <Header />

      <Content>
        <Section title={isAdmin ? "Pedidos" : "Histórico de pedidos"}>
          <table>
            <thead className="table-head">
              <tr>
                <th>Status</th>
                <th>Código</th>
                <th>Detalhamento</th>
                <th>Data e hora</th>
              </tr>
            </thead>

            {orders &&
              <>
                {orders.length < 1 &&
                  <tbody>
                    <tr>
                      <td colSpan="4">
                        <div>
                          <p>Não existem pedidos cadastrados ainda!</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                }



                {isAdmin ?
                  <tbody>
                    <tr>
                      <td>
                        <span>000004</span>
                      </td>

                      <td>
                        <p>20/05 às 18h00</p>
                      </td>

                      <td>
                        {
                          item.map(item => (
                            <span key={item.id}>{item.quantity} X {item.name}, {" "}</span>
                          ))
                        }
                      </td>

                      <td>
                        <Select>
                          <li className="option" onClick={handleClick}>
                            <input
                              type="radio"
                              name="category"
                              value="Pendente"
                              data-label="🔴 Pendente"
                            />

                            <FaCircle />
                            <span className="label">Pendente</span>
                            <LuCheck />
                          </li>

                          <li className="option" onClick={handleClick}>
                            <input
                              type="radio"
                              name="category"
                              value="Preparando"
                              data-label="🟠 Preparando"
                            />

                            <FaCircle />
                            <span className="label">Preparando</span>
                            <LuCheck />
                          </li>

                          <li className="option" onClick={handleClick}>
                            <input
                              type="radio"
                              name="category"
                              value="Entregue"
                              data-label="🟢 Entregue"
                            />

                            <FaCircle />
                            <span className="label">Entregue</span>
                            <LuCheck />
                          </li>
                        </Select>
                      </td>
                    </tr>
                  </tbody>


                  :

                  <tbody id="user-table">
                    {orders &&
                      <tr>
                        <td>🔴Pendente</td>
                        <td>00001</td>
                        <td>
                          {
                            item.map(item => (
                              <span key={item.id}>{item.quantity} X {item.name}, {" "}</span>
                            ))
                          }
                        </td>
                        <td>20/05 às 18h00</td>
                      </tr>
                    }
                  </tbody>
                }
              </>
            }
          </table>
        </Section>
      </Content>

      <Footer />
    </Container>
  );
}
