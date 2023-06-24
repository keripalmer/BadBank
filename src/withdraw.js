import Card from './context';
import UserContext from './context';
import React from 'react';


function Withdraw(){
  const [show, setShow]               = React.useState(true);
  const [status, setStatus]           = React.useState('');
  const [withdrawAmt, setWithdrawAmt] = React.useState();
  const [inputValue, setInputValue]   = React.useState('');
  const ctx                           = React.useContext(UserContext);
  let lastUser                        = ctx.users.length-1;
  let balance                         = ctx.users[lastUser].balance;
  
  function withdraw (e){
    console.log("value =",  e.currentTarget.value)
   
    setWithdrawAmt(e.currentTarget.value)
   // <input onChange={e => this.setState({ value: e.target.value })} value={this.inputValue} />
   setInputValue( e.currentTarget.value )
   console.log("value from state", !this.state.inputValue)
// Button is disabled when input state is empty.
//<button disabled={!this.state.value} />
  }
  function validate(bal, wAmt){
      if (wAmt > bal) {
        setStatus('Error: Your withdrawal amount is higher than your availble funds, please pick a lower amount');
        setTimeout(() => setStatus(''),5000);
        return false;
      }
      if (isNaN (wAmt)) {
        setStatus('Error: Your withdrawal amount is not a number');
        setTimeout(() => setStatus(''),5000);
        return false;
      }
      if (wAmt.length == 0) {
        setStatus('Error: Please make an entry');
        setTimeout(() => setStatus(''),5000);
        return false;
      }
      if (wAmt <= 0) {
        setStatus(`Error: Please input a positive number`);
        setTimeout(() => setStatus(''),5000);
        return false;
      }
      return true;
  }
  
  function handleSubmit(){
    if (!validate(balance, withdrawAmt)) return;
    let newBalance = parseInt(balance) - parseInt(withdrawAmt);
    balance = newBalance;
    ctx.users[lastUser].balance = newBalance;
    setShow(false);
  }    

  function clearForm(){
    setWithdrawAmt();
    setShow(true);
  }
  return (
    <Card
      bgcolor="secondary"
      header="Withdraw"
      title="Enter Withdrawal amount below"
      status={status}
      body={show ? (  
              <>
              Balance: ${balance}<br/>
              Withdraw<br/>
              <input type="input" className="form-control" id="withdrawAmt" placeholder="Enter Withdrawal Amount" value={withdrawAmt} 
              onChange={e => withdraw(e.currentTarget.value)} /><br/>
              <button type="submit" disabled={!e.currentTarget.value} className="btn btn-light" onClick={handleSubmit}>Submit Withdrawal</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Withdrawal</button>
              </>
            )}
    />
  );
}
export default Withdraw();