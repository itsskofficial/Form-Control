import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched,setEnteredNameTouched]=useState(false)
  const enteredNameValidity = !enteredName.trim().length === 0 && enteredNameTouched ? true : false
  
  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const inputBlurHandler = (event) => {
    setEnteredNameTouched(true)
  }

  setEnteredNameValidity(true)
  

  const formSubmitHandler = (event) => {
    event.preventDefault()
    setEnteredNameTouched(true)
    console.log(enteredName)

    setEnteredName('')
  }

  const nameInputClass=enteredNameValidity && enteredNameTouched ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onBlur={inputBlurHandler} onChange={inputChangeHandler}/>
      </div>
      {!enteredNameValidity && enteredNameTouched && <p>Name cannot be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
