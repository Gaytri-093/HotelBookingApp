import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';

function BookingScreen({ match }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState();
  const {roomid} = useParams()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post("/api/rooms/getroombyid", { roomid });
        const data = response.data;
        console.log(data);
        setRoom(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, [roomid]);

  return (
    <div className='mt-5 mx-5'>
    {loading ? (<Loading/>) : room ? (<div>
        <div className="row justify-content-center mt-5 divshadow">
            <div className="col-md-6">
                <h1>{room.name}</h1>
                <img src={room.imageUrls[0]} className='bigimg'/>


            </div>
            <div className="col-md-6" style={{textAlign:"right"}}>
                <div>
                <h1>Booking Details</h1>
                <hr />
                <b>
                <p>Name : </p>
                <p>From Date : </p>
                <p>To Date: </p>
                <p>Max Count : {room.maxCount}</p>
                </b>
                </div>
                <div style={{textAlign:"right"}}>
                    <b><h1>Amount</h1>
                    <hr />
                    <p>Total Days : </p>
                    <p>Rent Per Day : {room.rentPerDay}</p>
                    <p>Total Amount: </p></b>

                </div>
                <div style={{float:"right"}}>
                    <button className='btn btn-primary'>Pay Now</button>
                </div>
            

            </div>
        </div>
        
        </div>) : (<Error/>) }
    </div>
  );
}

export default BookingScreen;
