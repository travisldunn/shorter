import React from "react";
import { useForm } from "react-hook-form";

export default ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className="urlForm">
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <label>Add huge URL here</label>
        {errors.long_url && <span>Please add a URL</span>}
        <input
          name="long_url"
          ref={register({
            required: true,
          })}
        />
        <label>Give it a short name if you'd like</label>
        <input name="slug" ref={register()} />
        <input className="formButton" value="Shorter!" type="submit" />
      </form>
    </div>
  );
};
