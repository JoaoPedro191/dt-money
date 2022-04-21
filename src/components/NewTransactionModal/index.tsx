import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { api } from "../../services/api";
import incomeImg from "../../assets/Entradas.svg"
import outcomeImg from "../../assets/Saídas.svg"
import Closeimg from "../../assets/close.svg"
import { Container, TransactionsTypeContainer, RadioBox} from "./styles";
import { useTransactions } from "../../hooks/useTransactions";
  
interface NewtrasactionModalProps{
  isOPen: boolean;
  onRequestCLose: () => void;
}

export function NewtrasactionModal({isOPen, onRequestCLose}: NewtrasactionModalProps){
   const {createTransaction}= useTransactions()


    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCatergory] = useState("");
    const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault()

    await createTransaction({
       title,
       amount,
       category,
       type,
       createdAt: new Date().toString()
    }) 

     setTitle("")
     setAmount(0)
     setCatergory("")
     setType("deposit")
    onRequestCLose();

  }


  return(
    <Modal 
    isOpen = {isOPen} 
    onRequestClose = {onRequestCLose}
    overlayClassName="react-modal-overlay"
    className= "react-modal-content"
     >

       <button  type="button" onClick={onRequestCLose} className="react-modal-close">
           <img src={Closeimg} alt="Fechar Modal" />
       </button>

       <Container onSubmit={handleCreateNewTransaction}>
       <h2>Cadastrar Transição</h2>
        <input placeholder="titulo"
         value={title}
         onChange={event => setTitle(event.target.value)}
        />

        <input  type="number"placeholder="valor"
        value={amount}
        onChange={event => setAmount(Number(event.target.value))}
        />

         <TransactionsTypeContainer>
           <RadioBox
           type ="button"
           onClick={() => {setType("deposit");}}
           isActive={type==="deposit"}
           activeColor="green"
           >
             <img src={incomeImg} alt="Entradas" />
             <span>Entradas</span>
           </RadioBox>


           <RadioBox
           type="button"
           onClick={() => {setType("withdraw");}}
           isActive={type==="withdraw"}
           activeColor="red"
           >
          
             <img src={outcomeImg} alt="Saídass" />
             <span>Saídas</span>
           </RadioBox>
             
         </TransactionsTypeContainer>
        <input placeholder="Categoria"
         value={category}
         onChange={event => setCatergory(event.target.value)}
         />
        <button type="submit">Cadastrar</button>
       </Container>
    </Modal>
  );
 
}