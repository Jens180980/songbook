import { apiFetch } from '../../Partials/helpers'
import { useEffect, useState } from 'react'
import axios from 'axios'

const SongList = async () => {


    useEffect(() => {
        axios.get('http://localhost:4040/api/song')
        .then(res => {
            console.log(res)
        })
        .catch (err => {
            console.log(err)
        })
    }, [])
    
 
    return (
        <p>songlist</p>
    )
}
export default SongList