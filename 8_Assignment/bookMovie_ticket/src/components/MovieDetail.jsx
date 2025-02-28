import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { useMovie } from '../context/MovieContext';
import { useNavigate } from 'react-router-dom'


const MovieDetail = () => {
    const { selectedMovie } = useMovie()
    const navigate = useNavigate()
    if (!selectedMovie) {
        return (
            <div className='flex justify-between items-center w-200 ml-20'>
                <h2 className="text-2xl text-gray-300 text-center w-full py-51 px-2">No movie selected Please go to home page</h2>
                <button className='w-30 h-10' onClick={()=>{navigate("/")}}>Back</button>
            </div>
        )

    }

    const BookTicket = () => {
        navigate("/tickets-detail")
    }
   
    return (
        <div className="bg-gradient-to-b from-[#082134] to-[#0c1014] w-screen min-h-screen flex justify-around items-start text-white p-10 mt-[-40px]">

            {/* ✅ Flexbox use kiya for centering */}
            <div className="w-1/2 h-98 flex flex-col items-start space-y-2 p-4 border rounded-lg shadow-md">
                <p className="w-full h-auto text-2xl font-semibold text-white">{selectedMovie.title}</p>
                <p className="w-full h-auto text-2xl font-semibold text-gray-400 mt-5">{selectedMovie.desc}</p>
                <p className="text-white mt-10" style={{ minHeight: "20px" }}>Cast: <span className="font-medium">{selectedMovie.cast.join(", ")}</span></p>
                <button style={{ backgroundColor: "purple" }} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-15" onClick={BookTicket}>
                    Book Ticket Now
                </button>
            </div>
            <div
                className="p-4 rounded-lg shadow-lg w-1/ flex justify-center border border-lg">
                <img src={selectedMovie.image} alt={selectedMovie.title} className="w-[360px] h-[360px] object-contain rounded-md" />

            </div>
        </div>
    );
}

export default MovieDetail