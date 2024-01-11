import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { FaUserCircle,FaFilm } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/AppSlice';
import { YOUTUBE_SEARCH_API } from '../utils/Constant';
import { Link, useNavigate } from 'react-router-dom'; // Change here

const Suggestval = ({ val }) => {
  console.log("suggest val", val);

  return (
    <div>
      <ul>
        <li>{val}</li>
      </ul>
    </div>
  );
};

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
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const togleMenuHandler = () => {
    console.log('hello');
    dispatch(toggleMenu());
  };

  const handlekeyDown =(e)=>{
    if (e.key === 'Enter' && e.target.value !== "") {
                
      navigate("/results?search=" + searchQuery); 
      
    }
   
  }
  return (
    <div className="grid grid-flow-col md:p-5 md:m-2 shadow-xl items-center sticky top-0 z-10 opacity-1 bg-slate-100 ">
      <div className=" col-span-1 flex">
        <AiOutlineMenu
          className="text-2xl hover:cursor-pointer hidden lg:flex"
          onClick={() => togleMenuHandler()}
        />
        <Link to="/">
          <li className="flex font-extrabold mx-3  ">
           
            <FaFilm className='text-2xl text-red-700' />
         
            <span className='text-red-400 ml-1 shadow-amber-100'> E </span> ntertainment          </li>
        </Link>
      </div>
      <div className="col-span-10 md:ml-36 items-center ">
        <div className=" relative">
          <input
            className="w-28  md:w-1/2 border border-gray-700 p-2 md:pl-6 rounded-l-full"
            type="text"
            placeholder="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onKeyDown={(e) => {
              handlekeyDown(e)
            }}
          />
          
          {
            searchQuery !== "" ? (
              <Link to={"/results?search=" + encodeURIComponent(searchQuery)}>
                <button className="rounded-r-full p-2 border border-gray-800 h-full">
                  🔍
                </button>
              </Link>
            ) : (
              <button className="rounded-r-full p-2 border border-gray-800 h-full " >
                🔍
              </button>
            )
          }

          <div className='fixed bg-white py-2 px-5 rounded-sm'>
            {showsuggestions && suggestions.map((data) =>
              <Suggestval val={data} />
            )}
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <FaUserCircle className="text-2xl" />
      </div>
    </div>
  );
};

export default Head;
