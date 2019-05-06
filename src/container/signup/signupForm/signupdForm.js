import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {signupValidation} from '../../../_helper/validations';
import {TextFieldGroup} from '../../../components/common';
import {userActions} from '../../../_actions/userActions';

class SignUpForm extends Component{

    constructor(props){
        super(props);
        this.state={
            user:{
                name:'',
                email:'',
                password:'',
                confPassword:'',
                mobile:'',
            },            
            errors:{},
            invalid: false,
            submitted:false
        };

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    isValid(){
        const {errors, isValid} = signupValidation(this.state.user);
        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }

    onChange(e){
        this.setState({
            user:{
                ...this.state.user,            
                [e.target.name]:e.target.value
            }
        });
    }

    onSubmit(e){
        e.preventDefault();
        if(this.isValid()){
            this.setState({errors:{},submitted:true});
            const {user} = this.state;
            const {dispatch} = this.props;
            dispatch(userActions.signup(user))                
        }

    }

    render(){
        const { user, errors, invalid } = this.state;
        return(
            <div className="signup-form rp-shadow-box">
                <form onSubmit={this.onSubmit}>
                <h4>{this.props.title}</h4>
                <TextFieldGroup
                    name="name"
                    value={user.name}
                    onChange={this.onChange}
                    label="Your Name"
                    error={errors.name}
                />

                <TextFieldGroup
                    name="email"
                    value={user.email}
                    onChange={this.onChange}
                    label="Email Address"
                    error={errors.email}
                    type="email"
                />

                <TextFieldGroup
                    name="password"
                    value={user.password}
                    onChange={this.onChange}
                    label="Password"
                    error={errors.password}
                    type="password"
                />

                <TextFieldGroup
                    name="confPassword"
                    value={user.confPassword}
                    onChange={this.onChange}
                    label="Confirm Password"
                    error={errors.confPassword}
                    type="password"
                />

                <TextFieldGroup
                    name="mobile"
                    value={user.mobile}
                    onChange={this.onChange}
                    label="Contact Number"
                    error={errors.mobile}
                />

                <div className="form-group">
                    <button disabled={invalid} className="btn btn-danger btn-lg">
                        Sign up
                    </button>
                    <br/>
                    Alredy have account <Link to={`${process.env.PUBLIC_URL}/login`} className="btn btn-outline-info btn-lg py-0">Login</Link>
                </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps= (state) =>{
    return {

    }
}


export default connect(mapStateToProps)(SignUpForm);