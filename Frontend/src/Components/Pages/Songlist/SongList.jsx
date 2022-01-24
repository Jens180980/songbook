import { useEffect, useState } from 'react'
import axios from 'axios'

const SongList = () => {
    const [songData, setSongData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/api/song')
        .then(res => {
            setSongData(res.data)
        })
        .catch (err => {
            console.log(err)
        })
    }, [])
    
     return (
         songData.map((item, index) => {
             return (
                <article key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.artist}</p>
                </article>
             )
         })  
    )
}
export default SongList