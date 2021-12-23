import React,{useEffect,useContext} from 'react'
import './investors.scss'
import {Context} from './App.js'
function Investors() {
  const {investor,ninvestors,setInvestor,setNinvestors}=useContext(Context);
  // this code stores data
  useEffect(()=>{
        const inve=localStorage.getItem('main')
        const inves=localStorage.getItem('ninv')
        const load=JSON.parse(inve)
        const loadin=JSON.parse(inves)
          if(load){
            setInvestor(load)
            setNinvestors(loadin)
          } 
      },[])
      useEffect(()=>{
        const store=JSON.stringify(investor);
        const store2=JSON.stringify(ninvestors);
        localStorage.setItem('main',store)
        localStorage.setItem('ninv',store2)
      },[investor])
      // this code delete data.
  const de=((id) => {
    setInvestor([...investor].filter(dlt =>dlt.id!==id));
    //this code decrease the number of investors.
    setNinvestors(ninvestors - 1)
});
// this code toggle investors
const complet=(id)=>{
  const toggl=[...investor].map((investor)=>{
     if(investor.id===id){
      investor.complete=!investor.complete
     }
     return investor  
 }
     )
     setInvestor(toggl);
 }

    return (
      
        <div className='cop'>
          <h1>Number of Investors <span>{ninvestors}</span></h1>
          <div className='div1'>
          <div className='div'>
          
          {[...investor].map((invest)=> <div key={invest.id} className='invest-list'>
            <button onClick={()=>de(invest.id)}>x</button>
            <p> <img src={require("./person2.png").default} alt="" />
             {invest.investor1} -
            <input type='checkbox' onChange={()=>complet(invest.id)}
            checked={invest.complete}/>-
            ${new Intl.NumberFormat().format(invest.cont1)}</p>
            
             </div>)}  
        </div>
          </div>
         
          </div>
         
    )
}

export default Investors;
