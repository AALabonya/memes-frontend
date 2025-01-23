"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" mt-12">
      {/* Footer Navigation */}
      <div className="flex flex-wrap justify-center space-x-6 gap-y-4 text-center mb-8">
        {["About", "Blog", "Jobs", "Press", "Accessibility", "Partners"].map(
          (item) => (
            <Link
              key={item}
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {item}
            </Link>
          )
        )}
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center md:space-x-6 space-x-2 mb-8">
        {[
          { platform: "facebook", icon: <FaFacebookF /> },
          { platform: "instagram", icon: <FaInstagram /> },
          { platform: "twitter", icon: <FaTwitter /> },
          { platform: "github", icon: <FaGithub /> },
          { platform: "youtube", icon: <FaYoutube /> },
        ].map(({ platform, icon }) => (
          <Link
            key={platform}
            href={`https://www.${platform}.com`}
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{platform}</span>
            <div className="h-10 w-10  rounded-full flex items-center justify-center">
              {icon}
            </div>
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-muted-foreground pb-8">
        © 2024 Your Company, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
