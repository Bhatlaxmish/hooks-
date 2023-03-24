import { Fragment, useRef,useState } from 'react';
import { Prompt } from 'react-router-dom';/* it checks while leaving the page condition is met otherwise send a warning */
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isenterd,setisenterd]=useState(false);
  const [textarea,settextarea]=useState('');

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

const formFocusHandler=()=>{
  console.log('focus');
  setisenterd(true);
}
const formsubmithandler=()=>{

  setisenterd(false);
}

  return (

    <Fragment>
      <Prompt  when={isenterd} message={()=>'are you sure to go'} />
    <Card>
      <form onFocus={formFocusHandler}  className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn' onClick={formsubmithandler}>Add Quote</button>
        </div>
      </form>
    </Card>
    </Fragment>
  );
};

export default QuoteForm;
