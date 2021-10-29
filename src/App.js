import React,{useState,useRef,useEffect} from 'react';
import Customers from './customers';
import Coperators from './coperators';
import Main from './main';
import Topinfor from './topinfor';
import './app.scss';
function App() {
  const [customer,setCustomer]=useState([]);
  const [investor,setInvestor]=useState([])
  const [ncustomers,setNcustomers]=useState(0);
  const [ninvestors,setNinvestors]=useState(0);
  const [costcustomer,setCostcustomer]=useState(0);
  const [costinvestor,setCostinvestor]=useState(0);   
  return (
    <div className="App">
              <h2>RECORDS TRACKER</h2>
      <div className='she'>

      <Topinfor
      ninvestors={ninvestors}
      setninvestors={setNinvestors}
      setncustomers={setNcustomers}
      ncustomers={ncustomers}
      
      customer={customer} setcustomer={setCustomer} 
      investor={investor} setinvestor={setInvestor}
      />
      <Customers
     customer={customer} setcustomer={setCustomer} 
      ncustomer={ncustomers} setncustomers={setNcustomers} />
      <Main
       costcustomer={costcustomer} 
      customer={customer}
      investor={investor}
       setcustomer={setCustomer} 
       costcustomer={costcustomer}
       costinvestor={costinvestor}
       setcostcustomer={setCostcustomer}
        setcostinvestor={setCostinvestor}
        costinvestor={costinvestor} 
        />
      <Coperators investor={investor} ninvestor={ninvestors}
      setInvestor={setInvestor}
      setNinvestors={setNinvestors}
      />
      </div>
    </div>
  );
}

export default App;
