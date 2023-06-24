import Card from './context';


function Home(){
    return (
      <Card
        txtcolor="black"
        header="Palmer Bad Bank"
        title="Welcome to the bank"
        text="We are not here to protect your money."
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      />    
    );  
  }
  export default Home();