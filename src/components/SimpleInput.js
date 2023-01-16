import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [formValidity,setFormValidity] = useState(false)
  let enteredNameValidity = !enteredName.trim().length === 0 && enteredNameTouched ? true : false
  
    fenteredNameValidity ? setFormValidity(true) : setFormValidity(false)
  

  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const inputBlurHandler = (event) => {
    setEnteredNameTouched(true)
  }
  
  const formSubmitHandler = (event) => {
    event.preventDefault()
    setEnteredNameTouched(true)

    if (!enteredNameValidity) {
      return
    }

    setEnteredNameTouched(false)
    setEnteredName('')
  }

  const nameInputClass=enteredNameValidity ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onBlur={inputBlurHandler} onChange={inputChangeHandler}/>
      </div>
      {!enteredNameValidity && <p>Name cannot be empty</p>}
      <div className="form-actions">
        <button disabled={!formValidity}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
