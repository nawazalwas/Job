import React, { useEffect, useState } from 'react';
import './App.css';
import Container from './Container';
import Details from './Details';


function App() {
  const [loader,setLoader] = useState(false);
  const [data, setData] = useState();
  const [details,setDetails] = useState();
  useEffect(() => {
    fetch(
      "https://api.tvmaze.com/search/shows?q=all").then(res =>
        res.json()).then(data => {
          setData(data);
          setLoader(()=>true);
        }).catch((err) => {
          console.log(err);
        });

  }, [])

  function detailPageHandler(data){
    setDetails(<Details data={data} />);
  }

  return (
    <div className="app">
      {loader ? (details ? details : <div className='catalog'>
        {data && data.map((show, idx) => {
          return <Container key={idx} data={show} handler={detailPageHandler} />
        })}

      </div> ):<div>Loading...</div>}
    </div>
  );
}

export default App;
