import Card2 from "./components/Home/Card2";
import Header from "./components/Home/Header";
import { useState } from "react";

function week() {
  const [state, setState] = useState([1, 2, 3]);

  function changeList() {
    let len = state.length;
    for (let i = len + 1; i <= len + 3 && state.length < 11; i++) {
      state.push(i);
    }
    console.log([...state]);
    setState([...state]);
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="">
        <div className="grid grid-cols-3 px-48 mt-16 mb-5 bg-white">
          <h1 className="text-4xl text-gray-400 font-bold pb-7">
            Introduction to Logic
          </h1>
          <h1 className="text-gray-400 font-semibold text-4xl">Lectures</h1>
          <h1 className="text-gray-400 text-right font-normal text-4xl">
            Week 1
          </h1>
        </div>

        <div className="px-48">
          <div className="grid grid-cols-3">
            {state && state.map((s) => <Card2 key={s}/>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default week;
