import React from 'react'
import { useForm,useFieldArray } from 'react-hook-form' ;

function DynamicField() {
    const {
        register,
        control,
        handleSubmit,
        formState:{errors},
    } = useForm({
        defaultValues:{
            skills: [ {name:" "}],
        },
    });

    const {fields, append, remove} = useFieldArray({
        control,
        name: "skills",
    })

    
  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
        <h2>Add your Skills</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
                <div key={field.id} style={{ marginBottom: "1rem" }}>
                    <input
                    placeholder={`Skill ${index + 1}`}
                    {...register(`skills.${index}.name`,{
                        required:"Skill is required",
                    })}
                    />
                    <button type='button' onClick={()=> remove(index)}>
                        X Remove
                    </button>
                    {errors.skills?.[index]?.name && (
                        <p style={{ color: "red" }}> {errors.skills[index].name.message}</p>
                    )}
                </div>
            ))}

             <button type='button' onClick={()=> append({ name: ""})}>
                        + Add Skill
                    </button>
                    <br />
        <br />
        <button type="submit">✅ Submit</button>
        </form>
    </div>
  )
}

export default DynamicField