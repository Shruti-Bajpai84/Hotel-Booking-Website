import { useEffect, useState } from "react";
import './App.css'
import Cards from './Components/HotelCard';
import Nev from './Components/Navbar';

function App() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/Data")
            .then((response) =>
                response.json()
            )
            .then((newData) => {
                //console.log(newData)
                return setData(newData)
            });
    },[])
    //console.log(data);
    return (
        <>
            <Nev />
            {data.map((hotel, index) => {
                return (
                    <Cards hotelName={hotel.hotelName}
                        image={hotel.img}
                        key={hotel.id}
                        address={hotel.address}
                        price={hotel.price}
                        defaultValue={hotel.rating}
                        hotelList = {data}
                        hotelId={hotel.id}
                        availability={hotel.availability}
                    />
                )
            })}
        </>
    )
}

export default App