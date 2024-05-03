import { ILogin } from "@/interfaces/ILogin";

export const validarForm = (values: any) => {
  let mensaje: any = {};

  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if (!passRegex.test(values.password)) {
    mensaje.password =
      "La contraseña debe tener al menos entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. ";
  }

  if (!emailRegex.test(values.email)) {
    mensaje.email = "Ingrese un email valido por favor";
  }

  return mensaje;
};

export const validarLogin = (values: ILogin) => {
  let errors: any = {};

  if (!values.email) {
    errors.email = "El email es obligatorio";
  }

  if (!values.password) {
    errors.password = "La contraseña es obligatoria";
  }

  return errors;
};
