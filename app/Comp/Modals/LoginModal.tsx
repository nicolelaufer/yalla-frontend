"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import { API_URL } from "@/app/config";

const LoginModal = () => {
  const LoginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post(`${API_URL}/user/login`, data)
      .then(() => {
        LoginModal.onClose();
        toast.success("Logged In");
      })
      .catch((error) => {
        toast.error("Invalid Details");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <p className="text-center">Welcome back!</p>
      <Input
        id="email"
        type="email"
        label="Email*"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password*"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={LoginModal.isOpen}
      title="Log In"
      actionLabel="Log In"
      onClose={LoginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default LoginModal;