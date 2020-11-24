import React, {Component} from 'react';
import './cardUser.styles.css';
import '../searchBox/searchBar.styles.css';
import CardUser from './cardUser';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {getUsuarios} from '../../actions/usuarioActions';
import { SearchBox } from '../searchBox/searchBox';





class Profiles extends Component {
    state = {
        
        searchField:''
    }
    
    componentDidMount(){
        this.props.getUsuarios();
    }

    render() { 
        const {usuarios} = this.props;
        
        const usuariosFil = usuarios.filter(user => user.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
        
        
        return (
            <div className='container'>
                <SearchBox 
                    placeholder='Buscar persona...' 
                    handleChange={e => {
                        this.setState({ searchField: e.target.value })                            
                    }}
                />
                <div className='cardUser'>
                    {usuariosFil.map(usuario => (
                        <CardUser usuario={usuario} key={usuario.id}/>                   
                    ))}
                </div>
            </div>
        );
    }
}
                        

Profiles.propTypes = {
     usuarios: propTypes.array.isRequired,
     getUsuarios: propTypes.func.isRequired
}


const mapStateToProps = (state) => ({
    usuarios: state.usuario.users
})


export default connect(mapStateToProps, {getUsuarios} )(Profiles);