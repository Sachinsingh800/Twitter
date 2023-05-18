import React from 'react'
import style from './RightSideSecondCard.module.css'
import RightSideSecondCardButton from '../../../Atom/RightSIdeSecondCardButton/RightSideSecondCardButton'


function RightSideSecondCard() {
    const SecondCard=[
        {
            Card:<RightSideSecondCardButton/>
        },
        {
            Card:<RightSideSecondCardButton/>
        },
        {
            Card:<RightSideSecondCardButton/>
        },
     
    ]
  return (
    <div className={style.main}>
      <h2 >Who to Follow</h2>
      {
        SecondCard.map((card)=>
        <div className={style.card}>{card.Card}</div>
        )
      }
      <button className={style.button}>Show more </button>
    </div>
  )
}

export default RightSideSecondCard
