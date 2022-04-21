import { Sumary } from "../Sumary";
import { TransactionsTable } from "../transactions";
import { Container } from "./style";

export function Dashboard(){
  return(
    <Container>
      <Sumary />
      <TransactionsTable/>
    </Container>
  )
}