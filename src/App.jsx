
import { AppBar, Typography } from '@mui/material'
import './App.css'
import Carlist from './components/Carlist'

function App() {


  return (
    <>
      <AppBar position="static">
        <Typography variant="h5">
          Car Shop
        </Typography>
      </AppBar>
      <Carlist />
    </>
  )
}

export default App
