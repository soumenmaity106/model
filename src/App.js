import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fatch_data_post,loadPost } from './actions/postAction'
function App() {
  const dispacth = useDispatch();
  const lofingdata = useSelector(state => state.loading)
  const actiondata = useSelector(state => state.post)
  console.log(actiondata)
  const eroorocurde = useSelector(state => state.error)
  useEffect(() => {
    dispacth(loadPost())
    dispacth(fatch_data_post())
  },[])
  return (
    <div className="App">
      {eroorocurde && (<h2>Something went wrong ...</h2>)}
      {lofingdata ? (<h1>Data is lodding......</h1>) : (
        <ul>
          {actiondata && actiondata.map(sigelpost => (
            <li key={sigelpost.id}>
              <h4>{sigelpost.title}</h4>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default App;
