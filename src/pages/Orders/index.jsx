// Styling Imports
import { Container, Content } from "./styles";

// Components Imports
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

// Strategic Imports
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';

// Icons Imports
import { LuChevronUp, LuChevronDown } from "react-icons/lu";

export function Orders() {
  const [purchases, setPurchases] = useState([]);

  const [status, setStatus] = useState();
  const [disabled, setDisabled] = useState(false);

  const { user } = useAuth();

  const isAdmin = user.role === "admin";

  function handleClick() {
    const selects = document.querySelectorAll(".select-status");
    const chevrons = document.querySelectorAll(".chevrons");

    selects.forEach((select, indexSelect) => {
      chevrons.forEach((chevron, indexChevron) => {
        if (indexChevron === indexSelect) {
          select.addEventListener("click", (event) => {
            event.preventDefault();
            chevron.firstElementChild.classList.add("disabled");
            chevron.lastElementChild.classList.remove("disabled");
          })

          select.addEventListener("blur", () => {
            chevron.firstElementChild.classList.remove("disabled");
            chevron.lastElementChild.classList.add("disabled");
          })
        }
        return;
      })
    });
  }

  function itemStatus(status) {

    switch (status) {
      case "pending":
        return "🔴 Pendente"
        break;
      case "preparing":
        return "🟠 Preparando";
        break;
      case "delivered":
        return "🟢 Entregue"
        break;
      default: "🔴 Pendente"
        break;
    }
  }

  async function handleOrderStatus(item, e) {
    let status = e.target.value;

    const purchase = {
      id: item.id,
      status
    };

    await api.patch(`/purchases/${item.id}`, purchase);
  }

  useEffect(() => {
    async function fetchPurchases() {
      const response = await api.get("/purchases");

      const purchasesWithDate = response.data.map(purchase => {
        const updatedAtFormatted = format(
          new Date(purchase.updated_at), "dd'/'MM 'às' HH':'mm'", { locale: ptBR }
        )

        setStatus(() => itemStatus(purchase.status));

        return {
          ...purchase,
          updated_at: updatedAtFormatted,
        }
      }).reverse();

      setPurchases(purchasesWithDate);
    }

    fetchPurchases();
  }, []);

  function handleDisabled(status) {
    if (status === "delivered") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Section title={isAdmin ? "Pedidos" : "Histórico de pedidos"}>
          <table>
            {purchases.length > 0 &&
              <thead className="table-head">
                <tr>
                  <th>Status</th>
                  <th>Código</th>
                  <th>Detalhamento</th>
                  <th>Data e hora</th>
                </tr>
              </thead>

            }

            {purchases &&
              <>
                {purchases.length < 1 &&
                  <tbody>
                    <tr className="no-orders">
                      <td className="no-orders-text">Não existem pedidos registrados ainda!</td>
                    </tr>
                  </tbody>
                }

                {isAdmin ?
                  <tbody>
                    {purchases &&
                      purchases.map(item => (
                        <tr key={item.id}>
                          <td>
                            <span>0000{item.id}</span>
                          </td>

                          <td>
                            <p>{item.updated_at}</p>
                          </td>

                          <td>
                            <span>{item.details}</span>
                          </td>

                          <td>
                            <select
                              disabled={handleDisabled(item.status)}
                              onClick={handleClick}
                              className="select-status"
                              defaultValue={item.status}
                              onChange={e => handleOrderStatus(item, e)}
                            >
                              <option value="pending">🔴 Pendente</option>
                              <option value="preparing">🟠 Preparando</option>
                              <option value="delivered">🟢 Entregue</option>
                            </select>

                            <div className="chevrons">
                              <LuChevronDown />
                              <LuChevronUp className="disabled" />
                            </div>
                          </td>
                        </tr>

                      ))
                    }
                  </tbody>


                  :

                  <tbody id="user-table">
                    {purchases &&
                      purchases.map(item => (
                        <tr key={item.id}>
                          <td>{itemStatus(item.status)}</td>
                          <td>0000{item.id}</td>
                          <td>
                            <span>{item.details}</span>
                          </td>
                          <td>
                            {item.updated_at}
                          </td>
                        </tr>
                      ))
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
