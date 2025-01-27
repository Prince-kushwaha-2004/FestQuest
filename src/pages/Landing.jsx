import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const NeumorphismButton = () => {
    return (
      <button
        className={`
          px-4 py-2 rounded-full 
          flex items-center gap-2 
          text-teal-700 text-lg
          shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
          
          transition-all
  
          hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
          hover:text-teal-700
      `}
      >
        <span>Login</span>
      </button>
    );
  };

  const BounceCard = ({ className, children }) => {
    return (
      <motion.div
        whileHover={{ scale: 0.95, rotate: "-1deg" }}
        className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
      >
        {children}
      </motion.div>
    );
  };

  const CardTitle = ({ children }) => {
    return (
      <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
    );
  };

  const items = [
    {
      key: "1",
      label: <Link to="register">Participant</Link>,
    },
    {
      key: "2",
      label: <Link to="login">Organisation</Link>,
    },
  ];

  const BubbleText = () => {
    useEffect(() => {
      const spans = document.querySelectorAll(".hover-text span");

      spans.forEach((span) => {
        span.addEventListener("mouseenter", function () {
          this.style.fontWeight = "900";
          this.style.color = "rgb(0,0,0)";

          const leftNeighbor = this.previousElementSibling;
          const rightNeighbor = this.nextElementSibling;

          if (leftNeighbor) {
            leftNeighbor.style.fontWeight = "500";
            leftNeighbor.style.color = "rgba(0,0,0,1)";
          }
          if (rightNeighbor) {
            rightNeighbor.style.fontWeight = "500";
            rightNeighbor.style.color = "rgba(0,0,0,1)";
          }
        });

        span.addEventListener("mouseleave", function () {
          this.style.fontWeight = "800";
          this.style.color = "rgb(0,0,0)";

          const leftNeighbor = this.previousElementSibling;
          const rightNeighbor = this.nextElementSibling;

          if (leftNeighbor) {
            leftNeighbor.style.fontWeight = "100";
            leftNeighbor.style.color = "rgb(0,0,0)";
          }

          if (rightNeighbor) {
            rightNeighbor.style.fontWeight = "100";
            rightNeighbor.style.color = "rgb(0,0,0)";
          }
        });
      });
    }, []);

    return (
      <h2 className="hover-text text-center text-4xl md:text-6xl xl:text-8xl font-semibold text-gray-800 leading-tight">
        <Text>Think, plan, and track</Text>
      </h2>
    );
  };

  const Text = ({ children }) => {
    return (
      <>
        {children.split("").map((child, idx) => (
          <span
            style={{
              transition: "0.35s font-weight, 0.35s color",
            }}
            key={idx}
          >
            {child}
          </span>
        ))}
      </>
    );
  };

  const BlockInTextCard = ({ examples }) => {
    return (
      <div className="w-full max-w-5xl space-y-6">
        <Typewrite examples={examples} />
      </div>
    );
  };

  const LETTER_DELAY = 0.05;
  const BOX_FADE_DURATION = 0.125;

  const FADE_DELAY = 5;
  const MAIN_FADE_DURATION = 0.25;

  const SWAP_DELAY_IN_MS = 5500;

  const Typewrite = ({ examples }) => {
    const [exampleIndex, setExampleIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setExampleIndex((pv) => (pv + 1) % examples.length);
      }, SWAP_DELAY_IN_MS);

      return () => clearInterval(intervalId);
    }, []);

    return (
      <p className="text-2xl md:text-6xl xl:text-7xl mb-4 text-center leading-tight font-semibold text-neutral-400 uppercase">
        <span className="ml-3">
          {" "}
          {examples[exampleIndex].split("").map((l, i) => (
            <motion.span
              initial={{
                opacity: 1,
              }}
              animate={{
                opacity: 0,
              }}
              transition={{
                delay: FADE_DELAY,
                duration: MAIN_FADE_DURATION,
                ease: "easeInOut",
              }}
              key={`${exampleIndex}-${i}`}
              className="relative"
            >
              <motion.span
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: i * LETTER_DELAY,
                  duration: 0,
                }}
              >
                {l}
              </motion.span>
              <motion.span
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  delay: i * LETTER_DELAY,
                  times: [0, 0.1, 1],
                  duration: BOX_FADE_DURATION,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
              />
            </motion.span>
          ))}
        </span>
      </p>
    );
  };
  return (
    <div className="min-h-screen flex flex-col h-screen overflow-y-scroll">
      <nav className="bg-white/80 backdrop-blur-sm">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="flex items-center transition-all hover:scale-103">
            <img src="src/assets/festLogo.png" className="h-12" alt="Logo" />
          </div>
          <div className="flex items-center space-x-4">
            <Link to="login">
              <div className="flex items-center justify-center">
                <NeumorphismButton />
              </div>
            </Link>
            <Space direction="vertical">
              <Space wrap>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomRight"
                >
                  <button className="px-4 py-2 text-[#00637C] text-lg hover:bg-gray-100 rounded-full">
                    {" "}
                    Sign Up <CaretDownOutlined />
                  </button>
                </Dropdown>
              </Space>
            </Space>
          </div>
        </div>
      </nav>

      <div className="m-4 mt-0 border-2 border-slate-200 flex-1 bg-gradient-to-br from-[#ddeeff] to-[#e6f6d6] rounded-4xl px-5 md:px-6 lg:px-60 2xl:px-80 py-15 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl xl:text-8xl font-semibold text-gray-800 text-center leading-tight">
          <BubbleText />
          <BlockInTextCard
            examples={["all in one place", "all in one place"]}
          />
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-700 mb-8 text-center max-w-2xl">
          Efficiently manage your events and boost productivity with our
          intuitive event planning platform.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border-1 transition-all hover:scale-103 border-amber-400 bg-yellow-50 backdrop-blur-sm shadow-md rounded-lg p-8 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Seamless Integration
            </h3>
            <p className="text-gray-600">
              Connect with your favorite tools and apps to streamline your event
              management workflows.
            </p>
          </div>
          <div className="border-1 transition-all hover:scale-103 border-teal-700 bg-cyan-50 backdrop-blur-sm shadow-md rounded-lg p-8 hover:shadow-2xl ">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Real-Time Tracking
            </h3>
            <p className="text-gray-600">
              Monitor progress, view task status, and receive timely updates on
              your events.
            </p>
          </div>
          <div className="transition-all hover:scale-103 backdrop-blur-sm border-1 border-red-800 bg-red-50 shadow-md rounded-lg p-8 hover:shadow-2xl ">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Comprehensive Planning
            </h3>
            <p className="text-gray-600">
              Easily create detailed event plans, set deadlines, and assign
              tasks.
            </p>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800 mt-10">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
          <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
            Grow faster with our
            <span className="text-slate-400"> all in one solution</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
          >
            Get Started
          </motion.button>
        </div>
        <div className="mb-4 grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-4">
            <CardTitle>Seamless Integration</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center text-md font-semibold text-indigo-50">
                Easily create detailed event plans, set deadlines, and assign
                tasks.
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-8">
            <CardTitle>Real-Time Tracking</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center text-xl font-semibold text-orange-50">
                Monitor progress, view task status, and receive timely updates
                on your events.
              </span>
            </div>
          </BounceCard>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-8">
            <CardTitle>Comprehensive Planning</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center text-xl font-semibold text-emerald-50">
                Connect with your favorite tools and apps to streamline your
                event management workflows.
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-4">
            <CardTitle>Seamless Integration</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-red-50">
                Connect with your favorite tools and apps to streamline your
                event management workflows.
              </span>
            </div>
          </BounceCard>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-[#ddeeff] to-[#e6f6d6]">
        <div className="mx-auto w-full p-4 py-6 px-20 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="flex mb-6 md:mb-0 items-center transition-all hover:scale-103">
              <img src="src/assets/festLogo.png" className="h-12" alt="Logo" />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      FestQuest
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Events
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2025{" "}
              <a href="" className="hover:underline">
                FestQuest™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
