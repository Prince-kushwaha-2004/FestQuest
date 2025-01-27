import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
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
      label: <Link to="orgregister">Organisation</Link>,
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
    <div className="min-h-screen flex flex-col">
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

      <div className="m-4 mt-0 border-2 border-slate-200 flex-1 bg-gradient-to-br from-[#e4f1fe] via-[#f4feea] to-[#fdeef2] rounded-4xl px-2 md:px-6 lg:px-60 2xl:px-80 py-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl xl:text-8xl font-semibold text-gray-800 text-center leading-tight">
          <BubbleText /> <br />
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
    </div>
  );
};

export default LandingPage;
