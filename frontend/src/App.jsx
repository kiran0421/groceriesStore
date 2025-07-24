import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { use } from 'react'

function App() {
  const [products, setproducts] = useState([])

  useEffect(()=>{
    axios.get('/api/products')
    .then((response)=>{
      setproducts(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{
      console.log('done')
    })
  }, [])
  return (
    <>
      <p>{products.map((product, index) => (
        <div key={index}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}</p>
    </>
  )
}

export default App
