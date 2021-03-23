import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

  // const categories = ['One Puch', 'Samurai X', 'Dragon Ball'];
  // const [categories, setCategories] = useState(['One Puch', 'Samurai X', 'Dragon Ball']);
  const [categories, setCategories] = useState(['']);

  /*
  const handleAdd = () => {

    // setCategories([...categories, 'HunterXHunter']);
    setCategories( cats => [...cats, 'HunterXHunter']);

  }
  */

  return (

    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {
        categories.map(category =>
          <GifGrid
            category={category}
            key={category}
          />
        )
      }

      {/* <button onClick={ handleAdd } >Agregar</button> */}

      {/* <ol>
        {
          // categories.map(category => {
          //   return <li key={category}>{category}</li>
          // })
          
          // categories.map(category => 
          //   <GifGrid
          //   category={category}
          //   key={category} 
          //   />
          // )
        }
        </ol> */}
    </>
  );

}

export default GifExpertApp;
