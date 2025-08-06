import React, { useState } from 'react'

function ValidationForm() {
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        checkBox:false,
    });

    const [errors, setErrors] = useState({});

    function handleChange(e){
        const {name, value,type,checked} = e.target;
        const newValue = type === 'checkbox' ? checked: value;
        setFormData((prev)=> ({
            ...prev,
            [name]: newValue,
        }));

        setErrors((prevErrors) => {
            const updatedErrors = {...prevErrors};

            if (newValue) {
              delete updatedErrors[name];
            }
              return updatedErrors;
        })
      
    }

    const validate = () => {
        const newErrors= {};

        if(!formData.name.trim()){
            newErrors.name = "Name is required";
        }else if(formData.name.length<3){
            newErrors.name = "Name must be at least 3 characters";
        }

        if(!formData.email.includes("@")){
            newErrors.email = "Email muse include @"
        }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Password donot match";
    }

     if (!formData.checkBox) {
      newErrors.checkBox = "You must accept the terms";
     }

    return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length>0){
            setErrors(validationErrors);
            return;
        }

        console.log("Submitted:", formData);
        alert("form submitted");

        setFormData({name:"",email:"",password:"", confirmPassword:"", checkBox:false,});
        setErrors({});
    };

  return (
   <form onSubmit={handleSubmit}>
    <input 
    type="text"
    name="name"
    value={formData.name}
    placeholder='Name'
    onChange={handleChange}
     />
     {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
     
     <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Email"
        onChange={handleChange}
      />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      
      <input
        type="password"
        name="password"
        value={formData.password}
        placeholder="Password"
        onChange={handleChange}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

 <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        placeholder="Confirm Password"
        onChange={handleChange}
      />
      {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}

<label>
    <input 
    type="checkbox"
    name='checkBox'
    checked={formData.checkBox}
    onChange={handleChange}
    />{" "}
    I accept the terms & conditions
    </label>
      {errors.checkBox && <p style={{ color: "red" }}>{errors.checkBox}</p>}
      <button type="submit">Sign Up</button>

   </form>
  )
}

export default ValidationForm