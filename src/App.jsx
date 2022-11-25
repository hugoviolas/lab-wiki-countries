import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import cntries from './countries.json';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState(cntries);
  useEffect(() => {
    async function getCountries() {
      const { data } = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      data.sort((a, b) => {
        if (a.name.common < b.name.common) {
          return -1;
        } else if (a.name.common > b.name.common) {
          return 1;
        } else {
          return 0;
        }
      });
      setCountries(data);
    }
    getCountries();
  }, []);
  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path=":id"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
