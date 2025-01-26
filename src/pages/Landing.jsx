import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const LandingPage = () => {
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
      <div className="w-full max-w-4xl space-y-6">
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
          <div className="flex items-center">
            <img src="src/assets/festLogo.png" className="h-12" alt="Logo" />
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="login"
              className="px-6 py-2 text-lg bg-[#00637C] text-white rounded-full hover:bg-[#00637cc0] "
            >
              Login
            </Link>
            <Space direction="vertical">
              <Space wrap>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomRight"
                >
                  <button className="px-4 py-2 text-[#00637C] text-lg hover:bg-indigo-50 rounded-full">
                    {" "}
                    Sign Up <CaretDownOutlined />
                  </button>
                </Dropdown>
              </Space>
            </Space>
          </div>
        </div>
      </nav>

      <div className="m-4 mt-0 border-2 border-slate-200 flex-1 bg-gradient-to-br from-[#e6f3ff] via-[#f0f9e6] to-[#fff0f4] rounded-4xl px-4 md:px-6 lg:px-60 2xl:px-80 py-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl xl:text-8xl font-semibold text-gray-800 text-center leading-tight">
          <BubbleText /> <br />
          <span>
            <div>
              <BlockInTextCard
                examples={["all in one place", "all in one place"]}
              />
            </div>{" "}
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-700 mb-8 text-center max-w-2xl">
          Efficiently manage your events and boost productivity with our
          intuitive event planning platform.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border-1 border-amber-400 bg-yellow-50 backdrop-blur-sm shadow-md rounded-lg p-8 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Seamless Integration
            </h3>
            <p className="text-gray-600">
              Connect with your favorite tools and apps to streamline your event
              management workflows.
            </p>
          </div>
          <div className="border-1 border-teal-700 bg-cyan-50 backdrop-blur-sm shadow-md rounded-lg p-8 hover:shadow-xl ">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Real-Time Tracking
            </h3>
            <p className="text-gray-600">
              Monitor progress, view task status, and receive timely updates on
              your events.
            </p>
          </div>
          <div className=" backdrop-blur-sm border-1 border-red-800 bg-red-50 shadow-md rounded-lg p-8 hover:shadow-xl ">
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
    </div>
  );
};

export default LandingPage;
