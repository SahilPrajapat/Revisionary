import Header from "./components/Home/Header";
import { useRouter } from "next/router";
import Button from "@material-tailwind/react/Button";

function StudyNow() {
  const router = useRouter();

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="grid grid-cols-2 px-52 mt-16 mb-10 bg-white">
        <div>
          <p className="text-4xl text-gray-400 font-bold pb-7">
            Introduction to Logic
          </p>
        </div>
        <div className="flex justify-end">
          <p className="text-gray-400 text-right font-normal text-4xl">
            Week 1
          </p>
          <p className="text-gray-400 text-right font-semibold text-4xl pl-3">
            Lecture 1
          </p>
        </div>
        <div className="grid grid-cols-2">
            <div>
                <h1 className="text-3xl text-gray-400">Your Deck</h1>
            </div>
            <div className="ml-auto">
                <Button
                    color="yellow"
                    buttonType="filled"
                    size="lg"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                    onClick={() => router.push("/lecture")}
                >
                    Save and Finish
                </Button>
            </div>
        </div>
      </div>

      <div className="bg-gray-200 min-h-screen">
        <div className="px-52 pt-14">
            <h1>Study Now</h1>
        </div>
      </div>
    </div>
  );
}

export default StudyNow;
