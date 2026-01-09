'use client';
import ButtonComp from '@/components/reusableComponents/ButtonComp';
import CardComp from '@/components/reusableComponents/CardComp';
import InputGroupComp from '@/components/reusableComponents/InputGroupComp';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../utils/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

type ILoginFormData = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data: ILoginFormData) => {
    console.log('Remember me ticked?', data.rememberMe);
    console.log(
      'rememberedEmail in localStorage:',
      localStorage.getItem('rememberedEmail')
    );
    console.log(data);
    // persist or remove remembered email based on checkbox
    if (data.rememberMe) {
      if (data.email) localStorage.setItem('rememberedEmail', data.email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
  };
  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setValue('email', rememberedEmail);
      setValue('rememberMe', true);
    } else {
      setValue('email', '');
      setValue('rememberMe', false);
    }
  }, []);
  return (
    <div className="flex h-screen flex-col items-center md:flex-row">
      <div className="relative flex h-1/2 w-full items-center justify-center md:h-full md:w-1/2">
        <Image
          fill
          src="/screenshot.png"
          alt="De Heus"
          className="absolute h-full w-full object-cover"
        />

        <div className="relative z-10 px-10 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">De Heus</h1>
          <h2 className="mb-4 hidden text-lg font-medium md:block">
            Poultry Farming Excellence
          </h2>
          <p className="hidden text-sm leading-relaxed md:block">
            Leading the industry with innovative nutrition solutions <br />
            for poultry farmers worldwide.
          </p>
        </div>
      </div>
      <div className="flex w-[90%] items-center justify-center bg-white md:w-1/2">
        <CardComp className="relative z-20 -mt-[25vh] flex w-full max-w-sm flex-col gap-6 rounded-lg bg-white p-6 backdrop-blur-sm md:mt-0 lg:max-w-md">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-semibold text-[#006FB7]">
                Welcome Back!
              </p>
              <p className="text-[#1E1E1E]">Sign in to your account</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <InputGroupComp
                label="Email"
                placeholder="Enter your email"
                validationMessage={errors.email?.message}
                {...register('email')}
                type="email"
                className="w-full"
                wrapperClassName="w-full max-w-sm"
              />
              <InputGroupComp
                label="Password"
                placeholder="Enter Password"
                validationMessage={errors.password?.message}
                type={showPassword ? 'text' : 'password'}
                endContent={
                  showPassword ? (
                    <EyeOff className="h-4 w-4 cursor-pointer" />
                  ) : (
                    <Eye className="h-4 w-4 cursor-pointer" />
                  )
                }
                onClick={() => setShowPassword(!showPassword)}
                className="w-full"
                wrapperClassName="w-full max-w-sm"
                {...register('password')}
              />
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center justify-center gap-2">
                <input
                  id="remember-me"
                  type="checkbox"
                  {...register('rememberMe')}
                />
                <label htmlFor="remember-me" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <div>
                {' '}
                <a
                  href="/forgotPassword"
                  className="text-sm font-medium text-[#006FB7] hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className="">
              <ButtonComp
                className="w-full"
                name="Sign In"
                btnColor="green"
                type="submit"
              />
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <a
                href="/register"
                className="font-medium text-[#006FB7] hover:underline"
              >
                Sign Up
              </a>
            </div>
          </form>
        </CardComp>
      </div>
    </div>
  );
}
