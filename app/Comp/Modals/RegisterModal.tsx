"use client";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import { AiFillGithub } from "react-icons/ai";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import { API_URL } from "@/app/config";

const RegisterModal = () => {
  const RegisterModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post(`${API_URL}/api/register`, data)
      .then(() => {
        RegisterModal.onClose();
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
      <p className="text-center">Create an Account</p>
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
        id="name"
        type="text"
        label="Name*"
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
      <Input
        id="address"
        type="text"
        label="Address"
        disabled={isLoading}
        register={register}
        errors={errors}
        required={false}
      />
      <Input
        id="city"
        type="text"
        label="City"
        disabled={isLoading}
        register={register}
        errors={errors}
        required={false}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={RegisterModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={RegisterModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default RegisterModal;
