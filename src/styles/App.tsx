import Modal from "react-modal";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/header";
import { GlobalStyle } from "./global";
import { useState } from "react";
import { NewtrasactionModal } from "../components/NewTransactionModal";
import { TransactionsProvider } from "../hooks/useTransactions";


Modal.setAppElement("#root")

 export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] =useState(false)
  

  function handleOPenNewTransactionModal(){
     setIsNewTransactionsModalOpen(true);
  }

 function handleCloseNewTransactionModal(){
    setIsNewTransactionsModalOpen(false)
   
 }
  return (

    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOPenNewTransactionModal} />
       <Dashboard/>

      <NewtrasactionModal
         isOPen={isNewTransactionsModalOpen}
         onRequestCLose={handleCloseNewTransactionModal}
       />
       <GlobalStyle />
       
    </TransactionsProvider>
  );
}


