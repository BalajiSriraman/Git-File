"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import Combobox from "@components/ComboBox";
import { Dialog, Menu, Transition } from "@headlessui/react";
import noLoginStateLogo from "@images/nil_login.png";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { parseRepo } from "@utils/parseRepo";
import { Button } from "@components/shadeCnUI/Button";
import { Input } from "@components/shadeCnUI/Input";

interface DataProps {
  props: any;
}

const Modal: React.FC<DataProps> = (data) => {
  const [isChecked, setIsChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  function enableAnonymity() {
    setIsChecked(!isChecked);
    localStorage.setItem("checkBoxState", JSON.stringify(!isChecked));
  }

  useEffect(() => {
    const checkBoxState = localStorage.getItem("checkBoxState");
    if (checkBoxState !== null) {
      setIsChecked(JSON.parse(checkBoxState));
    }
  }, []);

  const [repoDetails, setRepoDetails] = useState<{
    userName: string;
    repoName: string;
  }>();

  const handleRepoSelection = (selectedData: { full_name: string }) => {
    const parsedData = parseRepo(selectedData.full_name);
    setRepoDetails(parsedData);
  };

  useEffect(() => {
    if (repoDetails) {
      setRepoDetails(repoDetails);
    }
  }, [repoDetails]);

  return (
    <>
      <div className="relative  text-right">
        <Menu as="div" className="relative inline-block text-left">
          <div className="flex items-center">
            <Button
              onClick={() => setOpen(true)}
              className="bg-white border-1 hover:bg-slate-300 flex justify-center items-center gap-2 text-black space-x-2 mr-5"
              variant={"outline"}
            >
              Browse Repository
            </Button>
            <Transition.Root show={open} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={() => setOpen(false)}
              >
                <div className="flex items-center justify-center min-h-screen">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-800  opacity-30" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <div className="bg-black h-[600px] p-10 rounded-lg flex flex-col justify-between items-center">
                      <div className="text-center space-y-10">
                        <Dialog.Title className="text-white text-3xl font-medium font-sans">
                          Choose Your Favorite Repository to Explore
                        </Dialog.Title>
                        <div className="flex flex-col items-center m-5 space-y-10">
                          <div className="flex justify-center items-center space-x-3">
                            <form className="flex flex-row gap-3">
                              <Input
                                type="email"
                                placeholder="Paste your github repo link here"
                                className="w-[420px]"
                              />
                              <button id="submitButton">
                                <ArrowRightIcon className="h-6 w-5 bg-white rounded text-black " />
                              </button>
                            </form>
                          </div>
                          <h3>or</h3>
                          <div>
                            <Combobox
                              data={data.props}
                              emitClickEvent={handleRepoSelection}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center m-5">
                        <Link
                          href={`/file/${repoDetails?.userName}/${repoDetails?.repoName}/main`}
                          className="bg-white text-black hover:bg-black hover:border-2 hover:border-solid hover:border-white hover:text-white outline-none border-none text-lg font-semibold text-opacity-100 z-10 tracking-wide cursor-pointer h-12 w-96  flex justify-center items-center space-x-4 rounded-lg "
                        >
                          <p>Open Repository</p>
                          <ArrowRightIcon
                            className="h-7 w-5"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>
            <Menu.Button className="inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2">
              <Image
                priority
                src={noLoginStateLogo}
                className="rounded-full"
                width={40}
                height={50}
                alt="Logo"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-12 bg-black w-24  rounded z-10">
              <button className="group flex w-full items-center rounded-md px-2 py-1 text-[12px] space-x-4 hover:text-[#888888] text-white group-hover:text-white">
                Logout
                <ArrowRightOnRectangleIcon className="w-5 h-5 text-white pl-1 group-hover:text-red-500" />
              </button>
              <div className="border-b border-zinc-500 mx-2"></div>

              <div className="px-2 py-1 text-[12px] flex justify-around text-white items-center">
                <span className="mr-2">Browse Anonymous</span>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value="true"
                  checked={isChecked}
                  onChange={enableAnonymity}
                  className="w-3 h-3  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="border-b border-zinc-500 mx-2"></div>
              <button className="px-2 py-1 text-[12px] text-white hover:text-[#888888] ">
                Contact Us
              </button>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
};

export default Modal;
