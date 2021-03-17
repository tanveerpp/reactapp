import React from 'react';
import Cards from './Card';
import Data from './Data';
const Services=()=>
{
    return(
        <>
        <div className="row">
            {Data.map((obj,i)=>{
               return <Cards img={obj.img} title={obj.title} subtitle={obj.subtitle} text={obj.text} ></Cards>
            })}
            </div>
        </>
        
    )
}
export default Services;