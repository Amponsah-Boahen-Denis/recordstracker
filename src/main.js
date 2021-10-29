import React,{useEffect,useState} from 'react'
import './main.scss'
function Main({costcustomer,customer,setcostcustomer,setcostinvestor,investor,costinvestor}) {
    const [total,setTotal]=useState(costcustomer + costinvestor)
    useEffect(() => {
        let calc=0;
       for(let i=0; i < customer.length; i++){
           calc+=parseInt(customer[i].cost1)
       }
        setcostcustomer(calc)
   }, [customer]);
   useEffect(() => {
    let calc=0;
   for(let i=0; i < investor.length; i++){
       calc+=parseInt(investor[i].cont1)
   }
    setcostinvestor(calc)
}, [investor])

useEffect(() => {
    setTotal(costcustomer + costinvestor)
}, [costcustomer,costinvestor])
 
    return (
        <div className='main'>
            <div className='cal'>
                <i>Customer cost</i><br/>
        <b>${new Intl.NumberFormat().format(costcustomer)}</b><br/>
        <i>Investor cost</i><br/>
        <b>${new Intl.NumberFormat().format(costinvestor)}</b><br/>
        <i>Total cost</i><br/>
       <b>${new Intl.NumberFormat().format(total)}</b>
       </div>
<div className='img'>
<img src="/fotos/code.png" alt="" />
</div>
        </div>
    )
}

export default Main;
