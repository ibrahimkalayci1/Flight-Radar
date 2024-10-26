import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import Map from './pages/Map'
import List from './pages/List'
import { useDispatch } from 'react-redux'
import { getFlights } from './redux/actions';

const App = () => {
  const [isMapView, setIsMapView] = useState(true);
  const [detailId, setDetailId] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());

   // setInterval(() => { //!web sochet kopyası her 3 saniyede bir canlı sonuç alıyoruz
     // dispatch(getFlights());
   // }, 8000 )
  },[] );
  
  return (
    <div><Header/>

    <div className='buttons'>
      <button className= {isMapView ? "active" : ""} onClick={() => setIsMapView(true)}>Harita Görünümü</button>
      <button  className={isMapView ? "" : "active"}  onClick={() => setIsMapView(false)}>Liste Görünümü</button>
    </div>

    {isMapView ? (
       <Map setDetailId={setDetailId}/>
        ):( 
        <List  setDetailId={setDetailId} />)}
    
    {detailId  && ( <Modal detailId={detailId} close={() => setDetailId
      (null)} />)}
    </div>
  )
}

export default App