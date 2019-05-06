import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class RpAlert extends Component {
    notify = (type,message) => {
        const position = toast.POSITION.BOTTOM_RIGHT;
        switch(type){
            case 'ALERT_SUCCESS':
            toast.success(message, {
                position: position
              });
              break;
            case 'ALERT_ERROR':
            toast.error(message, {
                position: position
              });
              break;
            case 'ALERT_WARN':
            toast.warn(message, {
                position: position
              });
              break;
            case 'ALERT_INFO':
            toast.info(message, {
                position: position
              });
              break;
            default:
            toast(message, {
                position: position,
                className: 'foo-bar'
              });
        }
        
      };

  render(){
      const {message, type} = this.props;
      message && this.notify(type,message);      
    return (
      <div>        
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}

export default RpAlert;