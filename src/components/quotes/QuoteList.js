import { Fragment } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import { useHistory ,useLocation} from 'react-router-dom';/* uselocation information about current location */
const QuoteList = (props) => {


const history=useHistory();
const location=useLocation();
const queryparams=new URLSearchParams(location.search);/* its a  default builtin browser  */

const isSortingAscending=queryparams.get('sort')==='asc';




  const changesortinghandler=()=>{


/* history.push('/quotes?sort='+(isSortingAscending?'desc':'asc'))  or*//* /quotes?anyname=anyname */
history.push({
  pathname:location.pathname,
search:`?sort=${(isSortingAscending?'desc':'asc')}`
});
  };
  return (
    <Fragment>
      <div className={classes.sorting} onClick={changesortinghandler}>
        <button>sort {isSortingAscending?'decending':'asending'}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
