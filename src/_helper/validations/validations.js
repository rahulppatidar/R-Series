import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export const loginValidation = (data) =>{
    let errors = {};

    if(Validator.isEmpty(data.username)){
        errors.username = 'Email required';
    } else if(!Validator.isEmail(data.username)){
        errors.username = "Invalide Email";
    }
    if(Validator.isEmpty(data.password)){
        errors.password = "Password required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
    
}

export const signupValidation = (data) =>{
    let errors= {};

    if(Validator.isEmpty(data.name)){
        errors.name = 'Name required';
    }

    if(Validator.isEmpty(data.email)){
        errors.email= "Email required";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Invalid Email";
    }

    if(Validator.isEmpty(data.password)){
        errors.password = "Password Required";
    }else if(data.password.toString().trim().length<6 || data.password.toString().trim().length>12){
        errors.password = "Password Length Must be between 6 and 12 character";
    }

    if(Validator.isEmpty(data.confPassword)){
        errors.confPassword = "Confirm Password required";
    }else if(data.confPassword.toString().trim().length<6 || data.confPassword.toString().trim().length>12){
        errors.confPassword = "Password Length Must be between 6 and 12 character";
    } else if(!Validator.equals(data.password,data.confPassword)){
        errors.confPassword = "Password must match";
    }

    if(Validator.isEmpty(data.mobile)){
        errors.mobile = 'This field is required';
    }

    return {
        errors,
        isValid:isEmpty(errors)
    }
}

export const passwordValidation = (data) =>{
    let errors = {};

    if(Validator.isEmpty(data.newPassword)){
        errors.newPassword = 'Password required';
    }else if(data.newPassword.toString().trim().length<6 || data.newPassword.toString().trim().length>12){
        errors.newPassword = "Password Length Must be between 6 and 12 character";
    } 

    if(Validator.isEmpty(data.confNewPassword)){
        errors.confNewPassword = "Confirm Password required";
    }else if(data.confNewPassword.toString().trim().length<6 || data.confNewPassword.toString().trim().length>12){
        errors.confNewPassword = "Password Length Must be between 6 and 12 character";
    }else if(!Validator.equals(data.newPassword,data.confNewPassword)){
        errors.confNewPassword = 'Password must match';
    }
    console.log('errors',errors);
    return {
        errors,
        isValid: isEmpty(errors)
    };
    
}

export const updateProfileValidation = (data) =>{
    let errors= {};

    if(Validator.isEmpty(data.name)){
        errors.name = 'Name required';
    }

    if(Validator.isEmpty(data.email)){
        errors.email= "Email required";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Invalid Email";
    }
    
    if(Validator.isEmpty(data.mobile)){
        errors.mobile = 'This field is required';
    }

    return {
        errors,
        isValid:isEmpty(errors)
    }
}