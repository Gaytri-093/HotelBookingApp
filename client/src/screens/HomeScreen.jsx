import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Room from '../components/Room';
import Loading from '../components/Loading';
import Error from '../components/Error';
function HomeScreen() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get("/api/rooms/getallrooms");
                const data = response.data;
                console.log(data);
                setRooms(data)
                setLoading(false);
            } catch (error) {
                setError(true);
                console.log(error);
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    

  return (
    <div className='container'>
     <div className="row justify-content-center mt-5 ">
     {loading ? (<Loading/>) : rooms.length > 1 ? (rooms.map(room=>{
        return <div className='col-md-9 mt-2'>
            <Room room={room}/>

        </div>

       })) : (<Error/>)}
     </div>
    </div>
  )
}

export default HomeScreen
