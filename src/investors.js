import React,{useEffect,useContext} from 'react'
import './investors.scss'
import {Context} from './App.js'
function Investors() {
  const {investor,ninvestors,setInvestor,setNinvestors}=useContext(Context);
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
        const storeni=JSON.stringify(ninvestors);
        localStorage.setItem('main',store)
        localStorage.setItem('ninv',storeni)
      },[investor])
  const de=((id) => {
    setInvestor([...investor].filter(dlt =>dlt.id!==id));
    setNinvestors(ninvestors - 1)
});
const complet=(id)=>{
  const toggl=[...investor].map((investor)=>{
     if(investor.id===id){
      investor.complet=!investor.complet
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
            <p> <img src="/fotos/person3.png" alt="" /> {invest.investor1} -
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
