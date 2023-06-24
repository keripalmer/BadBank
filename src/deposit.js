import {UserContext} from './context';
import Card from './context';
import React from 'react';

function Deposit(){
  const [show, setShow]               = React.useState(true);
  const [status, setStatus]           = React.useState('');
  const [depositAmt, setDepositAmt]   = React.useState();
  const ctx                           = React.useContext(UserContext);
  let lastUser                        = ctx.users.length-1;
  let balance                         = ctx.users[lastUser].balance;
  
  function validate(bal, dAmt){
      if (isNaN (dAmt)) {
        setStatus('Error: Your  amount is not a number');
        setTimeout(() => setStatus(''),5000);
        return false;
      }
      if (dAmt <= 0) {
        setStatus ('Error: Please enter a positive number')
        setTimeout(() => setStatus(''),5000);
        return false;
      }
      if (dAmt.length == 0) {
        setStatus('Error: Please make an entry');
        setTimeout(() => setStatus(''),5000);
        return false;
      }
      return true;
  }
  
  function handleSubmit(){
    if (!validate(balance, depositAmt)) return;
    let newBalance = parseInt(balance) + parseInt(depositAmt);
    //setBalance(newBalance);
    balance = newBalance;
    ctx.users[lastUser].balance = newBalance;
    //ctx.users.push({balance:{newBalance});
    setShow(false);
  }    

  function clearForm(){
    setDepositAmt();
    setShow(true);
  }

  return (
    <Card
      bgcolor="secondary"
      header="Deposit"
      title="Enter deposit amount below"
      status={status}
      body={show ? (  
              <>
              Balance: ${balance}<br/>
              Deposit<br/>
              <input type="input" className="form-control" id="depositAmt" placeholder="Enter Deposit Amount" value={depositAmt} onChange={e => setDepositAmt(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleSubmit}>Submit Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
              </>
            )}
    />
  );
}

export default Deposit();