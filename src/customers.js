import React,{useContext,useEffect} from 'react'
import {Context} from './App.js'
import './customers.scss'
function Customers() {
    const {customer,ncustomers,setCustomer,setNcustomers} = useContext(Context);
    //this code stores data
   useEffect(()=>{
        const costms=localStorage.getItem('keep')
        const costn=localStorage.getItem('keepn')
        const loads=JSON.parse(costms)
        const loadn=JSON.parse(costn)
        if(loads || loadn){
          setCustomer(loads)
          setNcustomers(loadn)
        }  
      },[])
      useEffect(()=>{
        const stores=JSON.stringify(customer);
        const storen=JSON.stringify(ncustomers);
        localStorage.setItem('keep',stores)
        localStorage.setItem('keepn',storen)
      },[customer])
      //deletting customer
        const del=((id) => {
    setCustomer([...customer].filter(dlt =>dlt.id!==id));
    setNcustomers(ncustomers - 1)
    });
    //this code toggle customers
    const compl=(id)=>{
    const toggle=[...customer].map((customer)=>{
    if(customer.id===id){
     customer.complete=!customer.complete
    }
    return customer   
}
    )
    setCustomer(toggle);
}


    return (
        <div className='cust'>
            
            <h1>Number of customers <span>{ncustomers}</span></h1>
            <div className='div1'>
            <div className='div'>
            {[...customer].map((customer)=><div key={customer.id} className='custlist'>
            <b>{customer.date1} -
            <input type='checkbox' onChange={()=>compl(customer.id)}
            checked={customer.complete}/>
            <button onClick={()=>del(customer.id)}>x</button></b>
           <b><img src="/fotos/person.png" alt=""/>{customer.user1}- 
            ${new Intl.NumberFormat().format(customer.cost1)}</b> 
           </div>
             
           )}

            </div>
            </div>
           
          
        </div>
    )
}

export default Customers;
