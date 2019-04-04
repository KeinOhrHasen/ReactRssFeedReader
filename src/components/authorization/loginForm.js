import React from "react"
import { Field, reduxForm } from "redux-form"
import RenderField from "../../containers/authorization/myInput"
import {correctName, correctPassword} from "../../containers/authorization/signUpValidation"

let LoginForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (  
  <div className="ui middle aligned center aligned grid signUpForm">
    <div className="column">
      <h2 className="ui teal image header">
        <div className="content">Welcome</div>
      </h2> 
      <form onSubmit={handleSubmit} className="ui large form">

        <div className="field">
          <div className="ui left icon input">
            <div className="pos_rel">
            <i className="user icon"></i>
            <Field 
              name="username" 
              component={RenderField} 
              type="text"
              placeholder="username"
              label="Username"
              validate={[correctName]}
            />
            </div>
          </div>
        </div>

        <div className="field">
          <div className="ui left icon input">
            <div className="pos_rel">
            <i className="user icon"></i>
            <Field 
              name="password" 
              component={RenderField} 
              type="password" 
              placeholder="enter password" 
              validate={[correctPassword]}
              label="Password"
            />
            </div>
          </div>
        </div>

        <button 
          className="ui fluid large teal submit button"
          type="submit"
          disabled={pristine ||submitting}>
          Login
        </button>


        </form>
      </div>
    </div>
  )
}

LoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm)


export default LoginForm;