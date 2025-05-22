import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Имя обязательно"),
  lastName: Yup.string().required("Фамилия обязательна"),
  number: Yup.string().required("Номер телефона обязателен"),
  email: Yup.string()
    .email("Неверный адрес электронной почты")
    .required("Email обязателен"),
  password: Yup.string()
    .min(6, "Пароль должен содержать минимум 6 символов")
    .required("Пароль обязателен"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
    .required("Подтверждение пароля обязательно"),
});

export default validationSchema;
