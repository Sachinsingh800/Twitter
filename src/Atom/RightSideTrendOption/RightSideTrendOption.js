import style from './RightSideTrendOption.module.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Fragment, useState } from 'react';


export default function RightSideTrendOption({data,customCss ,handleClickPopover}) {
    const [isPopverVisible , setIsPopoverVisible] = useState(false)
    const{
        Trender = '',
        tweets = 0,
        id
    } = data || {}
    
    function GetPoover () {
        return (
            <div className={style.popOver} 
                onClick = {() => handleClickPopover (id)}
            >
                <SentimentVeryDissatisfiedIcon/>
                <span onClick={()=> setIsPopoverVisible(false)}>I am not intrested !!</span>
            </div>
        )
    }
    return(
        <Fragment>

<div className={`${style.wrapper} ${customCss}`}>
            {/* <div className={style.trendingData}>
                <p className={style.trendingDataText}> Trending in india </p>
                <p className={style.trendingDataText}> {Trender}</p>
                <p className={style.trendingDataText}>{tweets}</p>
            </div> */}
        <MoreHorizIcon className={style.moreIcon} onClick = {() => setIsPopoverVisible(!isPopverVisible)}/>
    </div>
   { isPopverVisible && <GetPoover/>}

        </Fragment>
       

    )
    
}