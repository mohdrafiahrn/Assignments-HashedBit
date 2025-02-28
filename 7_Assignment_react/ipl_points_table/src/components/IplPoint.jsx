import React from 'react'
import { useState, useEffect } from "react"

function IplPoint() {
    const [data, setData] = useState([])

   useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
    .then((response) => {
        return response.json();
    })
    .then(data => {
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setData(sortedData);
        console.log(data)
    })
    .catch(err => console.error(err));

   },[])
    


    return (
        <div class="w-full">
        <h1>IPL Season 2022 Points Table</h1>
        <table class="min-w-full border border-gray-300">
            <thead class="bg-gray-200">
                <tr>
                    <th class="border border-gray-400 px-4 py-2">No.</th>
                    <th class="border border-gray-400 px-4 py-2">Team</th>
                    <th class="border border-gray-400 px-4 py-2">Matches</th>
                    <th class="border border-gray-400 px-4 py-2">Won</th>
                    <th class="border border-gray-400 px-4 py-2">Loss</th>
                    <th class="border border-gray-400 px-4 py-2">Tied</th>
                    <th class="border border-gray-400 px-4 py-2">NRR</th>
                    <th class="border border-gray-400 px-4 py-2">Points</th>
                </tr>
            </thead>
            <tbody>
                {data.map((dt, index)=>(
                     <tr class="bg-white" key={index}> 
                     <td class="border border-gray-300 px-4 py-2">{dt.No}</td>
                     <td class="border border-gray-300 px-4 py-2">{dt.Team}</td>
                     <td class="border border-gray-300 px-4 py-2">{dt.Matches}</td>
                     <td class="border border-gray-300 px-4 py-2">{dt.Won}</td>
                     <td class="border border-gray-300 px-4 py-2">{dt.Lost}</td>
                     <td class="border border-gray-300 px-4 py-2">{dt.Tied}</td>
                     <td class="border border-gray-300 px-4 py-2">{dt.NRR}</td>
                     <td class="border border-gray-300 px-4 py-2">{dt.Points}</td>
                 </tr>
                ))}
               
               
            </tbody>
        </table>
        </div>


    )
}

export default IplPoint