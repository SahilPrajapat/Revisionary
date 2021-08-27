import Header from "./components/Home/Header";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from 'next/router';

function lecture() {
  const router = useRouter();

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="grid grid-cols-2 px-52 mt-16 mb-5 bg-white">
        <div>
          <h1 className="text-4xl text-gray-400 font-bold pb-7">
            Introduction to Logic
          </h1>
        </div>
        <div className="flex justify-end">
          <p className="text-gray-400 text-right font-normal text-4xl">
            Week 1
          </p>
          <p className="text-gray-400 text-right font-semibold text-4xl pl-3">
            Lecture 1
          </p>
        </div>

        <div>
          <h1 className="text-3xl text-gray-400">Your Deck</h1>
        </div>
      </div>

      {/* Card */}
      <div className="grid grid-flow-col-dense px-52 bg-white mb-10">
        <div className="grid grid-cols-2 bg-sandy cursor-pointer h-20 w-80" onClick={() => router.push("/StudyNow")}>
          <p className="justify-center text-left text-2xl text-blue-900 font-bold pl-5 pt-5">
            Study Now
          </p>
          <p className="justify-center text-left text-2xl text-gray-400 font-bold pl-5 pt-5">
            13 cards
          </p>
        </div>
        <div className="bg-sandy cursor-pointer h-20 w-80" onClick={() => router.push("/Preview")}>
          <p className="flex justify-evenly text-left text-2xl text-blue-900 font-bold pt-4">
            Preview Deck
            <Icon className="" name="more_horiz" size="5xl" color="gray"/>
          </p>
        </div>
        <div className="bg-sandy cursor-pointer h-20 w-80" onClick={() => router.push('/add')}>
          <p className="flex justify-evenly text-left text-2xl text-blue-900 font-bold pt-4">
            Add New Deck
            <Icon className="" name="add_box" size="5xl" color="gray"/>
          </p>
        </div>
      </div>

      <div className="bg-gray-100 h-96 px-52 pt-3 pb-3">
        <div>
          <h1 className="text-3xl text-gray-400">Coursemate's Decks</h1>
        </div>
      </div>
    </div>
  );
}

export default lecture;
