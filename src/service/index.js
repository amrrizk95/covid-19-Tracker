import axios from 'axios'
const url="https://covid19.mathdro.id/api"

export  const getData=async(country)=>{
    let changeUrl=url;
    if(country){
        changeUrl=`${url}/countries/${country}`
    }
    try {
        const {data}= await axios.get(changeUrl)
        const usedData={
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate
        }
        return usedData;
    } catch (error) {
        console.log(error)
    }
}

export const getDailyData=async ()=>{
    try {
      const {data}= await axios.get(`${url}/daily`)
      const Data=data.map((dailyData)=>({
          confirmed:dailyData.confirmed.total,
          deaths:dailyData.deaths.total,
          date:dailyData.reportDate
      }));
        return Data;
    } catch (error) {
        
    }
}

export const getCountries=async ()=>{
    try {
        const {data:{countries}}= await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name) 
    } catch (error) {
        console.log(error)
    }
}
