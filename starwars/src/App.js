import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Character from './components/Character';



const App = () => {
  const [data, setData] = useState({hey: "hey"});
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1)

  function add1ToPage(){
    if(page === 9) {
      return ;
    } else {
        setPage(page + 1);
    }
  }

  function skipToLast(){
    setPage(9);
  }

  function subtract1ToPage(){
    if(page === 1){
      return ;
    } else {
      setPage(page - 1);
    }
  }

useEffect(() => {
  const fetchData = () => {
    axios.get(`https://swapi.py4e.com/api/people/?page=${page}`)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  }

  fetchData();
}, [page])

useEffect(() => {
  const fetchData = () => {
    axios.get('https://swapi.py4e.com/api/people/')
      .then((response) => {
        console.log(response);
        setData(response.data);
        return response.data;
      })
      .then((data) => {
        setPeople(data.results);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  fetchData();
}, [])

  return (
    <div className="App">
      <Header add1ToPage={add1ToPage} skipToLast={skipToLast} subtract1ToPage={subtract1ToPage} />
      <Character props={data} people={people} />
    </div>
  );
}

export default App;
