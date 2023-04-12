import React from "react";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import { FormControl, FormLabel, FormText, FormCheck, FormGroup, InputGroup} from "react-bootstrap";
import { Form } from "react-bootstrap";
import './App.css';

function App() {

  const { register, handleSubmit, formState: { errors, isSubmitting, isDirty, isValid } } = useForm({
    mode: "onBlur"
  });

  const onSubmit = ( data) => {
    alert(JSON.stringify(data));
  }
  

  return (
    <div className="App">

      <Form onSubmit={handleSubmit(onSubmit)}>

        <FormGroup className="mb-4">
          <FormLabel htmlFor="username">Username</FormLabel>
          <FormControl type="text" id="username" placeholder="Enter username" 
            {...register("username", { required: 'Please, enter your name'})}/>  
          {errors?.username && <FormText id="usernameHelp" className="">{errors?.username.message}</FormText>}
        </FormGroup>

        <FormGroup className="mb-4">
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormControl type="password" id="password" placeholder="Enter password" 
            {...register("password", { required: true,
              maxLength : {
                value: 12,
                message: 'Password should be more 4 and less than 12 characters'
              },
              minLength : {
                value: 4,
                message: 'Password should be more 4 and less than 12 characters'
              },
             })}
            />
            {errors?.password ? <FormText id="usernameHelp" className="">{errors?.password.message || "Please, enter your password"}</FormText> : <FormText id="passwordHelp" className="form-text text-muted">Your password is between 4 and 12 characters</FormText>}
          
        </FormGroup>

        <FormGroup className="mb-4">
          <FormLabel htmlFor="input-text">Input text label</FormLabel>
          <FormControl type="text" id="input-text" placeholder="Type here" 
            {...register("inputTextLabel", { required: true, 
              pattern: {
                value: /[A-Za-z]{3}/,
                message: 'You can type only letters'
              }
              })}/>
            {errors?.inputTextLabel ? <FormText id="inputTextLabelHelp" className="">{errors?.inputTextLabel.message || "Please, enter your password"}</FormText> : <FormText id="inputTextLabelHelp" className="form-text text-muted">Assistive text</FormText>}
        </FormGroup>

        <InputGroup className="mb-4">
          <FormCheck type="checkbox" value="" id="flexCheckDefault" {...register("checkbox")}/>
          <FormLabel className="" htmlFor="flexCheckDefault">
            Remember me
          </FormLabel>
        </InputGroup>

        <InputGroup className="mb-4">
          <FormCheck className="" type="switch" role="switch" id="flexSwitchCheckDefault" {...register("toggle")}/>
          <label className="" htmlFor="flexSwitchCheckDefault">Off</label>
        </InputGroup>


          <InputGroup className="mb-4">
            <FormCheck className="mr-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked {...register("radioSelection")}/>
            <FormLabel className="" htmlFor="flexRadioDefault1">
              Radio selection 1
            </FormLabel>
          </InputGroup>
          <InputGroup className="mb-4">
            <FormCheck className="d-block mr-3" type="radio" name="flexRadioDefault" id="flexRadioDefault2" {...register("radioSelection")}/>
            <FormLabel className="" htmlFor="flexRadioDefault2">
              Radio selection 2
            </FormLabel>
          </InputGroup>
          <InputGroup className="mb-4">
            <FormCheck className="mr-3" type="radio" name="flexRadioDefault" id="flexRadioDefault3" {...register("radioSelection")}/>
            <FormLabel className="ml-3" htmlFor="flexRadioDefault3">
              Radio selection 3
            </FormLabel>
          </InputGroup> 


        <Form.Select {...register("dropdownTitle")}>
          <option value="option">Dropdown option</option>
          <option value="option1">Dropdown option 1</option>
          <option value="option2">Dropdown option 2</option>
        </Form.Select>


        <div className="d-flex justify-content-between mt-5">
          <Button type="Button" className="">Cancel</Button>
          <Button type="submit" disabled={!isDirty || !isValid} className="">Next</Button>
        </div>
      </Form>
    </div>
  );
}

export default App;
