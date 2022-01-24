import { useState, useEffect } from 'react'
import axios from 'axios'

const ArtistList = props => {
    const [artistData, setArtistData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/api/artist')
        .then(res => {
            setArtistData(res.data)
        })
        .catch (err => {
            console.log(err)
        })
    }, [])
    
     return (
         artistData.map((item, index) => {
             return (
                <article key={index}>
                    <h3>{item.name}</h3>
                </article>
             )
         })  
    )
}
export default ArtistList