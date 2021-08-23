import React from 'react';

const Card =({id , name , email}) =>{
    return(
        <div className=" tc bg-light-green dib br3 pa3 ma3 grow shadow-5">
        <img src={`https://robohash.org/${id}?set=set1&size=150x150 `} alt="robot" />
        <h2>{name}</h2>
        <p>{email}</p>
        </div>
    );
};

export default Card;