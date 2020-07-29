/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */
import React, { useState, useEffect } from "react";
import { useColorMode } from "theme-ui"

const GetPeers = () => {
  const [data, setData] = useState([]);
  const [colorMode, setColorMode] = useColorMode()

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
      <p>{data.map(neighbour => <a className={colorMode === 'light' ? 'a-light' : 'a-dark'} href={`https://bgp.he.net/AS${neighbour.asn}`} alt={`AS${neighbour.asn} Link to BGP.HE.NET`} target="_blank">AS{neighbour.asn}</a>)}</p>
    </div>
  );
};

export default GetPeers;
