const SimpleInput = (props) => {
  const [enteredName,setEnteredName] = useState('')

  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmitHandler = (event) = {
    event.preventDefault()
    console.log(enteredName)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
