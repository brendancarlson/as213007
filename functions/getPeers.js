/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */
import React, { useState, useEffect } from "react";

const GetPeers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // get data from RIPE
    fetch(
      `https://stat.ripe.net/data/asn-neighbours/data.json?resource=AS213007`
    )
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        setData(resultData.data.neighbours);
      }); // set data for the number of stars
  }, []);


  return (
    <div>
      <p>{data.map(neighbour => <a href={`https://bgp.he.net/AS${neighbour.asn}`}>AS{neighbour.asn}</a>)}</p>
    </div>
  );
};

export default GetPeers;
