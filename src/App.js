import React from 'react';
import Chart from './components/chart/chart'
import Cards from './components/cards/cards'
import CountryPicker from './components/countryPicker/countryPicker'
import {getData} from './service'
import covidImg from './imges/covid.png'
import style from './App.module.css'
class App extends React.Component{
  state={
    data:{},
    country:''
  }
  async componentDidMount(){
    let data= await getData();
    
    this.setState({data:data})
    
  }
  handelCountryChange= async (country)=>{
   const fetchedCountry= await getData(country);
   this.setState({data:fetchedCountry,country:country})
   console.log(fetchedCountry)
  }
  render(){
  
    let { data,country}=this.state
      return (
        <div className={style.container}>
          <img src={covidImg} className={style.img}/>
          <Cards data={data}/>
          <CountryPicker handelCountryChange={this.handelCountryChange}/>
          <Chart data={data} country={country}/>
    
        </div>
      );

  }
}

export default App;
