import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameValidity, setEnteredNameValidity] = useState(false)
  const [enteredNameTouched,setEnteredNameTouched]=useState(false)
  const nameInputRef = useRef()

  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  if (enteredName.trim().length === 0) {
    setEnteredNameValidity(false)
    return
  }

  setEnteredNameValidity(true)
  

  const formSubmitHandler = (event) => {
    event.preventDefault()
    setEnteredNameTouched(true)
    console.log(enteredName)
    
    const inputValue = nameInputRef.current.value
    console.log(inputValue)

    setEnteredName('')
  }

  const nameInputClass=enteredNameValidity && enteredNameTouched ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} ref={nameInputRef} type='text' id='name' onBlur={inputBlurHandler} onChange={inputChangeHandler}/>
      </div>
      {!enteredNameValidity && enteredNameTouched && <p>Name cannot be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
