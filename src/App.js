import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [weatherData, setWeatherData] = useState([])
  // console.log(weatherData)
  let searchh = (e) => {
    
    e.preventDefault()
    
    let weatherin = e.target.weatherinput.value
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weatherin}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`)
      .then((ress) => {
        
        setWeatherData([...weatherData, ress.data])
      })
      .catch((error) => {
        console.log(error)
      })
      e.target.weatherinput.value = " "
  }
  return (
    <div className='w-[1200px]  mx-auto my-[50px]'>
      <div className=' w-[500px] mx-auto'>
        <form onSubmit={searchh}>
          <input type='search' name='weatherinput'  className='w-[80%] bg-[inherit] border-[3px] border-black rounded font-bold text-black p-1 px-2' autoFocus/>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 border-2 rounded ms-[5%] w-[15%] p-[5px]'>SEARCH</button>
        </form>
      </div>
      <div className='w-[100%] flex flex-wrap justify-center gap-[35px] my-[50px] '>

        {weatherData.length > 0 ? 
        
        weatherData.map((v, i) => {
          // console.log(v.weather)
          return(
          <div class="w-[22.8%] my-[30px] p-6 bg-[transparent] border-4 border-gray-200 rounded-lg shadow-[0px_0px_30px_15px_black] dark:bg-[transparent] dark:border-black">
            <img src={`https://api.openweathermap.org/img/w/${v.weather[0].icon}.png`} className='w-[30%] '/>
            <a href="#">
              <h5 class="my-5 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">{v.name}</h5>
            </a>
            <p class="mb-3 font-normal font-bold text-gray-500 dark:text-white">TEMPERATURE:- {v.main.temp}</p>
            <p class="mb-3 font-normal font-bold text-gray-500 dark:text-white">HUMIDITY:- {v.main.humidity}</p>
            <p class="mb-3 font-normal font-bold text-gray-500 dark:text-white">WIND SPEED:- {v.wind.speed}</p>
            <p class="mb-3 font-normal font-bold text-gray-500 dark:text-white">DESCRIPTION:- {v.weather[0].description}</p>
            {/* <a href="#" class="inline-flex font-medium items-center text-blue-600 hover:underline">
  See our guideline
  <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
  </svg>
</a> */}
          </div>)
          
          
        }):<h1 className='font-bold text-center text-white text-[64px] w-[100%]  '>NO DATA FOUND</h1>}




      </div>
    </div>
  );
}

export default App;
