import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
   const searchWord =  e.target.value
   const newFilter = data.cardData.filter((value) => {
    return value.title.toLowerCase().includes(searchWord.toLowerCase());
   });

   if (searchWord === "") {
    setFilteredData([])
   } else {
     setFilteredData(newFilter)
   }
  }

  return (
    <>
      <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
        <div>
          <input
            className="bg-transparent w-[300px] sm:w-[400px] font-[Montserrat] focus:outline-none"
            type="text"
            placeholder={placeholder}
            onChange={handleFilter}
          />
        </div>
        <div>
          <button>
            <AiOutlineSearch
              size={20}
              className="icon"
              style={{ color: "white" }}
            />
          </button>
        </div>
      </form>
      {filteredData.length !== 0 && (
        <div className="mt-2 mx-auto w-[300px] lg:w-[600px] h-[200px] bg-gray-100/90 overflow-hidden overflow-y-auto rounded-md">
          {filteredData.map((value, key) => {
            return (
              <a
                className="w-full h-[50px] flex items-center text-black decoration-none cursor-pointer hover:bg-zinc-400"
                href={value.link}
                target="_blank"
                rel="noreferrer"
                key={value.id}
              >
                <p className="ml-2">{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SearchBar;
