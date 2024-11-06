import React, { useContext } from "react";
import PixabayContext from "../context/pixabay_context";

const Navbar = () => {
  const { fetchImageByCategory, setQuery } = useContext(PixabayContext);
  return (
    <>
      <div className="container text-center " >
        <button
          onClick={() => fetchImageByCategory("nature")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Nature
        </button>
        <button
          onClick={() => fetchImageByCategory("science")}
          type="button"
          className="btn btn-outline-warning mx-3"
        >
          Science
        </button>
        <button
          onClick={() => fetchImageByCategory("education")}
          type="button"
          className="btn btn-outline-success mx-3"
        >
          Education
        </button>
        <button
          onClick={() => fetchImageByCategory("feeling")}
          type="button"
          className="btn btn-outline-danger mx-3"
        >
          Feeling
        </button>
        <button
          onClick={() => fetchImageByCategory("health")}
          type="button"
          className="btn btn-outline-warning mx-3"
        >
          Health
        </button>
        <button
          onClick={() => fetchImageByCategory("people")}
          type="button"
          className="btn btn-outline-info mx-3"
        >
          People
        </button>
        <button
          onClick={() => fetchImageByCategory("computer")}
          type="button"
          className="btn btn-outline-light mx-3"
        >
          Computer
        </button>
        <button
          onClick={() => fetchImageByCategory("buildings")}
          type="button"
          className="btn btn-outline-danger mx-3"
        >
          Buildiing
        </button>
      </div>
      <div className="container  ml-7 my-3" style={{width:"800px"}}>
        <input
          type="text"
          className="form-control text-center"
          onChange={(e)=>setQuery(e.target.value)}
        
            />
      </div>
    </>
  );
};

export default Navbar;
