import React from 'react'
import useHttp from '../hooks/use-http';
import QuoteList from '../components/quotes/QuoteList';
import { getAllQuotes } from '../lib/api';
import { useEffect } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NOtfound from './NOtfound';





const data=[
  {id:'product 1',auther:'max',text:'learning react is fun'},
  {id:'q2',auther:'maxio',text:'learning reac fun'}

]


export default function Allquotes() {


const {sendRequest,status,data:loadedquotes,error}=useHttp(getAllQuotes,true);

useEffect(()=>{
sendRequest();
},[sendRequest]);


if(status==='completed'&&(!loadedquotes ||loadedquotes.length===0))
{
return <NOtfound></NOtfound>;
}
if(status==='pending')
{
  return (
    <div className='centered'>
      <LoadingSpinner/>
    </div>
  )
}

if(error)
{
  return <p className='centered focused'>{error}</p>
}



  return (
    <div>
     <QuoteList quotes={loadedquotes}/>
    </div>
  )





}
