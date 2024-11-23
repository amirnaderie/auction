"use client";
import React, { useEffect, useState } from "react";
import cars from "./cars.json";
import Image from "next/image";
import MapPinSvg from "@/app/components/svg/mapPinSvg";
import ClockSvg from "@/app/components/svg/clockSvg";
import TagSvg from "@/app/components/svg/tagSvg";
import { CarType } from "@/app/types";
const Auction = () => {
  const [carsData, setCarsData] = useState<CarType[]>([]);
  const [imageIsLoading, setImageIsLoading] = useState<boolean>(true);
  const options = { minimumFractionDigits: 0, maximumFractionDigits: 0 };
  const imageLoader = (imageAttachment: string) => {
    return imageAttachment;
  };
  useEffect(() => {
    async function fetchAPI() {
      try {
        const carsDataTmp = await cars;
        const carDataLocal: CarType[] = carsDataTmp.map((car: any) => ({
          ...car,
          expiresAt: new Date(car.expiresAt),
        }));

        setCarsData(carDataLocal);
      } catch (error) {
        console.log("errror");
      }
    }
    fetchAPI();
  }, []);

  return (
    <div className="h-full w-full xl:w-4/5 flex flex-col mt-2 gap-y-1 md:gap-y-3 px-1">
      <div className="w-full flex flex-col justify-start items-center gap-y-1 md:gap-y-4 ">
        <h2 className="text-center">مزایده خودرو</h2>
        <div className="text-sm leading-8 text-justify px-2">
          در سایت مزایده خودرو ، اگهی مزایدات خودرو به روز از منابع مختلف و
          معتبر دولتی جمعاوری میشود و اطلاعات شرکت در مزایده را ارائه میدهد.
          همچنین سایت دارای خدمات مختلفی برای راحتی در یافتن خودرو مدنظر شما
          میباشد که شامل دسته بندی استان ها، درج شهر برگزاری مزایده، پشتیبانی
          سوال و جواب نحوه شرکت و ... است.
        </div>
      </div>
      <div className=" w-full border border-blue-600 grid grid-cols-2  lg:grid-cols-6 grid-flow-row-dense  p-2 gap-x-3 gap-y-3 justify-start items-center content-center rounded-md text-sm ">
        <select className="border  rounded-md col-span-2" defaultValue={0}>
          <option disabled value={0}>
            انتخاب استان
          </option>
          <option value={1}>مزایده خودرو تهران (145)</option>
          <option value={2}>مزایده خودرو بوشهر (825)</option>
          <option value={3}>مزایده خودرو شیراز (15)</option>
          <option value={4}>مزایده خودرو رشت (90)</option>
          <option value={5}>مزایده خودرو تبریز (102)</option>
        </select>
        <select className="border  rounded-md col-span-2" defaultValue={0}>
          <option disabled value={0}>
            انتخاب دسته بندی
          </option>
          <option value={1}>مزایده وانت و پیکاپ (23)</option>
          <option value={2}>مزایده خودرو سنگین (45)</option>
          <option value={3}>موتور سیکلت مزایده ای (15)</option>
          <option value={4}>بلاک (32)</option>
          <option value={5}>مزایده خودرو سواری (236)</option>
        </select>
        <button className="bg-sky-700 h-8 text-white  rounded-lg hover:ring-2">
          جستجو
        </button>
        <button className="  text-black h-8 rounded-lg border hover:ring-2">
          بازنشانی همه
        </button>
      </div>
      <div className="h-3/5 w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 grid-flow-row-dense  p-2 gap-x-3 gap-y-3 justify-start items-center content-center  text-sm overflow-y-auto">
        {carsData.map((car: CarType, index: number) => (
          <div
            className="h-56 w-full flex flex-col border  justify-start items-center rounded-xl overflow-hidden"
            key={index}
          >
            <div className="h-7 w-full flex justify-end items-start relative overflow-hidden">
              <div
                className={`${
                  !car.isSpecial && "invisible"
                } w-16 h-8 bg-pink-300 px-4  py-1.5 absolute -top-1 -left-2 rounded-xl`}
              >
                {" "}
                ویژه
              </div>
            </div>
            <div className="h-48 flex flex-col md:flex-row justify-start items-start w-full gap-x-2">
              <div className="w-24 flex justify-center">
                <Image
                  src={`/Images/${car.url}`}
                  // fill={true}
                  alt="Picture of the Car"
                  onLoad={() => setImageIsLoading(false)}
                  className="rounded-md w-20 h-20"
                  width={50}
                  height={100}                                          
                />
              </div>
              <div className="h-full flex flex-col justify-between p-2 text-xs">
                <div className="text-sn leading-6 font-semibold">
                  {car.name}
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="flex items-center gap-x-1">
                    <MapPinSvg height={12} width={12} /> مزایده خودرو {car.city}
                  </div>
                  <div className=" flex items-center gap-x-1">
                    <ClockSvg height={12} width={12} />
                    <span className="font-semibold">مهلت شرکت در مزایده:</span>
                    {Math.floor(
                      (new Date(car.expiresAt).getTime() -
                        new Date().getTime()) /
                        (1000 * 3600 * 24)
                    ) < 1
                      ? "آگهی منقضی شده"
                      : `${Math.floor(
                          (new Date(car.expiresAt).getTime() -
                            new Date().getTime()) /
                            (1000 * 3600 * 24)
                        ).toString()} روز`}
                  </div>
                  <div className="font-semibold flex items-center gap-x-1">
                    <TagSvg height={12} width={12} stroke="black" />
                    قیمت :{" "}
                    {car.price
                      ? `${new Intl.NumberFormat("fa-IR", {
                          style: "currency",
                          currency: "Rls",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })
                          .format(car.price)
                          .replace(/ریال|RLS/gi, "")
                          .replaceAll("٬", "/")
                          .trim()} تومان`
                      : "تماس با مزایده گذار"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auction;
