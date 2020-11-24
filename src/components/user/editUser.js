import React, {Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsuario, updateUsuario } from '../../actions/usuarioActions';


class editUser extends Component {
    state = { 
        name: '',
        email:'',
        phone:'',
        address:'',
        errors: {}
    };

    componentWillReceiveProps(nextProps, nextState){
        const { name, email, phone, address} = nextProps.user;
        this.setState({
            name, email, phone, address
        });
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getUsuario(id);
    }

    

    onSubmit =  e => {
        e.preventDefault();

        const { name, email, phone, address }= this.state;

        if (name === '') {
            this.setState({errors: {name: 'Nombre es requerido'}});
            return;
        }
        if (email === '') {
            this.setState({errors: {email: 'Email es requerido'}});
            return;
        }
        if (phone === '') {
            this.setState({errors: {phone: 'Telefono es requerido'}});
            return;
        }
        if (address === '') {
            this.setState({errors: {address: 'Direccion es requerido'}});
            return;
        }

        const {id} = this.props.match.params;


        const updUser = {
            id,
            name,
            email,
            phone,
            address
        };

        this.props.updateUsuario(updUser);

        this.props.history.push('/');

        
    }

    onChange = e => this.setState({[e.target.name] : e.target.value })

    render() { 
        const { name, email, phone, address,  errors } = this.state;

        return ( 
            <div className="card mb-3">
                 <div className="card-header"> Edición de Usuario </div>
                 <div className="card-body">
                     <form onSubmit={this.onSubmit}>
                         <div className="form-group">
                             <label htmlFor="nombre">Nombre</label>
                             <input 
                             type="text" 
                             className="form-control form-control-lg"
                             placeholder="Ingrese nombre..." 
                             name="name"
                             value={name}
                             onChange={this.onChange}
                             
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
                             
                             />
                         </div>
                         <input
                         type='submit'
                         value='Guardar Cambios'
                         className='btn btn-light btn-block'
                         ></input>
                     </form>
                 </div>
             </div>
         );
    }
}
 

editUser.propTypes = {
    user : PropTypes.object.isRequired,
    getUsuario : PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    user : state.usuario.user
});


export default connect(mapStateToProps, {getUsuario, updateUsuario})(editUser);