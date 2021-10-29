import React from 'react'
import './coperators.scss'
function Coperators({investor,ninvestor,setInvestor,setNinvestors}) {
  const de=((id) => {
    setInvestor([...investor].filter(dlt =>dlt.id!==id));
    setNinvestors(ninvestor - 1)
});

    return (
        <div className='cop'>
          <h1>Number of Investors {ninvestor}</h1>
          {[...investor].map((invest)=> <div className='invest-list'>
            <button onClick={()=>de(invest.id)}>x</button>
            <p> <img src="/fotos/person3.png" alt="" /> {invest.investor1}
            <input type='checkbox' /> 
                ${new Intl.NumberFormat().format(invest.cont1)}</p>
            
             </div>)}  
        </div>
    )
}

export default Coperators;
