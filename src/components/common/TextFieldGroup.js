import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const TextFieldGroup = ({name , value , label, error, type, onChange, checkUserExists})=>{
    return (
        <div className={classnames('form-group', {'has-error': error})}>
            <label className="control-label">{label}</label>
            <input 
                onChange={onChange}
                onBlur={checkUserExists}
                value={value}
                type={type}
                name={name}
                className={'form-control'}
            />
            {error && <span className="help-block text-danger">{error}</span>}
        </div>
    );
}

// TextFieldGroup.propTypes = {
//     name: React.PropTypes.string.isRequired,
//     value: React.PropTypes.string.isRequired,
//     label: React.PropTypes.string.isRequired,
//     error: React.PropTypes.string,
//     type: React.PropTypes.string.isRequired,
//     onChange: React.PropTypes.func.isRequired,
//     checkUserExists: React.PropTypes.func
//   }

TextFieldGroup.defaultProps = {
    type: 'text'
}