'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import ButtonComp from '@/components/reusableComponents/ButtonComp';
import CardComp from '@/components/reusableComponents/CardComp';
import InputGroupComp from '@/components/reusableComponents/InputGroupComp';
import { resetPasswordSchema } from '../utils/utils';

enum ButtonTypes {
  submit = 'submit',
}

export default function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    mode: "onSubmit",
  });

  interface ResetPasswordFormData {
    email: string;
  }

  const onSubmit = (data: ResetPasswordFormData) => {
    console.log('RESET PASSWORD DATA:', data);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Image */}
      <div className="relative flex h-full w-1/2 items-center justify-center">
        <Image
          src="/screenshot.png"
          alt="De Heus"
          width={100}
          height={100}
          className="absolute h-full w-full object-cover"
        />

        <div className="relative z-10 px-10 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">De Heus</h1>
          <h2 className="mb-4 text-lg font-medium">
            Poultry Farming Excellence
          </h2>
          <p className="hidden md:block text-sm leading-relaxed">
            Leading the industry with innovative nutrition solutions <br />
            for poultry farmers worldwide.
          </p>
        </div>
      </div>

      {/* Right side - Reset Password Form */}
      <div className="flex w-1/2 items-center justify-center bg-white">
        <CardComp className="w-[420px] rounded-lg p-6 shadow-lg">
          <div className="text-center">
            <h2 className="mb-2 text-3xl" style={{ color: '#006FB7' }}>
              Forgot Password?
            </h2>
            <p className="text-gray-600">
              No worries, we&apos;ll send you reset instructions
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 flex flex-col gap-4"
          >
            <div
              onInputCapture={(e) =>
                setValue('email', (e.target as HTMLInputElement).value, { shouldValidate: true })
              }
            >
              <InputGroupComp
                type="text"
                label="Email"
                placeholder="your@email.com"
                validationMessage={errors.email?.message}
                {...register("email")}
              />
              <input type="hidden" {...register('email')} />
            </div>
            <ButtonComp
              name="Reset Password"
              type={ButtonTypes.submit}
              btnColor="green"
              className="mt-2 w-full"
            />

            <div className="mt-2 text-center text-sm">
              Back to{' '}
              <a
                href="/login"
                className="font-medium text-[#006FB7] hover:underline"
              >
                Login?
              </a>
            </div>
          </form>
        </CardComp>
      </div>
    </div>
  );
}
