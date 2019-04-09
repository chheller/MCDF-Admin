import React, { useState } from "react";
import TextInput from "../shared/Inputs/TextInput";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    // TODO: Validate username, password
    return true;
  };

  return (
    <div>
      <div>
        <TextInput onInput={setUsername} />
        <TextInput onInput={setPassword} />
      </div>
    </div>
  );
};

export default LoginForm;
