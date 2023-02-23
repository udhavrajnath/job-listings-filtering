import {React,useState} from 'react'
import '../styles/Listings.css'
import testImg from './images/bg-header-desktop.svg'
import ImageBootstrap from 'react-bootstrap/Image'
import data from '../../Data/data.json'


function Listings() {
    let jobs=data.map(i=>
        <div key={i.id} className='jobsContainer'>
            <div className='companyLogo'><img src={i.logo} alt='company logo'/></div>
            <div className='jobDesc'>
                <div className='jobtitle'>
                    <div>{i.company}</div>
                    {(i.new==true)&&<div>NEW!</div>}
                    {(i.featured==true)&&<div>FEATURED</div>}
                </div>
                <div className='jobPosition'>{i.position}</div>
                <div className='jobPostedDate'>
                    <div>{i.postedAt} </div>
                    <div><li>{i.contract}</li></div>
                    <div><li>{i.location}</li></div>
                </div>
            </div>
            <div className='jobCriteria'>{containAll(i).map(k=><button value={k} onClick={(e)=>UpdateSelectionList(e.target.value)}>{k}</button>)}</div>
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
    //function containAll withh combine each criteria from each job selection into an array--tools languages roles level
    function containAll(objectParam){
       
        let combinedAr=[]
        combinedAr.push(objectParam.role)
        combinedAr.push(objectParam.level)
        
        for(var j=0;j<objectParam.tools.length;j++){
            combinedAr.push(objectParam.tools[j])
        } 
        
        for(var l=0;l<objectParam.languages.length;l++){
            combinedAr.push(objectParam.languages[l])
        }
        console.log(combinedAr)
        return combinedAr
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