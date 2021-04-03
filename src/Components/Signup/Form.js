const Form = (props) => {
  return (
    <form>
      <input type="text" htmlFor="username" placeholder="enter username" value={props.e.target.value}/>
      <input type="password" htmlFor="password" placeholder="enter password" value={props.e.target.value} />
      <button>Sign up</button>
    </form>
  );
};

export default Form;
