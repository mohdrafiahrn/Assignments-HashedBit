import { createContext, useContext, useState, useEffect } from 'react'

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [bookingDetails, setBookingDetails] = useState(null);

    useEffect(() => {
        fetch("/data/data.json")
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error("Error fetching data", error));

    }, []);

    return (
        <MovieContext.Provider value={{
            movies,
            selectedMovie,
            setSelectedMovie,
            bookingDetails,
            setBookingDetails
        }}>
            {children}
        </MovieContext.Provider>
    )
};

export const useMovie = () => useContext(MovieContext);