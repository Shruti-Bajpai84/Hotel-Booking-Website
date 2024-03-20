import './App.css'
import HotelCard from './Components/HotelCard'
import Data from '../Data.json'
import Form from './Components/Form.jsx'
import "./App.css";
// import Navbar from './Components/Navbar.jsx'

 function App(){
    return(
        <div>
             <h1>Shruti...Hotel</h1>
            {/* <Navbar/> */}
            {/* <Calender/> */}
           
           {Data.map((hoteldetails,index)=>{
            return(
                <HotelCard hoteldetails={hoteldetails.hotelName} price={hoteldetails.price}address={hoteldetails.address} image = {hoteldetails.img} key={index} />
               
            )    
            })}
            <Form/>
        </div>
    )
 }
 export default App