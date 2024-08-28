import {useState} from "react";
import axios from "axios";
import Checkbox from "../Checkbox";

function Form() {
  const initialState =  {
    name: '',
    phone: '',
    check: false
  }
  
  const [post, setPost] = useState(initialState)
  const [warning, setWarning] = useState(false)

  const handleChange = (e) => {
    setPost({...post, check: e})
  }

  const handleInputClick = (e) => {
    if (e.target.value !== '') return;

    e.target.value = '+7';
  }

  const handleInput = async e => {
    setPost({...post, [e.target.name]: e.target.value})
  }

  const handleCheckReset = () => {
    
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (post.name === '' || (post.phone === '' || post.phone === '+7')) {
      setWarning(true)
      return;
    }

    axios.post('http://localhost:8000/posts', post)
    .then(response => console.log(response.data))
    .catch(e => console.log(e));

    handleCheckReset()
    setPost(initialState)
  }

  return (
    <div className="mainContainer signupContainer">
        <div className="queryContainer">
          <form onSubmit={handleSubmit} className="querySection alignLeftPadded">
            <h2>Записаться на экскурсию</h2>

            <input className="queryInput" type="text" name="name" placeholder="Имя" value={post.name} onChange={handleInput}/>
            <input className="queryInput" type="text" name="phone" placeholder="Телефон" value={post.phone} onChange={handleInput} onFocus={handleInputClick}/>

            <Checkbox onChange={handleChange} changeToFalse={handleCheckReset}>
              Даю согласие на <span>обработку персональных данных</span>
            </Checkbox>

            <button className="query">Оставить заявку</button>
          </form>

          <section className="alignRightPadded querySection1">
            <h2>Контакты</h2>

            <span className="phoneNumber">+7 (812) 210-42-42</span>

            <p>Москва, ул. Климашкина, 16</p>
            <p>Пн-Вс: с 9:00 до 20:00</p>
          </section>
        </div>
    </div>
  );
};

export default Form;