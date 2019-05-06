import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../../_actions/userActions';
import history from '../../../_helper/history';
import {TextFieldGroup} from '../../../components/common';
import {loginValidation} from '../../../_helper/validations';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        //this.props.dispatch(userActions.logout());
        if(this.props.loggedIn){
            history.push('/user-profile');
        }
        this.state = {
            username: '',
            password: '',            
            errors:{}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isValid() {
        const { errors, isValid } = loginValidation(this.state);
    
        if (!isValid) {
          this.setState({ errors });
        }
    
        return isValid;
      }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });       
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if(this.isValid()){
            this.setState({ errors: {} });
            console.log('valid');
            const { username, password } = this.state;
            const { dispatch } = this.props;
            dispatch(userActions.login(username, password));
        }
       
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, errors } = this.state;
        return (

            <div className="LoginForm rp-shadow-box">               
                <h2>{this.props.title}</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <TextFieldGroup 
                        name='username'
                        value={username}
                        label="Username"
                        type="email"
                        error={errors.username}
                        onChange={this.handleChange}
                    />

                    <TextFieldGroup 
                        name='password'
                        value={password}
                        label="Password"
                        type="password"
                        error={errors.password}
                        onChange={this.handleChange}
                    />                  
                
                    <div className="form-group">
                        <button className="btn btn-danger btn-lg my-0">Login</button>
                        {loggingIn &&
                            <img alt="loading.." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to={`${process.env.PUBLIC_URL}/signup`} className="btn btn-outline-info btn-lg" style={{'marginLeft':'10px'}}>Signup</Link>
                    </div>
                </form>                       
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn, loggedIn } = state.authentication;
    return {
       loggingIn,
       loggedIn
    };
}


export default connect(mapStateToProps)(LoginForm)