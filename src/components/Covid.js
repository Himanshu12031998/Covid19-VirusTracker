import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Covid.css'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const Covid = () => {
    const [data,setData]=useState('')

    const coviddata=()=>{
       

            axios('https://data.covid19india.org/data.json')   
              .then((res)=>{
                console.log(res.data.statewise[0]);   
                setData(res.data.statewise[0])      
                 })
                 .catch((error)=>{
                    console.log(error);
                 })

    }
    useEffect(()=>{
        coviddata()
    },[])

  return (
    <>
    <section>
    <h1 className='heading-live'> Live<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqv-cQdk1LL9-rsvHLVLKbgTi_DZ74FyhAOw&usqp=CAU'></img>   </h1>
    <h2 className='heading-title'>  Virus Tracker : Covid-19</h2>

        <div className='container'>
           
            <div className='card'>
                <div>
                    <h3 className='card-title'><span>OUR</span>COUNTRY</h3>
                    <h3 className='card-data'>INDIA</h3>
                    
                </div>
            </div>

            <div className='card'>
                <div>
                    <h3 className='card-title'><span>TOTAL</span>ACTIVE</h3>
                    <h3 className='card-data'>{data.active}</h3>
                </div>
            </div>

            <div className='card'>
                <div>
                    <h3 className='card-title'><span>TOTAL</span>CONFIRMED</h3>
                    <h3 className='card-data'>{data.confirmed}</h3>
                </div>
            </div>


            <div className='card'>
                <div>
                    <h3 className='card-title'><span>TOTAL</span>DEATH</h3>
                    <h3 className='card-data'>{data.deaths}</h3>
                </div>
            </div>


            <div className='card'>
                <div>
                    <h3 className='card-title'><span>TOTAL</span>RECOVERED</h3>
                    <h3 className='card-data'>{data.recovered}</h3>
                </div>
            </div>

            <div className='card'>
                <div>
                    <h3 className='card-title'><span>TOTAL</span>DELTACONFIRM</h3>
                    <h3 className='card-data'>{data.deltaconfirmed}</h3>
                </div>
            </div>

            <div className='card'>
                <div>
                    <h3 className='card-title'><span>TOTAL</span>DELTADEATHS</h3>
                    <h3 className='card-data'>{data.deltadeaths}</h3>
                </div>
            </div>

            <div className='card'>
                <div>
                    <h3 className='card-title'><span>LAST</span>UPDATE</h3>
                    <h3 className='card-data'>{data.lastupdatedtime}</h3>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Covid