import React,{useEffect,useState} from 'react'
import {getCountries} from '../../service'
import {FormControl,NativeSelect} from '@material-ui/core'
import style from './countryPicker.module.css'
    const CountryPicker=({handelCountryChange})=>{
        const [countries,setCountries]=useState([]);
        useEffect(()=>{
            const fetchCountries=async ()=>{
                setCountries(await getCountries() )
            }
            fetchCountries();
        },[setCountries])
      
        return(
           <FormControl className={style.formControl} >
               <NativeSelect defaultValue="" onChange={(e)=>handelCountryChange(e.target.value)}>
                <option value="">Global</option>
        {countries.map((country,i)=><option key={i} value={country}>{country}</option>)}
               </NativeSelect>
           </FormControl>
        )
    }
    export default CountryPicker