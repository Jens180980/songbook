// General imports
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Partials imports
import Header from './Components/Partials/Header/Header.jsx'
import Footer from './Components/Partials/Footer/Footer.jsx'
import Main from './Components/Partials/Main/Main.jsx'

// Pages imports
import ArtistList from './Components/Pages/Artistlist/ArtistList.jsx'
import SongList from './Components/Pages/Songlist/SongList.jsx'
import Home from './Components/Pages/Home/Home.jsx'
import Upload from './Components/Pages/Upload/Upload.jsx'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main>
            <Routes>
              <Route index element={<Home />} />
              <Route path='/songlist' element={<SongList />} />
              <Route path='/artistlist' element={<ArtistList />} />
              <Route path='/upload' element={<Upload />} />
            </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
