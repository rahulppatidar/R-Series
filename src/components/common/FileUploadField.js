import React from 'react';
import classnames from 'classnames';

export const FileUploadField = ({name , label, error, onChange, accept})=>{
    return (
        <div className={classnames('form-group', {'has-error': error})}>
            <label className="control-label">{label}
            <input 
                onChange={onChange}                
                name={name}
                className={'file-contol d-none'}
                accept={accept}
                type="file"
            />
            {error && <span className="help-block text-danger">{error}</span>}
            </label>
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

