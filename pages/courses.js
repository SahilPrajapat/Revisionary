import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import Button from "@material-tailwind/react/Button";
import { useState } from "react";
import Card from "./components/Home/Card";


function Courses() {

  const [state, setState] = useState([1,2,3])

  function changeList(){
    let len = state.length;
    for(let i = len+1; i <= len+3 && state.length < 11; i++){
        state.push(i)
    }
    console.log([...state]);
    setState([...state])
  }

  return (
    <div>
      <Header />

      <div className="px-48 mt-16">
        {/* course */}
        <div>
          <div>
            <h1 className="text-4xl font-semibold text-gray-400">Courses</h1>
          </div>
          <div className="grid grid-cols-3">
            {state && state.map(s => <Card key={s}/>)}
          </div>
          <Button
          buttonType="contained"
          color=""
          iconOnly={true}
          ripple="dark"
          className="md:inline-flex h-15 w-24 bg-regal-blue border-0 mt-2"
          onClick={() => changeList()}
        >
          <h1 className="text-white justify-center">Show more</h1>
        </Button>
        </div>

        {/* recently viewed */}
        <div className="flex flex-col mt-10">
          <h1 className="text-4xl font-normal text-gray-400 pb-11">
            Recently Viewed Decks
          </h1>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
