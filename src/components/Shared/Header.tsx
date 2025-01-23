"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "../ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center md:justify-between gap-14">
          <div className="block md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Header logo  */}
          <div className="flex items-center space-x-2 h-32">
            <Image width={100} height={128} src="/logo.png" alt="" />
          </div>

          {/* Header search  */}
          <div className="hidden md:flex flex-1 max-w-[300px] rounded-full mx-4 ml-[300px]">
            <div className="relative w-full rounded-full">
              <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground rounded-full" />
              <Input
                placeholder="Search all agents..."
                className="pl-8 pr-4 rounded-full"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Image width={20} height={20} src="/twitter.png" alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.5 12C24.5 18.6274 19.1274 24 12.5 24C5.87258 24 0.5 18.6274 0.5 12C0.5 5.37258 5.87258 0 12.5 0C19.1274 0 24.5 5.37258 24.5 12ZM14.0119 7.80289L4.4818 11.6616C2.80482 12.3047 3.78554 12.9077 3.78554 12.9077C3.78554 12.9077 5.21712 13.39 6.44407 13.7516C7.67103 14.1134 8.32556 13.7114 8.32556 13.7114L14.0926 9.89296C16.1377 8.52619 15.6469 9.65166 15.1561 10.134C14.0928 11.179 12.3339 12.827 10.8614 14.1535C10.207 14.7162 10.5342 15.1986 10.8205 15.4397C11.653 16.132 13.6135 17.3906 14.5042 17.9627C14.7513 18.1213 14.9161 18.2272 14.9516 18.2533C15.1561 18.4141 16.3 19.1376 16.9966 18.9768C17.6931 18.8161 17.775 17.8916 17.775 17.8916L18.7974 11.5811C18.8876 10.9946 18.9777 10.4202 19.0618 9.88404C19.2832 8.47294 19.4631 7.32636 19.4928 6.91861C19.6155 5.55209 18.143 6.11476 18.143 6.11476C18.143 6.11476 14.9526 7.40096 14.0119 7.80289Z"
                fill="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
            >
              <path
                d="M11.75 21.5625V22.8212C11.7501 23.3139 11.6531 23.8017 11.4645 24.2568C11.276 24.7119 10.9996 25.1255 10.6513 25.4737L9.875 26.25H21.125L20.3487 25.4737C20.0004 25.1255 19.724 24.7119 19.5355 24.2568C19.3469 23.8017 19.2499 23.3139 19.25 22.8212V21.5625M26.75 6.5625V18.75C26.75 19.4959 26.4537 20.2113 25.9262 20.7387C25.3988 21.2662 24.6834 21.5625 23.9375 21.5625H7.0625C6.31658 21.5625 5.60121 21.2662 5.07376 20.7387C4.54632 20.2113 4.25 19.4959 4.25 18.75V6.5625M26.75 6.5625C26.75 5.81658 26.4537 5.10121 25.9262 4.57376C25.3988 4.04632 24.6834 3.75 23.9375 3.75H7.0625C6.31658 3.75 5.60121 4.04632 5.07376 4.57376C4.54632 5.10121 4.25 5.81658 4.25 6.5625M26.75 6.5625V15C26.75 15.7459 26.4537 16.4613 25.9262 16.9887C25.3988 17.5162 24.6834 17.8125 23.9375 17.8125H7.0625C6.31658 17.8125 5.60121 17.5162 5.07376 16.9887C4.54632 16.4613 4.25 15.7459 4.25 15V6.5625"
                stroke="#6A6A6A"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Button
              variant="default"
              className="bg-black text-white hover:bg-black/90 h-[48px]"
            >
              Start Buying
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t p-4">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search all agents..."
                  className="pl-8 pr-4 w-full"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <Image width={20} height={20} src="/twitter.png" alt="" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.5 12C24.5 18.6274 19.1274 24 12.5 24C5.87258 24 0.5 18.6274 0.5 12C0.5 5.37258 5.87258 0 12.5 0C19.1274 0 24.5 5.37258 24.5 12ZM14.0119 7.80289L4.4818 11.6616C2.80482 12.3047 3.78554 12.9077 3.78554 12.9077C3.78554 12.9077 5.21712 13.39 6.44407 13.7516C7.67103 14.1134 8.32556 13.7114 8.32556 13.7114L14.0926 9.89296C16.1377 8.52619 15.6469 9.65166 15.1561 10.134C14.0928 11.179 12.3339 12.827 10.8614 14.1535C10.207 14.7162 10.5342 15.1986 10.8205 15.4397C11.653 16.132 13.6135 17.3906 14.5042 17.9627C14.7513 18.1213 14.9161 18.2272 14.9516 18.2533C15.1561 18.4141 16.3 19.1376 16.9966 18.9768C17.6931 18.8161 17.775 17.8916 17.775 17.8916L18.7974 11.5811C18.8876 10.9946 18.9777 10.4202 19.0618 9.88404C19.2832 8.47294 19.4631 7.32636 19.4928 6.91861C19.6155 5.55209 18.143 6.11476 18.143 6.11476C18.143 6.11476 14.9526 7.40096 14.0119 7.80289Z"
                      fill="black"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                  >
                    <path
                      d="M11.75 21.5625V22.8212C11.7501 23.3139 11.6531 23.8017 11.4645 24.2568C11.276 24.7119 10.9996 25.1255 10.6513 25.4737L9.875 26.25H21.125L20.3487 25.4737C20.0004 25.1255 19.724 24.7119 19.5355 24.2568C19.3469 23.8017 19.2499 23.3139 19.25 22.8212V21.5625M26.75 6.5625V18.75C26.75 19.4959 26.4537 20.2113 25.9262 20.7387C25.3988 21.2662 24.6834 21.5625 23.9375 21.5625H7.0625C6.31658 21.5625 5.60121 21.2662 5.07376 20.7387C4.54632 20.2113 4.25 19.4959 4.25 18.75V6.5625M26.75 6.5625C26.75 5.81658 26.4537 5.10121 25.9262 4.57376C25.3988 4.04632 24.6834 3.75 23.9375 3.75H7.0625C6.31658 3.75 5.60121 4.04632 5.07376 4.57376C4.54632 5.10121 4.25 5.81658 4.25 6.5625M26.75 6.5625V15C26.75 15.7459 26.4537 16.4613 25.9262 16.9887C25.3988 17.5162 24.6834 17.8125 23.9375 17.8125H7.0625C6.31658 17.8125 5.60121 17.5162 5.07376 16.9887C4.54632 16.4613 4.25 15.7459 4.25 15V6.5625"
                      stroke="#6A6A6A"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <Button
                  variant="default"
                  className="bg-black text-white hover:bg-black/90 h-[48px]"
                >
                  Start Buying
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
