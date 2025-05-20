import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import Input from "../components/UI/Input";
import { BaseButton } from "../components/UI/BaseButton";
import { Icons } from "../assets/icons/icon";
import { InputAdornment } from "@mui/material";
import { BaseIconButton } from "../components/UI/BaseIconButton";
import { UNSAFE_hydrationRouteProperties } from "react-router-dom";

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Вход</Title>

      <InputsWrapper>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{ required: "Логин обязателен" }}
          render={({ field }) => (
            <StyledInput
              {...field}
              id="username"
              label="email"
              placeholder="Введите логин"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BaseIconButton>
                      <Icons.UUser />
                    </BaseIconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        {errors.username && <ErrorText>{errors.username.message}</ErrorText>}
      </InputsWrapper>

      <InputsWrapper>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: "Пароль обязателен",
            minLength: {
              value: 6,
              message: "Пароль должен быть минимум 6 символов",
            },
          }}
          render={({ field }) => (
            <StyledInput
              {...field}
              id="password"
              label="password"
              placeholder="Введите пароль"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <BaseIconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      type="button"
                    >
                      {showPassword ? <Icons.UUser /> : <Icons.UEye />}
                    </BaseIconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
      </InputsWrapper>

      <SubmitButton type="submit">Войти</SubmitButton>
      <AdditionalText>
        <p>или</p>
        <a href="/register">зарегистрироваться</a>
      </AdditionalText>
      <AdditionalText>
        <a href="/forgot-password">
          <b>Забыли пароль?</b>
        </a>
      </AdditionalText>
    </Form>
  );
};

export default SignIn;

const Form = styled.form`
  width: 408px;
  height: 71px;
  margin: 50px auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 30px;
  color: #000;
`;

const InputsWrapper = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const StyledInput = styled(Input)`
  width: 100%;
  padding: 12px 14px;
  font-size: 16px;
  border: 1px solid #b0aca9;
  border-radius: 4px;
  outline: none;
  color: #222;
  background-color: #fff;

  &::placeholder {
    color: #b0aca9;
  }

  &:focus {
    border-color: #000;
  }
`;

const ErrorText = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: #e53935;
  position: absolute;
`;

const SubmitButton = styled(BaseButton)`
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 14px 0;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const AdditionalText = styled.div`
  margin-top: 25px;
  font-size: 14px;
  color: #555;
  text-align: center;
  a {
    color: #121314c6;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
