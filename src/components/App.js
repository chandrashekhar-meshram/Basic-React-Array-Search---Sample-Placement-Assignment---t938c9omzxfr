import React, {useState} from 'react';

const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  
  return (
    <div id="main">
      <h4>Search</h4>        

<input
        type="text"
        name="search"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <ul>
        {searchArray
          .filter((item) => item.match(new RegExp(searchValue, "i")))
          .map((item) => {
            return <li key={item}>{item} </li>
          })}
      </ul>
    </div>
  )
}

export default App;

// https://www.codingdeft.com/posts/react-filter/
