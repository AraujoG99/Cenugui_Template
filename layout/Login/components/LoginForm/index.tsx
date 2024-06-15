import { useRef } from "react";

import { useAuth } from "@context/Auth";

import Button from "@components/Button";
import Text from "@layout/moonstone/authentication/Text";

import Form from "@components/Form";
import Input from "@components/Input";
import PasswordInput from "@components/PasswordInput";

export default function LoginForm() {
  const { errors, login, isLoading } = useAuth();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onFinish = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    login({ email, password });
  };

  return (
    <div className="mt-8">
      <Form onSubmit={onFinish}>
        <Input
          text="EMAIL"
          id="email"
          name="email"
          type="email"
          fgColor="white"
          bgColor="primary"
          autoComplete="email"
          ref={emailRef}
        />
        <PasswordInput
          text="PASSWORD"
          id="password"
          name="password"
          fgColor="white"
          bgColor="primary"
          ref={passwordRef}
        />
        <Text
          padding="6"
          text="Não sabes a tua password?"
          link="Clica aqui!"
          href="/forgot-password"
        />
        <Button
          title={isLoading ? "Authenticating..." : "LET'S GO"}
          disabled={isLoading}
          type="submit"
          className="h-16 w-full border-quinary bg-quinary text-secondary"
        />
        {errors && <p className="text-center text-failure">{errors}</p>}
      </Form>
    </div>
  );
}
