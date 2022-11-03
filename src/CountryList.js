import React, { useState, useEffect }  from "react";
import axios from "axios";
import "./styles.css";

function CountryList(props) {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios
        .get("https://restcountries.com/v2/all")
        .then(response => setCountries(response.data))
        .catch(error => console.log({error}));
    }, []);


    return countries

    
    .filter(country => country.name.toLowerCase().includes(props.search.toLowerCase()))
    .map(country => {
        return (
            <div key={country.name} className="country">
                <ul>
                    <ol>
                        <div className="images">
                            <img src={country.flag} alt={country.name} />
                        </div>
                    </ol>
                    <ol>
                      <h3> {country.name} </h3>
                    </ol>
                    <ol>
                         <p> {country.capital}</p>
                    </ol>
                </ul>
            </div>
        );
    });
}



export default CountryList;
