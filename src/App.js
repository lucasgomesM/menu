import Menu from './Menu';
import './App.css';
import data from './data';
import React, {useState} from 'react';
function App() {
  const [category, setCategory] = useState(data);
  const filterCategory= (categories) => {

    if(categories === 'all'){
      setCategory(data);
      return;
    }
    const newCategory = data.filter((item) => item.category === categories);
    setCategory(newCategory);
  }
 
  
  
  return (    
    <> 
    <div className='App'>
      <h1>Our Menu</h1>
      <button className='btn' onClick={() => filterCategory('all')}>All</button>
      <button className='btn' onClick={() => {
       
        filterCategory('breakfast')
    }}>Breakfast</button>
      <button className='btn' onClick={() => {
        
        filterCategory('lunch')}}>Lunch</button>
      <button className='btn' onClick={() => {
       
        filterCategory('shakes')}}>Shakes</button>
      
      </div>
    <div className='menu'>
         {
     category.map((item) => {
      return <Menu key={item.id} title={item.title} category={item.category} price={item.price} img={item.img} desc={item.desc}/>
    })
    
  }
    </div>
   
  
    </>
    
   
    
  );
}

export default App;
