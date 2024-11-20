"use client";
import {
  DefaultValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import LogoSVG from "@/app/components/svg/logoSvg";
import { onlyDigits } from "@/app/components/libs/publicLib";
import SpinnerSVG from "@/app/components/svg/spinnerSvg";
import EyeSvg from "@/app/components/svg/EyeSvg";
import EyeoffSvg from "@/app/components/svg/EyeoffSvg";
// const FRONT_URL = process.env.REACT_APP_FRONT_URL;
interface loginType {
  userMobile: string;
  password: string;
}

const initialValues: DefaultValues<loginType> = {
  userMobile: "",
  password: "",
};

const Login = () => {
  const router = useRouter();

  const form = useForm<loginType>({
    mode: "onBlur",
    defaultValues: initialValues,
  });
  const {
    register,
    control,
    handleSubmit,
    getValues,
   
    formState: {
      errors,
      isSubmitting,
    },
  } = form;
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  const showPasswordEvent = (event: any) => {
    setShowPassword((prev) => !prev);
  };

  const registerOptions = {
    userMobile: {
      required: "تلفن همراه خود را وارد نمایید",
      validate: (value: any) => {
        // if (!isNaN(value)) {
        const validPass = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/.test(value);
        if (!validPass) return "تلفن همراه وارد شده معتبر نیست";
        // } else {
        //   var re = /\S+@\S+\.\S+/;
        //   if (!re.test(value)) return "ایمیل وارد شده معتبر نیست";
        // }
      },
    },

    password: {
      required: "رمز عبور را وارد نمایید",
      validate: (value: any) => {
        const validPass =
          /(\d.*[A-Z])|([A-Z].*\d)/.test(value) &&
          /\d/.test(value) &&
          /[a-z]/.test(value);
        if (!validPass) return "حداقل یک حرف بزرگ، کوچک و عدد وارد نمایید";
      },
      minLength: {
        value: 6,
        message: "طول رمز عبور باید حداقل 6 کاراکتر باشد",
      },
    },
  };

  const onSubmit: SubmitHandler<loginType> = async (data: loginType) => {
    const isValid = Object.keys(errors).length === 0;
    if (isSubmitting || !isValid) return;
    try {
      // const res = await fetch("/api/auth", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });
      const res = { ok: true };
      if (res.ok) {
        router.push(`/dashboard`, { scroll: false });
      } else {
        toast.error("نام کاربری یا رمز عبور اشتباه است");
      }

      // await saveTokens(retVal.data);
    } catch (error) {
      if ((error as any).response?.data)
        toast.error("نام کاربری یا رمز عبور اشتباه است");
      else toast.error("خطای دسترسی");
    }
  };

  return (
    <main className="flex h-screen w-screen flex-col items-center  justify-start gap-y-3 2xl:gap-y-5">
      <LogoSVG className="w-40 h-40 2xl:w-48 2xl:h-48 mt-2 2xl:mt-7 " />

      <div className="text-base 2xl:text-xl">ورود به داشبورد</div>
      <form
        className="w-full sm:w-96 flex flex-col  2xl:text-sm  px-2 gap-y-5 mt-7"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full sm:w-96 flex  text-sm  px-2">
          <label
            data-tip={errors.userMobile && errors.userMobile.message}
            className={`form-control w-full  ${
              errors.userMobile && "tooltip tooltip-bottom"
            }`}
          >
            <div className="label justify-start">
              <span className=""> تلفن همراه </span>
            </div>

            <input
              type="text"
              id="userMobile"
              maxLength={11}
              {...register("userMobile", registerOptions.userMobile)}
              onKeyDown={(e: any) => {
                return onlyDigits(e);
              }}
              placeholder="تلفن همراه خود را وارد نمایید"
              className={`input h-9 input-bordered w-full placeholder:text-xs focus:outline-none ltr placeholder:text-right ${
                errors?.userMobile && "border-1 border-red-600"
              }`}
            />
          </label>
        </div>
        <div className="w-full sm:w-96 flex text-sm px-2 relative">
          <label
            data-tip={errors.password && errors.password.message}
            className={`form-control w-full  ${
              errors.password && "tooltip tooltip-bottom"
            }`}
          >
            <div className="label justify-start">
              <span className=""> رمز عبور</span>
            </div>

            <input
              id="password"
              maxLength={20}
              type={!showPassword ? "password" : "text"}
              {...register("password", registerOptions.password)}
              placeholder="رمز عبور خود را وارد نمایید"
              className={`input  h-9 input-bordered  w-full bg-white  placeholder:text-right placeholder:text-xs ltr focus:outline-none ${
                errors.password && "border-1 border-red-600"
              }`}
            />
          </label>
          <div
            onMouseDown={showPasswordEvent}
            // onMouseUp={showPasswordEvent}
            className={`${
              !getValues("password") && "hidden"
            } absolute cursor-pointer  w-6 right-4 bottom-2`}
          >
            {!showPassword ? (
              <EyeSvg className="h-[20px] w-[20px]" />
            ) : (
              <EyeoffSvg className="h-[20px] w-[20px]" />
            )}
          </div>
        </div>
        <div className="w-full flex items-center justify-center "></div>
        <div className="w-full sm:w-96 flex flex-col justify-center text-xs px-2 mt-2 gap-y-2">
          <button className="btn-general text-white flex justify-center items-center bg-gray-600 w-full">
            {isSubmitting ? (
              <SpinnerSVG className="animate-spin h-5 w-5 text-white" />
            ) : (
              <span>ورود</span>
            )}
          </button>
        </div>
        {/* <div className="w-full flex items-center justify-center ">
          <Link
            to={"/signUp"}
            className="text-sm text-center transition-all  text-color1"
          >
            قبلا ثبت‌ نام نکرده‌اید؟ اکنون ثبت‌ نام کنید
          </Link>
        </div> */}
      </form>
    </main>
  );
};

export default Login;
