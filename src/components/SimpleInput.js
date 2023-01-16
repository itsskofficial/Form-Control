import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameValidity,setEnteredNameValidity] = useState(true)
  const nameInputRef = useRef()

  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  if (enteredName.trim().length === 0) {
    setEnteredNameValidity(false)
    return
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    console.log(enteredName)
    
    const inputValue = nameInputRef.current.value
    console.log(inputValue)

    setEnteredName('')
  }

  const 

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} ref={nameInputRef} type='text' id='name' onChange={inputChangeHandler}/>
      </div>
      {!enteredNameValidity && <p>Name cannot be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
