import React from "react"
import { Field, reduxForm } from "redux-form"
import RenderField from "../../containers/authorization/myInput"
import {correctName, correctPassword, matchInput} from "../../containers/authorization/signUpValidation"


let SignUpForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
  <div className="ui middle aligned center aligned grid signUpForm">
    <div className="column">
      <h2 className="ui teal image header">
        <div className="content">Welcome</div>
      </h2> 
      <form onSubmit={handleSubmit} className="ui large form ">

        <div className="field ">
          <div className="ui left icon input">
          
            <div className="pos_rel">
            <i className="user icon"></i>
              <Field 
                name="lastName" 
                component={RenderField} 
                type="text" 
                label="Last Name"
                validate={[correctName]}
                className="ui stacked segment"
              />
            </div>
          </div>
        </div>

        <div className="field">
          <div className="ui left icon input">
            <div className="pos_rel">
            <i className="user icon"></i>
            <Field 
            name="username" 
            component={RenderField} 
            type="text"
            label="Username"
            validate={[correctName]}
            className="ui stacked segment"
            />
            </div>
          </div>
        </div>

        <div className="field ">
          <div className="ui left icon input">
            <div className="pos_rel">
            <i className="user icon"></i>
            <Field 
            name="password" 
            component={RenderField} 
            type="password" 
            validate={[correctPassword]}
            label="Password"
            className="ui stacked segment"
            />
            </div>
          </div>
        </div>

        <div className="field ">
          <div className="ui left icon input">
            <div className="pos_rel">
            <i className="user icon"></i>
            <Field 
            name="passwordConfirmation" 
            component={RenderField} 
            type="password" 
            label="Confirm password"
            validate={[matchInput]}
            className="ui stacked segment"
            />
            </div>
          </div>
        </div>
        <div className="field ">
          <div className="ui left icon input">
            <div className="pos_rel">
            <i className="user icon"></i>
            <Field 
            name="email" 
            component={RenderField} 
            type="email" 
            label="Email"
            className="ui stacked segment"
            />
            </div>
          </div>
        </div>
        <button 
          className="ui fluid large teal submit button"
          type="submit"
          disabled={pristine ||submitting}>
          Sign Up
        </button>
        <button 
          className="ui fluid large teal button"
          type="button"
          disabled={pristine ||submitting}
          onClick={reset}>
          Clear Values
        </button>

      </form>
      </div>
    </div>
  )
}

SignUpForm = reduxForm({
  form: 'SignUpForm',

})(SignUpForm)

export default SignUpForm;



