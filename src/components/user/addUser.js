import React, { Component } from 'react';
import { Consumer } from '../../contexts/context';
import { connect } from 'react-redux';
import { addUsuario } from '../../actions/usuarioActions';
 
class addUser extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        password2: ''
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const {name, email, phone, address, password, password2} = this.state;

        //Revisamos errores de contrasenna

        if(password !== password2){            
            alert('Las contraseñas no coinciden.');
            return;
        }else{
            // console.log(this.state)
            const newUser = {
                name, 
                email,
                phone,
                address,
                password,
                password2,
            }
    
            // dispatch({type: 'ADD_USER', payload: newUser})
            this.props.addUsuario(newUser);
    
            this.setState({
                name: '',
                email: '',
                phone: '',
                address: '',
                password: '',
                password2: '',
                
            })
            return;
        }

        /////////////


        
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {
        const {name, email, phone, address, password, password2} = this.state;

return(
<Consumer>
{value => {
    const { dispatch } = value;
    return (
        <div className="card mb-3">
                 <div className="card-header"> Registro de Usuario </div>
                 <div className="card-body">
                     <form onSubmit={this.onSubmit.bind (this, dispatch)}>
                         <div className="form-group">
                             <label htmlFor="nombre">Nombre</label>
                             <input 
                             type="text" 
                             className="form-control form-control-lg"
                             placeholder="Ingrese nombre..." 
                             name="name"
                             value={name}
                             onChange={this.onChange}
                             required
                             />
                             
                         </div>
                         <div className="form-group">
                             <label htmlFor="email">Email</label>
                             <input 
                             type="email" 
                             className="form-control form-control-lg"
                             placeholder="Ingrese email..." 
                             name="email"
                             value={email}
                             onChange={this.onChange}
                             required
                             />
                             
                         </div>
                         <div className="form-group">
                             <label htmlFor="numero">Numero</label>
                             <input 
                             type="text" 
                             className="form-control form-control-lg"
                             placeholder="Ingrese numero..." 
                             name="phone"
                             value={phone}
                             onChange={this.onChange}
                             required
                             />
                         </div>
                         <div className="form-group">
                             <label htmlFor="Dirección">Dirección</label>
                             <input 
                             type="text" 
                             className="form-control form-control-lg"
                             placeholder="Ingrese dirección..." 
                             name="address"
                             value={address}
                             onChange={this.onChange}
                             required
                             />
                         </div>
                         <div className="form-group">
                             <label htmlFor="Password">Contraseña</label>
                             <input 
                             type="password" 
                             className="form-control form-control-lg"
                             name="password"
                             value={password}
                             onChange={this.onChange}
                             required
                             />
                         </div>
                         <div className="form-group">
                             <label htmlFor="Dirección">Verifique Contraseña</label>
                             <input 
                             type="password" 
                             className="form-control form-control-lg"
                             placeholder="Recuerde: Ambas contraseñas deben coincidir" 
                             name="password2"
                             value={password2}
                             onChange={this.onChange}
                             required
                             />
                         </div>
                         <input
                         type='submit'
                         value='Agregar Usuario'
                         className='btn btn-light btn-block'
                         ></input>
                     </form>
                 </div>
             </div>
    )
}}
</Consumer>)

    }
}

export default connect(null, {addUsuario})(addUser);