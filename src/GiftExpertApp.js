import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   //setCategories([...categories, 'HunterXHunter']);
  //   setCategories( cats => [...cats, 'HunterXHunter']);
  // }

  return (
    <div>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories={ setCategories }></AddCategory>
        <hr/>
        
        <ol>
          {
            categories.map( item =>  
                <GifGrid 
                  key={ item }
                  category={item}
                />
            )
          }
        </ol>
    </div>
  )
}



