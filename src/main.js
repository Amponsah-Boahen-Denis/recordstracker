import React,{useEffect,useState,useCallback,useContext} from 'react'
import {Context} from './App.js'
import './main.scss'
function Main(){
const {costcustomer,customer,setCostcustomer,
    setCostinvestor,investor,
   costinvestor} = useContext(Context);
const [total,setTotal]=useState(costcustomer + costinvestor)
    useEffect(useCallback(
        () => {
            let calc=0;
           for(let i=0; i < customer.length; i++){
               calc+=parseInt(customer[i].cost1)
           }
            setCostcustomer(calc)
       }, [customer])  
    )
   useEffect(useCallback(
    () => {
        let calc=0;
       for(let i=0; i < investor.length; i++){
           calc+=parseInt(investor[i].cont1)
       }
        setCostinvestor(calc)
    }, [investor])
    
   );
useEffect(useCallback(() => {
    setTotal(costcustomer + costinvestor)
}, [costcustomer,costinvestor]))
 
    return (
        <div className='main'>
            <div className='cal'>
                <div className='div'>
                    <p>
         <i>Customers income</i><br/>
        <b>${new Intl.NumberFormat().format(costcustomer)}</b><br/>
                    </p>
                   <p>
        <i>Investors income</i><br/>
        <b>${new Intl.NumberFormat().format(costinvestor)}</b><br/>
                </p>

                </div>
       <div className='total'>
       <i>Total income</i><br/>
       <b>${new Intl.NumberFormat().format(total)}</b>
          </div>

       </div>
<div className='img'>
<img src="/fotos/code.png" alt="" />
</div>
        </div>
    )
}

export default Main;
