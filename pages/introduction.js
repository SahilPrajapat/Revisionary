import { useRouter } from 'next/router'
import Header from "./components/Home/Header";

function introduction() {
  const router =  useRouter();

  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className="bg-gray-100 h-full ">
        <div className="px-48 mt-16 mb-5 bg-white">
          <h1 className="text-4xl text-gray-400 font-bold pb-7">
            Introduction to Logic
          </h1>
        </div>
        <div className="mx-52 bg-white h-20 my-3 pt-6">
          <h1 className="font-bold text-2xl text-black px-5 cursor-pointer" onClick={() => router.push('/week')}>Week 1</h1>
        </div>
        <div className="mx-52 bg-white h-20 my-3 pt-6">
          <h1 className="font-bold text-2xl text-black px-5 cursor-pointer">Week 2</h1>
        </div>
        <div className="mx-52 bg-white h-20 my-3 pt-6">
          <h1 className="font-bold text-2xl text-black px-5 cursor-pointer">Week 3</h1>
        </div>
        <div className="mx-52 bg-white h-20 my-3 pt-6">
          <h1 className="font-bold text-2xl text-black px-5 cursor-pointer">Week 4</h1>
        </div>
        <div className="mx-52 bg-white h-20 my-3 pt-6">
          <h1 className="font-bold text-2xl text-black px-5 cursor-pointer">Week 5</h1>
        </div>
        <div className="mx-52 bg-white h-20 my-3 pt-6">
          <h1 className="font-bold text-2xl text-black px-5 cursor-pointer">Week 6</h1>
        </div>
        <div className="mx-52 bg-white h-20 my-3 pt-6">
          <h1 className="font-bold text-2xl text-black px-5 cursor-pointer">Week 7</h1>
        </div>
        <div className="mx-52 bg-white h-20 my-3 pt-6">
          <h1 className="font-bold text-2xl text-black px-5 cursor-pointer">Week 8</h1>
        </div>
        <div className="mx-52 bg-white h-20 my-3 pt-6">
          <h1 className="font-bold text-2xl text-black px-5 cursor-pointer">Week 9</h1>
        </div>
        <div className="mx-52 bg-white h-20 my-3 pt-6">
          <h1 className="font-bold text-2xl text-black px-5 cursor-pointer">Week 10</h1>
        </div>
      </div>
    </>
  );
}

export default introduction;
