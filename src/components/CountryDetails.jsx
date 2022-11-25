import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryDetails = ({ countries }) => {
  const params = useParams();
  const [country, setCountry] = useState(null);
  const id = params.id;
  //   const country = countries.filter((country) => country.alpha3Code === id);
  useEffect(() => {
    try {
      async function getCountry() {
        const { data } = await axios.get(
          ` https://ih-countries-api.herokuapp.com/countries/${id}`
        );
        setCountry(data);
      }
      getCountry();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  if (!country) {
    return <div>Loading...</div>;
  }
  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders &&
                  country.borders.map((border) => {
                    return (
                      <li key={border}>
                        <Link to={`/${border}`}>
                          {
                            countries.find(
                              (country) => country.alpha3Code === border
                            )?.name.common
                          }
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
