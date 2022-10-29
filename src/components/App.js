import React, {useState} from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {

  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  }
  
  return (
    <div id="main">
      <h4>Search</h4>  
      <div>
        <input type='text' id="search-input" onChange={onChange}/>
      </div>
      <div>
        <h4>Result</h4>
        <ul>
            {
                searchArray.filter((item) => {
                    const searchValue = value.toLowerCase();
                    const arrayItem = item.toLocaleLowerCase();
                    
                    return(
                        searchValue &&
                        item.includes(searchValue) &&
                        searchValue !== arrayItem
                    )
                })
                .map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
       
      </div>
    </div>
  )
}

export default App;
