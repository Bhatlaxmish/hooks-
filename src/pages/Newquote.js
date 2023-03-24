import React from 'react'
import { useEffect } from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';/* allows to change page history */

import useHttp from '../hooks/use-http'
import {addQuote} from '../lib/api';
export default function Newquote() {

const {sendRequest,status}=useHttp(addQuote);
const history=useHistory();
useEffect(()=>{
if(status=='completed')
{
  history.push('/quotes');
}
},[status,history]);

  const addquoteHandler=(quotedata)=>{
sendRequest(quotedata);
console.log(quotedata);
/* history.push('/quotes'); *//* push allows to go from one page to another and also come back 
                             if use  replace cant come back */

}
  return (
    <div>
     <QuoteForm isLoading={status==='pending'} onAddQuote={addquoteHandler}/>
      
    </div>
  )
}
