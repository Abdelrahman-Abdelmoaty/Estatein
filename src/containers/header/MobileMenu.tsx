"use client";
import { HamburgerBurger, XMark } from "@/components/SVGs";
import { cn } from "@/utils/lib";
import { useState } from "react";

const MobileMenu = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };
  return (
    <>
      <button
        aria-label="Open Menu"
        className="transition hover:opacity-80 md:hidden"
        onClick={handleShow}
      >
        <HamburgerBurger />
      </button>
      <div
        className={cn(
          "fixed left-0 top-0 z-[9999] flex h-screen w-screen translate-x-full flex-col gap-[30px] bg-grey-08 px-[50px] py-[100px] font-semibold transition-all duration-500",
          {
            "translate-x-0": show,
          },
        )}
      >
        <a
          href="/"
          aria-label="home"
          className="rounded-xl border-l-2 border-grey-15 p-3"
        >
          Home
        </a>
        <a
          href="/about-us"
          aria-label="about us"
          className="rounded-xl border-l-2 border-grey-15 p-3"
        >
          About Us
        </a>
        <a
          href="/properties"
          aria-label="properties"
          className="rounded-xl border-l-2 border-grey-15 p-3"
        >
          Properties
        </a>
        <a
          href="/services"
          aria-label="services"
          className="rounded-xl border-l-2 border-grey-15 p-3"
        >
          Services
        </a>
        <a
          href="/contact-us"
          aria-label="contact us"
          className="rounded-xl border-l-2 border-grey-15 p-3"
        >
          Contact Us
        </a>
        <button
          aria-label="Close Menu"
          className="absolute right-[20px] top-[20px]"
          onClick={handleHide}
        >
          <XMark className="h-10 w-10" />
        </button>
      </div>
    </>
  );
};

export default MobileMenu;
