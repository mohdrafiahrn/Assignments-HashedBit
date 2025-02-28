import React, { useState } from "react";
import { useMovie } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import GenerateTicket from "./GenerateTicket";


const TicketDetail = () => {
  const { selectedMovie } = useMovie();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleClearField = () => {
    setPhoneNumber("");
    setMsg("");
  }


  const handleBooking = () => {
    if (phoneNumber === "") {
      setMsg("Please Enter Your Phone number")
    }
    else if (!/^\d{10}$/.test(phoneNumber)) {
      setMsg("Please enter a valid phone number")
    }
    else {
      Swal.fire({
        title: "Ticket Booked Successfully",
        html: `<span class="custom-text">Ticket booked Successfully ✔ <br> ${selectedMovie.title}</span>`,
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Download ticket",
        cancelButtonText: "Close",

      }).then((result) => {
        if (result.isConfirmed) {
          GenerateTicket(selectedMovie.title, currentDate, phoneNumber);
        }
      })
      // navigate("/"); 
    }
  };
  const backPage = () =>{
    navigate("/movie/:id")
  }
  if (!selectedMovie) {
    return (
        <div className='flex justify-between items-center w-200 ml-20'>
            <h2 className="text-2xl text-gray-300 text-center w-full py-51 px-2">No movie selected Please go to home page</h2>
            <button className='w-30 h-10' onClick={()=>{navigate("/")}}>Back</button>
        </div>
    )

}

  const currentDate = new Date().toDateString();

  return (
    <div>
      <div className="bg-gradient-to-b from-[#082134] to-[#0c1014] p-10 rounded-lg shadow-lg w-1/ flex justify-center">
        <div className="bg-gray-400 w-75 h-90 flex flex-col justify-start items-center text-white p-5 rounded-lg border border-lg">
          <div className="flex justify-between w-full border-b-4 border-gray-500">
            <img src="/icon/1arrow.png" className="hover:scale-110 cursor-pointer" onClick={backPage}/>
            <span className="text-lg text-black font-bold">
              Ticket Details
            </span>
          </div>
          
          <div className="w-full text-black flex justify-start flex-col">
            <div className="w-full flex justify-between items-center mt-5">
              <p>Movie</p>
              <p>{selectedMovie.title}</p>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <p>Date</p>
              <p>{currentDate}</p>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <p>Show Time</p>
              <p>7:30 PM</p>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <p>Screen Number</p>
              <p>2</p>
            </div>
          </div>

          <input
            type="text"
            placeholder="Enter Phone Number"
            className="bg-gray-700 mt-4 p-2 text-white rounded w-full"
            value={phoneNumber}
            maxLength={10}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <p className="text-[17px] text-red-700 text-start" style={{ minHeight: "20px" }}>{msg}</p>
          <div className="w-full flex justify-between mt-9">
            <button
              style={{ backgroundColor: "green" }}
              className="text-black px-4 py-2 rounded hover:bg-green-600"
              onClick={handleBooking}
            >
              Confirm Booking
            </button>
            <button
              style={{ backgroundColor: "red" }}
              className="text-black px-4 py-2 rounded hover:bg-green-600"
              onClick={handleClearField}
            >
              Clear
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default TicketDetail;
