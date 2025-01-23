"use client";
import Image from "next/image";
import { Card } from "../ui/card";

const Hero = () => {
  return (
    <div className="lg:py-16 md:py-8 py-4">
      {/* Hero Section */}
      <div className="flex justify-center">
        <div className="flex justify-center  md:flex-row flex-col md:gap-[40px] space-y-8 md:space-y-0 md:mb-12 mb-0 w-full max-w-[992px]">
          <div className="space-y-2 md:space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold leading-[60px] text-center md:text-left">
                Buy Memes.
                <br />
                In Two Clicks.
              </h1>
              <p className="md:text-[24px] text-[13px]  text-muted-foreground text-center md:text-left">
                The fastest way to buy memes in just two clicks.
                <br />
                Under 1 minute to sign up and no wallet needed.
              </p>
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-4 w-[328]">
              <Card className="p-4 bg-gray-50">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm text-muted-foreground">
                    Total users
                  </span>
                </div>
                <div className="flex">
                  <div className="flex -space-x-6 rtl:space-x-reverse">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        width={5}
                        height={5}
                        src="/avatar.png"
                        alt="Avatar 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        width={5}
                        height={5}
                        src="/avater1.png"
                        alt="Avatar 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        width={5}
                        height={5}
                        src="/avater2.png"
                        alt="Avatar 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-2xl font-bold">52,630</p>
                </div>
              </Card>

              <Card className="p-4 bg-gray-50 w-[318px]">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm text-muted-foreground">
                    Trade volume
                  </span>
                </div>
                <p className="text-2xl font-bold">$1,288,314,266</p>
              </Card>
            </div>
          </div>

          <div>
            <div className="w-full max-w-[300px] h-auto md:w-[300px] md:ml-0 flex justify-center md:h-[195px] aspect-square rounded-t-md bg-[#C25353] relative">
              <div className="absolute top-4 md:right-4 right-0">
                <Image
                  width={60}
                  height={60}
                  src="/verified-icon.png"
                  alt=""
                  className=""
                />
              </div>
            </div>

            <div className="block h-auto md:h-[104px]">
              <div className="p-4 bg-white shadow-md rounded-md">
                <div className="flex flex-row items-start md:items-center gap-[62px]  mb-1">
                  <span className="font-medium text-[18px] md:text-[20px]">
                    VIRTUAL
                  </span>
                  <span className="text-green-500 flex items-center gap-1 mt-2 md:mt-0">
                    <span
                      className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-transparent border-b-green-500"
                      aria-hidden="true"
                    ></span>
                    0.59%
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="font-semibold text-[14px]">$2.74</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Market Cap</p>
                    <p className="font-semibold text-[14px]">$1.7B</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
