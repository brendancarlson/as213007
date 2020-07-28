/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */
import React, { useState, useEffect } from "react";

const GetPrefixes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // get data from RIPE
    fetch(
      `https://stat.ripe.net/data/announced-prefixes/data.json?resource=AS213007`
    )
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        setData(resultData.data.prefixes);
      }); // set data for the number of stars
  }, []);


  return (
    <div>
      <p>{data.map(prefixes => prefixes.prefix)}</p>
    </div>
  );
};

export default GetPrefixes;
