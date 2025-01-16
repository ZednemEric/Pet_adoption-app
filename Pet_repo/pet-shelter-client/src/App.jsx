import { useEffect, useState } from "react";
import "./styles.css";
import {Routes, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Pets from "./components/Pets";
import AdoptionForm from "./components/AdoptionForm";
import ApplicationInfo from "./components/ApplicationInfo";
import Footer from "./components/Footer";
import axios from "axios"

const GET_PETS_URL = "https://ge2lwyxvj9.execute-api.us-west-2.amazonaws.com/Prod/pets/";

function App() {
  useEffect(()=>{
    // get pets from api
    axios.get(GET_PETS_URL)
      .then(res => {
        console.log(res.data);
        setPets(res.data.pets);
      })
      .catch(err => console.log(err))
  },[])

  const [pets, setPets] = useState([]);

  return (
    <div className="App">
      <Header />

      {/* at the route /, the home compnent renders */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pets" element={<Pets pets={pets}/>} />
          <Route path="/adopt" element={<AdoptionForm pets={pets}/>} />
          <Route path="/application-info" element={<ApplicationInfo />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;