import NavBar from './navbar.js';
import Home from './home';
import CreateAccount from './createaccount.js'
import Login from './login.js';
import Deposit from './deposit.js'
import Withdraw from './withdraw.js';
import {Balance} from './balance.js';
import AllData from './alldata.js';
import {UserContext} from './context';
import {Route} from './context';
import {HashRouter} from './context';
import React,{ReactDOM} from 'react';

function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
