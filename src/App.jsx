import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Create from "./Create"
import Update from "./Update"



function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/create" element={<Create></Create>}></Route>
      <Route path="/edit/:id" element={<Update></Update>}></Route>
    </Routes>
 
    </BrowserRouter>
  )
}
export default App
  