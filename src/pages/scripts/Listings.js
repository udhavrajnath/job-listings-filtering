import {React,useState} from 'react'
import '../styles/Listings.css'
import testImg from './images/bg-header-desktop.svg'
import ImageBootstrap from 'react-bootstrap/Image'
import data from '../../Data/data.json'
import logo1 from './images/photosnap.svg'
import logo2 from './images/manage.svg'
import logo3 from './images/account.svg'
import logo4 from './images/myhome.svg'
import logo5 from './images/loop-studios.svg'
import logo6 from './images/faceit.svg'
import logo7 from './images/shortly.svg'
import logo8 from './images/insure.svg'
import logo9 from './images/eyecam-co.svg'
import logo10 from './images/the-air-filter-company.svg'



function Listings() {
    let jobs=data.map(i=>
        <div key={i.id} className='jobsContainer'>
            <div className='companyLogo'><img src={(i.id==1)?logo1:(i.id==2)?logo2:(i.id==3)?logo3:(i.id==4)?logo4:(i.id==5)?logo5:(i.id==6)?logo6:(i.id==7)?logo7:(i.id==8)?logo8:(i.id==9)?logo9:logo10} alt='company logo'/></div>
            <div className='jobDesc'>
                <div className='jobtitle'>
                    <div id='compName'>{i.company}</div>
                    {(i.new==true)&&<div className='New'>NEW!</div>}
                    {(i.featured==true)&&<div className='featured'>FEATURED</div>}
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
    
    function getLogo(obj){
        let Logo=obj.logo;
        return Logo
    }
    
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
        <div className='IndivSelection'>
            <div className='option'>{i}</div>
            <button value={i} onClick={(e)=>RemoveFromSelection(e)}>X</button>
        </div>
        )

    let FilteredjobList=data.filter(i=>optSlected.every(elem=>containAll(i).includes(elem)));
    let RenderJobsFiltered=FilteredjobList.map(i=>
        <div key={i.id} className='jobsContainer'>
            <div className='companyLogo'><img src={(i.id==1)?logo1:(i.id==2)?logo2:(i.id==3)?logo3:(i.id==4)?logo4:(i.id==5)?logo5:(i.id==6)?logo6:(i.id==7)?logo7:(i.id==8)?logo8:(i.id==9)?logo9:logo10} alt='company logo'/></div>
            <div className='jobDesc'>
                <div className='jobtitle'>
                    <div id='compName'>{i.company}</div>
                    {(i.new==true)&&<div className='New'>NEW!</div>}
                    {(i.featured==true)&&<div className='featured'>FEATURED</div>}
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
  return (
    <div className='container-fluid'>
        <div className='Listings'>
            <div className='topbarImg'>
                <ImageBootstrap id='image' fluid='true' src={testImg}/>
            </div>
            <div className='inputSection'><div className={(InputTag.length!=0)?'InputsectionContainer':''}>{InputTag}</div></div>
            <div className='jobslist'>
                <div className='jobsRendered'>{(optSlected.length==0)?jobs:RenderJobsFiltered}</div>
            </div>
        </div>
    </div>
    
  )
}

export default Listings