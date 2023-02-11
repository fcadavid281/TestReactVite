import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

const [state, setState] = useState({
  firstName:'',
  lastName:'',
  addrest:'',
  phone:0,
  message:'',
  email:''
})

const {firstName, lastName, addrest, phone,email}= state;
const handleOnchange=({target})=>{
  let name = target.name;
  let value=target.value;
  setState({
    ...state,
    [name]:value
  });
}

const handleAddEmpleados=e=>{


}

  return (
    <section className="hero is-success is-fullheight">
  <div className="hero-head">
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span className="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </header>
  </div>
  <div className="hero-body">
    <div className="container has-text-centered">
       <div className='card'>
             <div className='card-header'> 
               <div className='card-header-title'>
                <div className='is-center' >
                      <label htmlFor="title" className='label is-big'>Formulario</label>
                </div>
               </div>
             </div>
              <div className='card-content'>
                    <div className='field is-horizontal'>
                      <div className='field-label is-normal'>
                        <label htmlFor="" className='label'>First Name:</label>
                      </div>
                      <div className='field-body'>
                        <div  className='field'>
                          <p className='control'>
                            <input 
                              type="text" name="firstName" id="firstName" 
                              className='input'
                              value={firstName}
                              onChange={e=> handleOnchange(e)}
                            />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='field is-horizontal'>
                      <div className='field-label is-normal'>
                        <label htmlFor="" className='label'>Last Name:</label>
                      </div>
                      <div className='field-body'>
                        <div  className='field'>
                          <p className='control'>
                            <input 
                              type="text" name="lastName" id="lastName" 
                              className='input'
                              value={lastName}
                              onChange={e=> handleOnchange(e)}
                            />
                          </p>
                        </div>
                      </div>
                    </div>

                    
                    <div className='field is-horizontal'>
                      <div className='field-label is-normal'>
                        <label htmlFor="" className='label'>Addrest:</label>
                      </div>
                      <div className='field-body'>
                        <div  className='field'>
                          <p className='control'>
                            <input 
                              type="text" name="addrest" id="addrest" 
                              className='input'
                              value={addrest}
                              onChange={e=> handleOnchange(e)}
                            />
                          </p>
                        </div>
                      </div>
                    </div>

                  <div className='field is-horizontal'>
                     <div className='field-label is-nomal'>
                      <label htmlFor="" className='label'>Phone:</label>
                    </div>
                    <div className='field-body'>
                       <div className='field'>
                        <p>
                           <div className='control'> 
                             <input type="number" name='phone' id='phone' 
                             className='input'
                               onChange={e=> handleOnchange(e)}
                               value={phone}
                             />
                            </div>
                        </p>
                       </div>
                    </div>
                  </div> 

                <div className='field is-horizontal'>
                   <div className='field-label is-normal'>
                        <label htmlFor="email" className='label is-nomal'>Email:</label>
                   </div>
                   <div className='field-body'>
                      <div className='field'>
                        <p>
                           <div className='control'>
                             <input type="email" name="email" id="email" className='input' 
                               onChange={handleOnchange}
                               value={email}
                             />
                           </div>
                        </p>
                      </div>
                   </div>
                  </div>      



             </div>
             <div className='card-footer'>
               <footer className='card-footer'>
                <a href='#' className='card-footer-item'>Save</a>
                <a href='#' className='card-footer-item'>Edit</a>
                <a href='#' className='card-footer-item'>Delete</a>
               </footer>
             </div>
       </div>
    </div>
  </div>
</section>
  )
}

export default App
