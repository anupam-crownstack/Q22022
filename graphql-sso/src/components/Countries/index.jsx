import { useState, useEffect } from "react";
import fetchQuery from "../../utils/fetchQuery";
import { getCountries, getContinents } from "../../schemas";

const CountriesByContinent = () => {
  const [continents, setContinents] = useState([]);
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    (async () => {
      const [error, data] = await fetchQuery(getContinents);
      if (!error) setContinents(data.data.continents);
      else setErrorMessage(data);
    })();
  }, []);

  const handleContientChange = (e) => {
    (async () => {
      const [error, data] = await fetchQuery(getCountries, {
        continentCode: e.target.value,
      });
      if (!error) setCountries(data.data.continent.countries);
    })();
  };

  return (
    <>
      <main>
        <h2>Countries By Contient</h2>

        <div>
          <select onChange={handleContientChange}>
            <option selected hidden>
              Select a contient
            </option>
            {continents?.map((item) => (
              <option key={item.code} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {countries.length > 0 ? (
          <ul>
            {countries.map((item) => (
              <li key={item.code}>{item.name}</li>
            ))}
          </ul>
        ) : null}
      </main>
    </>
  );
};

export default CountriesByContinent;
