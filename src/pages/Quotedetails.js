


import { useRouteMatch } from 'react-router-dom';/* crate url from before   */
import React from 'react'
import { useParams,Route,Link } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import { Fragment } from 'react';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import { useEffect } from 'react';

import LoadingSpinner from '../components/UI/LoadingSpinner';
import NOtfound from '../pages/NOtfound'






const data=[
  {id:'product 1',auther:'max',text:'learning react is fun'},
  {id:'q2',auther:'maxio',text:'learning reac fun'}

]



export default function Quotedetails() {

const {sendRequest,status,data:loadedquotes ,error}=useHttp(getSingleQuote,true);
const match=useRouteMatch();
    const params=useParams();


    const {quoteid}=params;
useEffect(()=>{
sendRequest(quoteid);
},[sendRequest,quoteid]);

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
console.log(match);

  const quote=data.find(quotes=>quotes.id===params.quoteId);

if(!loadedquotes.text)
{
  return <p>no quote found</p>
}








  return (
    <Fragment>
      <HighlightedQuote text={loadedquotes.text} auther={loadedquotes.auther} />

      <Route  path={match.path}/* path={`quotes/${params.quoteId}` }  */exact>
 <div className='centered'>

<Link  to={`${match.path}/comments`}/* to={`quotes/${params.quoteId}/comments`} */>load comments</Link>
      </div>
      </Route>
     
      <Route  path={`${match.path}/comments`}/* path={`/quotes/${params.quoteId}/comments`} */>
<Comments/>
      </Route >
      
    </Fragment>
  )






}
