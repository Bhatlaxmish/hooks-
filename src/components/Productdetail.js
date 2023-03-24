import React from 'react'
import {
  useParams,
  Route,
} from 'react-router-dom' /* its a hook used to extract specific data */
export default function Productdetail() {
  const params = useParams()
  return (
    <div>
      <p>{params.quoteId}</p>
      <ul>
        <li>product 1</li>
        <li>product 2</li>
        <li>product 3</li>
      </ul>
    </div>
  )
}
