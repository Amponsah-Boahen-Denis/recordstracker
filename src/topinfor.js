import React,{useEffect,useRef,useContext} from 'react'
import {Context} from './App.js'
import './topinfor.scss'
function Topinfor(){
    const user=useRef(null);
    const date=useRef(null);
    const cost=useRef(null);
    const invest=useRef(null);
    const amcont=useRef(null);
    const{
      investor,setInvestor,
      customer,setCustomer, 
      ncustomers,setNcustomers,
      ninvestors,setNinvestors
    } = useContext(Context);
  const add=(e)=>{
  e.preventDefault();
  if(user.current.value==='') return user.current.focus();
  if(date.current.value==='') return date.current.focus();
  if(cost.current.value==='') return cost.current.focus();
  setCustomer([...customer,{"user1":user.current.value,
  "date1":date.current.value,
  "cost1":cost.current.value,
  "complete":false,
  'id':new Date().getTime()
  }],
  user.current.value='',
  date.current.value='',
  cost.current.value='',
  setNcustomers(ncustomers + 1)
  )
  
    };
   
    const addin=(e)=>{
      e.preventDefault();
      if(invest.current.value==='') return invest.current.focus();
      if(amcont.current.value==='') return amcont.current.focus();
      setInvestor([...investor,{"investor1":invest.current.value,
      "cont1":amcont.current.value,
      "complet":false,
      'id':new Date().getTime()
      
      }],
      invest.current.value='',
      amcont.current.value='',
      setNinvestors(ninvestors + 1)
  
      );
        };
  useEffect(() => {
    return user.current.focus();
  })
  const down=((e)=>{if(e.key==='Enter') return date.current.focus()})
  const down2=((e)=>{if(e.key==='Enter') return cost.current.focus()})
    return (
        <div className='top'>
          <div className='user'>

            <input type="text" placeholder='  customers name'
             ref={user} onKeyDown={down}/>
            <input type="date" ref={date} onKeyDown={down2}/>
            <input type="number" placeholder='  $customers cost' ref={cost}/>
            <button onClick={add}>Add customer</button>
            </div> 
            <div className='invest'>
              <input type="text" placeholder=' investors name' ref={invest} />
              <input type="number" placeholder=' $amount contributed'
               ref={amcont}/>
              <button onClick={addin}>Add Investor</button>
            </div>
        </div>
    )
}

export default Topinfor;
