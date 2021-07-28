import React from 'react'
export default function Links({github , linkedin}) {
//   console.log(link1);
     return (
        <div>
        <h3>Links</h3>
        <a href={github}> {github}</a>    
         <a href={linkedin}> {linkedin}</a>           
        </div> 
    )
}
