import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Character from './components/Character';


const App = () => {
  const [data, setData] = useState({hey: "hey"});
  const [people, setPeople] = useState([]);
  const [nextPage, setNextPage] = useState('https://swapi.py4e.com/api/people/?page=2')


useEffect(() => {
  const fetchData = () => {
    axios.get('https://swapi.py4e.com/api/')
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  }

  fetchData();
}, [])

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
        setNextPage(data.next);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  fetchData();
}, [])

  return (
    <div className="App">
      <Header />
      <Character props={data} people={people} nextPage={nextPage} />
    </div>
  );
}

export default App;
