import React,{useState,useEffect} from 'react'
import './customers.scss'
function Customers({customer,ncustomer,setcustomer,setncustomers}) {
    const del=((id) => {
        setcustomer([...customer].filter(dlt =>dlt.id!==id));
        setncustomers(ncustomer - 1)
    });
const compl=(id)=>{
 const toggle=[...customer].map((customer)=>{
    if(customer.id===id){
     customer.complete=!customer.complete
    }
    return customer   
}
    )
    setcustomer(toggle);
}
const d=new Date(customer.date1);
const day=d.getDate();
const month=d.getMonth() + 1;
const year=d.getFullYear();

    return (
        <div className='cust'>
            <h1>Number of customers {ncustomer}</h1>
           {[...customer].map((customer)=><div className='custlist'>
            <b>{day + '/' + month + '/' + year}
            <input type='checkbox' onChange={()=>compl(customer.id)}
            checked={customer.complete}/>
            <button onClick={()=>del(customer.id)}>x</button></b>
           <b><img src="/fotos/person.png" alt=""/>{customer.user1}- 
            ${new Intl.NumberFormat().format(customer.cost1)}</b> 
           </div>
             
           )}
        </div>
    )
}

export default Customers;
