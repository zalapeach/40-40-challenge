import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';

class Title extends Component {
    render(){
        return<div className='col-sm-12  title' >
            <h1>{this.props.title}</h1>

        </div>
    }
}
export default class Login extends Component {
    render(){
        return <div className='modal-dialog'> 
                 <div className='col-sm-12 modalLogin'>
                     <div className='modal-content modalLoginMain'>
                         <Title title='4040APPS'/>
                         <div className='col-sm form-group'>
                         <input type='email' className='form-control inputLogin' 
                            aria-describedby='emailHelp' placeholder='EMAIL'/>
                         </div>
                         <div className='col-sm  form-group'>
                         <input type='password' className='form-control inputLogin'
                            placeholder='CONTRASEÑA'/>
                         </div>
                         <div className='col-sm text-center'>
                           <Link to='/Projects'> <button type='submit'  className='btn btn-primary btnLogin'>ENTRAR</button> </Link>
                        </div>

                     </div>
                     
                 </div>

            </div>
   }
}              