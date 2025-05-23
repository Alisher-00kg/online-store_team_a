import React, { useState } from "react";
import { useFormik } from "formik";
import Input from "../components/UI/Input";
import PhoneInput from "react-phone-input-2";
import { BaseButton } from "../components/UI/BaseButton";
import { InputAdornment } from "@mui/material";
import styled from "styled-components";
import { BaseIconButton } from "../components/UI/BaseIconButton";
import { Icons } from "../assets/icons/icon";
import validationSchema from "../utils/errorComponents";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRole } from "../store/slices/authSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (values.email === "adminaika@gmail.com") {
        localStorage.setItem("role", "ADMIN");
        dispatch(setRole("ADMIN"));
        navigate("/admin/main");
      } else {
        localStorage.setItem("role", "GUEST");
        dispatch(setRole("GUEST"));
        navigate("/payment"); 
      }
    },
  });
  const { setFieldValue } = formik;
  const handlePhoneChange = (value) => {
    setFieldValue("number", value);
  };
  const handleBlur = () => {
    formik.setFieldTouched("number", true);
  };

  return (
    <StyledWrapper>
      <StyledDivCon>
        <h1>Регистрация</h1>
      </StyledDivCon>
      <StyledForm onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <Input
            label="Имя"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.firstName && formik.errors.firstName)}
          />
          <ErrorText>
            {formik.touched.firstName && formik.errors.firstName}
          </ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Фамилия"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.lastName && formik.errors.lastName)}
          />
          <ErrorText>
            {formik.touched.lastName && formik.errors.lastName}
          </ErrorText>
        </InputWrapper>

        <StyledDiv>
          <StyledLable htmlFor="number">Номер телефона</StyledLable>
          <StyledInput
            id="number"
            country="ru"
            enableAreaCodes
            inputClass="w-full"
            countryCodeEditable={false}
            onChange={handlePhoneChange}
            specialLabel=""
            value={formik.values.number}
            onBlur={formik.handleBlur}
            inputProps={{ name: "number" }}
          />
          {formik.touched.number && formik.errors.number && (
            <ErrorText>{formik.errors.number}</ErrorText>
          )}
        </StyledDiv>
        <InputWrapper>
          <Input
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.email && formik.errors.email)}
          />
          <ErrorText>{formik.touched.email && formik.errors.email}</ErrorText>
        </InputWrapper>

        <InputWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Введите пароль"
            label="Пароль"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.password && formik.errors.password)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <BaseIconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <Icons.UEye /> : <Icons.EyeOff />}
                  </BaseIconButton>
                </InputAdornment>
              ),
            }}
          />
          <ErrorText>
            {formik.touched.password && formik.errors.password}
          </ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Подтверждение пароля"
            label="Подтверждение пароля"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              !!(
                formik.touched.confirmPassword && formik.errors.confirmPassword
              )
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <BaseIconButton
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? <Icons.UEye /> : <Icons.EyeOff />}
                  </BaseIconButton>
                </InputAdornment>
              ),
            }}
          />
          <ErrorText>
            {formik.touched.confirmPassword && formik.errors.confirmPassword}
          </ErrorText>
        </InputWrapper>

        <StyledContainerButtton>
          <BaseButton type="submit">Зарегистрироваться</BaseButton>
        </StyledContainerButtton>
        <Continer>
          <span>Уже зарегистрированы?</span>
          <p>Войти</p>
        </Continer>
      </StyledForm>
    </StyledWrapper>
  );
};

export default SignUp;
const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  position: absolute;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const StyledDivCon = styled.div`
  width: 100%;
  max-width: 441px;
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 441px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledDiv = styled.div`
  margin-top: 20px;
  position: relative;
`;

const StyledInput = styled(PhoneInput)`
  input {
    width: 100%;
    height: 47px;
    font-size: 16px;
    padding: 8px 12px;
    border-radius: 4.5px;
    border: 1px solid #545454;
    box-sizing: border-box;
  }
  margin-top: 6px;
`;

const StyledContainerButtton = styled.div`
  margin-top: 32px;

  button {
    width: 100%;
    max-width: 445px;
    height: 52px;
    font-size: 16px;
  }
`;

const StyledLable = styled.label`
  font-size: 12px;
  font-weight: 400;
`;

const Continer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 14px;

  p {
    margin: 0;
    cursor: pointer;
    color: #30723f;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;
