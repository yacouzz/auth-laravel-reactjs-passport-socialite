import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser } from './src/redux/user/user.actions';

const Navbar = (props)=>{
    //console.log(props)
    return(
    <>
     <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Laravel
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="tsen">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">

                    </ul>

                    <ul className="navbar-nav ml-auto">


                    { !props.user.user.currentUser.user ?
                           <><li className="nav-item">
                                <Link className="nav-link" to="/login">login</Link>
                            </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                </>
                            :

                            <li className="nav-item dropdown">
                                <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {props.user.user.currentUser.user.name}  <span className="caret"></span>
                                </a>

                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <button className="dropdown-item" onClick={()=>props.deleteUser(props.user.user.currentUser.user)}>
                                       Log Out
                                    </button>
                                </div>


                            </li>
                    }

                    </ul>
                </div>
            </div>
        </nav>

    </>)
}

const mapStateToProps = (currentUser) => ({
    user:currentUser
})

const mapDispatchToProps = dispatch => ({
    deleteUser: user => dispatch(deleteUser(user))
  })


export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
