// Head.js
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/AppSlice';
 // Import Link from react-router-dom
import { YOUTUBE_SEARCH_API } from '../utils/Constant';
import { Link } from 'react-router-dom';


const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showsuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log('suggestion search data', json);
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();
  const togleMenuHandler = () => {
    console.log('hello');
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-xl items-center sticky top-0 z-10 opacity-1 bg-slate-100">
      
      <div className=" col-span-1 flex">
        <AiOutlineMenu
          className="text-2xl hover:cursor-pointer"
          onClick={() => togleMenuHandler()}
        />
        <Link to={"/"}>
        <li className="flex font-extrabold mx-3 ">
          <BsYoutube className="text-2xl text-red-700" />
          Youtube
        </li>
        </Link>
      </div>
      <div className="col-span-10 ml-36 items-center ">
        <div className="">
          <input
            className="w-1/2 border border-gray-700 p-2 pl-6 rounded-l-full"
            type="text"
            placeholder="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          {/* Use Link for navigation */}
          <Link to={"/results?search="+searchQuery}>
            <button className="rounded-r-full p-2 border border-gray-800 h-full">
              🔍
            </button>
            </Link>
        </div>
      </div>
      <div className="col-span-1">
        
        
         
        <FaUserCircle className="text-2xl" />
        
       
      </div>
    </div>
  );
};

export default Head;
