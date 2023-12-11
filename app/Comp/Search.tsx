"use client";

import { BiSearch } from 'react-icons/bi'

const Search = () => {
  return (
    <div
      className="
    border-[1px]
    w-full
    md:w-auto
    py-2
    transition
    shadow-sm
    rounded-full
    hover:shadow-md
    cursor-pointer
    "
    >
      <div
        className="
        flex flex-row items-center justify-between"
      >
        <div
          className="
            text-sm
            font-semibold
            px-6"
        >
          Anywhere
        </div>
        <div
          className="
            hidden
            sm:block
            text-sm
            font-semibold
            px-6
            border-x-[1px]
            text-center
            flex-1"
        >
          Any Day
        </div>
        <div 
            className="
            text-sm
            pl-6 pr-2
            text-gray-600
            flex flex-row
            items-center
            gap-3">
                <div className="hidden sm:block">
                Invite Friends
                </div>
                <div className="p-2 rounded-full text-white bg-purple-900">
                    <BiSearch size={20} />
                </div>

        </div>
      </div>
    </div>
  );
};

export default Search;
