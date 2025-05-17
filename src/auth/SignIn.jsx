import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IconButton, InputAdornment, Button, Input } from "@mui/material";

const SignIn = () => {
  const { control, handleSubmit } = useForm();
  const [showEmail, setShowEmail] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const toggleShowEmail = () => {
    setShowEmail((prev) => !prev);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: 400, margin: "0 auto" }}
    >
      <Input
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: "Email обязателен",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Введите корректный email",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <Input
            {...field}
            type={showEmail ? "text" : "email"}
            label="Email"
            variant="outlined"
            fullWidth
            error={!!error}
            helperText={error ? error.message : null}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowEmail} edge="end">
                    {showEmail ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: 20 }}
      >
        Войти
      </Button>
    </form>
  );
};

export default SignIn;
