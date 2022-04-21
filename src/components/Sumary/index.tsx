import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saídas.svg"
import totalImg from "../../assets/Total.svg"
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./style"

export function Sumary(){
   const {transactions} = useTransactions();
         
  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === "deposit"){
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    }else{
      acc.widthdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc;

  },{
    deposits: 0,
    widthdraws: 0,
    total: 0,
  })
  
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
        {new Intl.NumberFormat("pt-BR",{
                style: "currency",
                currency: "BRL"
              }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>
          -
        {new Intl.NumberFormat("pt-BR",{
              style: "currency",
              currency: "BRL"
              }).format(summary.widthdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
        {new Intl.NumberFormat("pt-BR",{
                 style: "currency",
                 currency: "BRL"
              }).format(summary.total)}
          </strong>
      </div>
    </Container>
    
  )
}