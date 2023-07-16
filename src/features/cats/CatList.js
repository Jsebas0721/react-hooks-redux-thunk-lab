import React from "react";

// write your CatList component here
function CatList({catPics}){


    return (
        <div>
            <ul>
            {catPics.map((cat)=> (
                <li key={cat.id}>
                    <img alt="cat" src={cat.url}/>
                </li>
            ))}
            </ul>
        </div>
    ); 
}


export default CatList;