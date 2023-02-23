import {React,useState} from 'react'
import '../styles/Listings.css'
import testImg from '../../images/bg-header-desktop.svg'
import ImageBootstrap from 'react-bootstrap/Image'
import data from '../../Data/data.json'


function Listings() {
    let jobs=data.map(i=>
        <div key={i.id} className='jobsContainer'>
            {i.company}<br/>
            {i.tools.map(j=><div className='jobsoptions'><button value={j} onClick={(j)=>UpdateSelectionList(j.target.value)}>{j}</button></div>)}
        </div>
    )
    
    
    const [optSlected,setOptSelected]=useState([])

    function UpdateSelectionList(val){
        var tempArray=[...optSlected]
            if(tempArray.includes(val)===false){
            tempArray=[...tempArray,val]
            }     
        setOptSelected(tempArray)
        console.log(tempArray)
    }
    function RemoveFromSelection(e){
        var tempArray=[...optSlected]
        tempArray.splice(optSlected.indexOf(e.target.value),1)
        setOptSelected(tempArray)
    }

    let InputTag=optSlected.map(i=>
        <div>
            {i}
            <button value={i} onClick={(e)=>RemoveFromSelection(e)}>X</button>
        </div>
        )
  return (
    <div className='container-fluid'>
        <div className='Listings'>
            <div className='topbarImg'>
                <ImageBootstrap id='image' fluid='true' src={testImg}/>
                <div>{InputTag}</div>
            </div>
            <div className='jobslist'>
                <div className='jobsRendered'>{jobs}</div>
            </div>
        </div>
    </div>
    
  )
}

export default Listings