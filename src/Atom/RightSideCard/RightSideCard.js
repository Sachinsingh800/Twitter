import React, { useEffect, useState } from 'react'
import style from './RightSideCard.module.css'
import TrendOption from '../TrendOption/TrendOption'
import RightSideTrendOption from '../RightSideTrendOption/RightSideTrendOption'


function RightSideCard() {
 const [newData, setNewData]=useState([])
  const [data ,setData] =useState(

     [
      {
        id:0,
      name:"Sport-Trending",
      trends:"#AlNassr",
      Link:"Trending with #PSGRCSA",
      isNotInterested:true,
    },
      {
        id:1,
      name:"Trending in india",
      trends:"#Bts",
      Link:"33.k tweets",
      isNotInterested:false,
    },
      {
        id:2,
      name:"Trending in india",
      trends:"#BCCI",
      Link:"11.2k tweets",
      isNotInterested:false,
    },
      {
        id:3,
      name:"indian Premier league",
      trends:"#Ishan Kishan",
      Link:"23k tweets ",
      isNotInterested:false,
    },
  
  ]
  )
  //  console.table(data)
  // localStorage.setItem("trendData",JSON.stringify(data)) 


   const removeData=(id)=>{

    setData((data)=>data.filter((trend)=>trend.id !==id))
    localStorage.setItem("trendData",JSON.stringify(data)) 

  }

useEffect(()=>{
 const TrendData=JSON.parse(localStorage.getItem('trendData'))

 if(TrendData === null || TrendData.length === 0){
   setNewData(data);
  }else{
    setNewData(TrendData)
  }
},[data])

  return (
    <div className={style.container}>
       <h2>what's happening.. ??</h2>
      {
        newData?.map((elem, id) =>
        <> 
        <div key={id}  className={style.main}>
          <div>     
                          <div className={style.para}>{elem.name}</div>
                        <div className={style.trends}>{elem.trends}</div>
                        <div className={style.para}>{elem.Link}</div>    
          </div>
                        <div className={style.option}>{elem.option}</div>     
                        <div><TrendOption  handleClicked={()=>removeData(elem.id)} /> </div>
                        {/* <RightSideTrendOption/> */}
                         
        </div>

        
        </>
        )
      }
   
    </div>
  )
}

export default RightSideCard

