import { useForm } from "react-hook-form";
import "./Form.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Image from "next/image";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../lib/firebase";
import { redirect, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import UserContext from "@/store/user-context";
const Form = () => {
  const router = useRouter();
  const { login, logout, user } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(false);
  const schema = Yup.object()
    .shape({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(7),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    if (isLogin) {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          if (user) {
            router.push("/products");
          } else {
            // router.push("/");
          }
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          if (user) {
            router.push("/products");
            login(user.uid);
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
    resetField("email");
    resetField("password");
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push("/products");
    }
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"form"}>
      <div className="form__logo">
        <Image src={"/images/3.png"} fill className="form__image" />
      </div>
      <div className="form__control">
        <label htmlFor="email" className="form__slabel">
          Email
        </label>
        <input {...register("email")} type="email" className="form__input" />
        {errors.email && (
          <p className="form__email-error">{errors.email.message}</p>
        )}
      </div>
      <div className="form__control">
        <label htmlFor="password" className="form__label">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          className="form__input"
        />
        {errors.password && (
          <p className="form__password-error">{errors.password.message}</p>
        )}
      </div>

      <div className="form__control">
        <input
          type="submit"
          className="form__input"
          value={isLogin ? "Register" : "Login"}
        />
      </div>
      <div className="form__notification">
        <div>
          <span>
            {isLogin ? "Do you have an account ? " : "Don't have an account ? "}
          </span>
          <span
            className="form__notification-action"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Login" : "Signup"}
          </span>
        </div>
      </div>
    </form>
  );
};

export default Form;
