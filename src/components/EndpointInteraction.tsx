"use client";

import React, { useState } from "react";
import JSONPretty from "react-json-pretty";
import { EndpointInteractionProps } from "../types/endpointinteraction";
import { api } from "../utils/axios";
import { Loader } from "./Loader";
import { customTheme } from "../data/codeTheme";
type Tab = "Success" | "Error";

export const EndpointInteraction: React.FC<EndpointInteractionProps> = ({
  title,
  description,
  endpoint,
  method,
  example,
  params,
}) => {
  const [activeTab, SetActiveTab] = useState<Tab>("Success");

  const [iscopied, SetIsCopied] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const [errorCode, setErrorCode] = useState<string>("")

  const [paramsObject, setObjectParams] =
    useState<Record<string, string>>(params);

  const [response, setResponse] = useState<any>();

  const switchTab = (tab: Tab) => {
    SetActiveTab(tab);
  };

  const copyToClipboard = async (data: any) => {
    try {
      const text = JSON.stringify(data, null, 2);
      await navigator.clipboard.writeText(text);
      SetIsCopied(true);

      setTimeout(() => {
        SetIsCopied(false);
      }, 1000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const endpointRoute = Object.values(paramsObject).reduce(
    (acc, current) => `${acc}/${current}`,
    ``
  );

  const queryEndpoint = async () => {
    try {
      setLoading(true);
      const queryResponse = await (api as any)[method.toLowerCase()](
        `/rates${endpointRoute}`
      );
      switchTab("Success");
      setResponse(queryResponse.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      switchTab("Error");
      setErrorCode((err as any).status.toString())
      setResponse({Error: (err as any).message});
    }
  };

  return (
    <>
      {/* Main container for the endpoint card */}
      <div className="bg-white/5 font-[inter] rounded-3xl m-auto md:w-1/2 w-[90%] md:max-w-[54.6rem] mb-[2rem] font-sans">
        {/* Title section */}
        <h1 className="text-xl font-medium text-[#ffffff] px-5 py-4">
          {title}
        </h1>

        {/* Divider */}
        <hr className="border-[0.05rem] border-color-[#141414]" />

        {/* Description section */}
        <p className="text-lg font-normal text-white/80 border-t border-white/10 px-5 py-3">
          {description}
        </p>

        {/* Divider */}
        <hr className="border-[0.05rem] border-color-[#141414]" />

        {/* Endpoint details list */}
        <div className="w-full border-t border-white/10 pt-3 pb-1 px-1">
          <ul className="px-3 mb-3">
            {/* Endpoint URL */}
            <li className="text-[#ffffff] text-lg font-medium leading-5 flex items-center gap-3 py-1 px-3 mb-2">
              <div className="w-[.5rem] h-[.5rem] bg-white rounded-xl"></div>
              Endpoint:
              <span className="text-base text-white/80 font-normal bg-white/5 h-[2rem] flex items-center border-[.1rem] border-white/10 rounded-xl px-3 py-2 ms-2">
                {endpoint}
              </span>
            </li>

            {/* HTTP Method */}
            <li className="text-[#ffffff] text-lg font-medium leading-5 flex items-center gap-3 py-1 px-3 mb-2">
              <div className="w-[.5rem] h-[.5rem] bg-white rounded-xl"></div>
              Method:
              <span className="text-base ml-[1.2rem] text-white/80 uppercase font-normal bg-white/5 h-[2rem] flex items-center border-[.1rem] border-white/10 rounded-xl px-3 py-2 ms-2">
                {method}
              </span>
            </li>

            {/* Example request */}
            <li className="text-[#ffffff] text-lg font-medium leading-5 flex items-center gap-3 py-1 px-3 mb-2">
              <div className="w-[5.rem] h-[.5rem] bg-white rounded-xl"></div>
              Example:
              <span className="text-base ml-[.8rem] text-white/80 font-normal bg-white/5 h-[2rem] flex items-center border-[.1rem] border-white/10 rounded-xl px-3 py-2 ms-2  height-[4.4rem] focus:outline-hidden text-base text-white/80 font-normal flex items-center border-[.1rem] border-white/10 rounded-xl px-3 py-2 ms-2">
                {example}
              </span>
            </li>
          </ul>

          <hr className="border-[0.05rem] border-color-[#141414]" />
          <div className="text-lg font-normal text-white/80 border-t border-white/10 px-5 py-3">
            {Object.keys(paramsObject).map((key) => (
              <div key={key} className="text-lg font-medium flex mb-[1rem]">
                {`${key}:`}

                <span className="ml-auto w-17/20">
                  <input
                    type="text"
                    className="w-1/2 height-[4.4rem] focus:outline-hidden text-base text-white/80 font-normal bg-transparent flex items-center border-[.1rem] border-white/10 rounded-xl px-3 py-2 ms-2"
                    onChange={(e) => {
                      setObjectParams((prev) => ({
                        ...prev,
                        [key]: (e.target as HTMLInputElement).value,
                      }));
                    }}
                  />
                </span>
              </div>
            ))}
            <button
              className="ml-[16%] height-[4.4rem] bg-button flex items-center justify-center gap-2 px-2 py-2 !rounded-[1rem] hover:bg-[#3C3C3E] transition-colors max-w-[10rem] !w-screen cursor-pointer"
              onClick={() => queryEndpoint()}
              disabled={loading}
            >
              {loading ? <Loader className="spinner" /> : `Query`}
            </button>
          </div>

          {/* Response block container */}
          {response && (
            <div
              className="bg-[#2C2C2C] w-full h-auto rounded-3xl border-t border-white/10"
              style={{
                boxShadow:
                  "-2px 3px 4px -1px rgba(18,18,23,0.13), inset 0px -1px 0px 0px rgba(255,255,255,0.02)",
              }}
            >
              {/* Response header with copy action */}
              <div className="w-full flex justify-between items-center py-3 px-5">
                <p className="text-[#ffffff] text-lg font-medium leading-5 ">
                  Response
                </p>

                {/* Copy to clipboard icon and action */}
                <span
                  onClick={() => copyToClipboard(response)}
                  title="Copy Response"
                  className="text-white/50 flex items-center gap-2 font-medium cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={20}
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      color="currentColor"
                    >
                      <path d="M9 15c0-2.828 0-4.243.879-5.121C10.757 9 12.172 9 15 9h1c2.828 0 4.243 0 5.121.879C22 10.757 22 12.172 22 15v1c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1c-2.828 0-4.243 0-5.121-.879C9 20.243 9 18.828 9 16z"></path>
                      <path d="M17 9c-.003-2.957-.047-4.489-.908-5.538a4 4 0 0 0-.554-.554C14.43 2 12.788 2 9.5 2c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554C2 4.57 2 6.212 2 9.5c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554c1.05.86 2.58.906 5.538.908"></path>
                    </g>
                  </svg>
                  {iscopied && "Copied!"}
                </span>
              </div>

              {/* Divider */}
              <hr className="border-[0.05rem] border-color-[#141414]" />

              {/* Tab selection for success or error */}
              <div className="w-full flex gap-5 border-t border-white/10 px-5">
                {/* Success tab */}


                {/* Error tab */}
                {activeTab === "Error" ? <div
                  // onClick={() => switchTab("Error")}
                  className={`text-base text-[#ffffff] font-medium leading-5 flex gap-3 py-3 pr-2 cursor-pointer ${activeTab === "Error" ? "border-b border-[#F53D6B]" : ""
                    }`}
                >
                  <div className="w-[.6rem] h-[1.2rem] bg-[#F53D6B] rounded-2xl"></div>
                  {errorCode}
                </div> : <div
                  // onClick={() => switchTab("Success")}
                  className={`text-base text-[#ffffff] font-medium leading-5 flex gap-3 py-3 pr-2 cursor-pointer ${activeTab === "Success" ? "border-b border-[#39C65D]" : ""
                    }`}
                >
                  <div className="w-[.6rem] h-[1.2rem] bg-[#39C65D] rounded-2xl"></div>
                  200
                </div>}
              </div>

              {/* Divider */}
              <hr className="border-[0.05rem] border-color-[#141414] -mt-[.1rem]" />

              {/* JSON display block */}
              <div className="w-full max-h-[50rem] text-[#ffffff] text-base leading-5 border-t border-white/10 overflow-auto px-5 py-4">
                <JSONPretty data={response} theme={customTheme} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
