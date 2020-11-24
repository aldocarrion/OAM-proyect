import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './cardUser.styles.css';
import { connect } from 'react-redux'
import { delUsuario } from '../../actions/usuarioActions'




class CardUser extends Component {

    state = {};

    onDeleteClick = id =>{
        
        this.props.delUsuario(id);

    }
    

    render() { 
        const {id, name, email, phone} = this.props.usuario

        return ( 
        
        
        <div className="card-container">
            
            <img alt='user' src={`https://robohash.org/${id}?set=set2`} style={{ width: 300}}></img>
            <h5>{name}</h5>
            <span className="button"
            style={{cursor: 'pointer', float: 'right', color: 'red'}}
            onClick={this.onDeleteClick.bind(this, id)}>Borrar</span>
            <Link to={`user/editUser/${id}`}>
                <span>Edit</span>
            </Link>
            <ul>
                <p className=''>Email: {email}</p>
                <p className=''>Phone: {phone}</p>
            </ul>
            
        </div> 



        );
    }
}

 
export default connect(null, { delUsuario })(CardUser);
