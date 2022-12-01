import React,{useState,useEffect} from 'react'
function Restaurants(){
    const[rest,setRest]=useState([])
useEffect(()=>{
    fetch('ResArrObj.json')
    .then(res=>res.json())
    .then(res=>{
console.log(res)
setRest(res.restaurants)
    })
},[])

return(
    <div className='container-app'>
        <div className='card'>
        {rest.map(rests=><div className='item' key={rests.name}>
           <h2 className='name'>{rests.name}</h2> 
           <p className='address'>{rests.address}</p>
           <h5 className='rating'>Rating-{rests.rating}/5</h5>
           
           </div>)}
        </div>
       
    </div>
)

}
export default Restaurants