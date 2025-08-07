import {useForm} from "react-hook-form";

function SimpleRHF() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        reset,
    } = useForm();

    const onSubmit = (data) => {
           console.log("Submitted data:", data);

           // do something with data here(eg;API call)

        alert("Form submitted");
        reset(); // clears all fields;
    };

    const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign Up</h2>
{/* Username  */}
        <div>
            <label>Username</label>
            <input 
            {...register("username", {required:"Username is required"})} 
            />
            {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
        </div>

    {/* Email */}
          <div>
            <label>Email</label>
            <input 
            type="email"
            {...register("email", {
                required:"Email is required",
                pattern:{
                    value:/^\S+@\S+$/i,
                    message: "Invalid email format"
            }
            })} 
            />
           {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>

            {/* Password   */}
        <div>
            <label>Password</label>
            <input 
            {...register("password", {
                required:"password is required",
                minLength:6
            })} 
            />
            {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        </div>

        {/* Terms Agreement */}
      <div>
        <label>
          <input
            type="checkbox"
            {...register("agree", { required: "You must agree to continue" })}
          />
          I agree to the terms
        </label>
        {errors.agree && <p style={{ color: "red" }}>{errors.agree.message}</p>}
      </div>

            <button type="submit">Submit</button>
    </form>
  )
}

export default SimpleRHF