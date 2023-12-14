/* eslint-disable no-undef */

import Tours from './components/Tours'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import SinglePage from './components/SinglePage'
// import { useGlobalContext } from './context'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from './features/cartslice'




function App() {
  const dispatch = useDispatch();

const {amount,items} = useSelector((state)=> state.cart)
return(
      <>
      <h2>{amount}</h2>
      {items.map((item) => {
        return (
          <div key={item.id}>
          <h2>{item.title}</h2>
          </div>
        )
      })}
      <button onClick={()=>dispatch(clearCart())}>clear</button>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tours' element={<Tours />}/>
          <Route path='/single/:id' element={<SinglePage />}/>
        </Routes>
      
      </>
    )
  }
 

export default App
