import Button from "@material-tailwind/react/Button";
import { useRouter } from 'next/router';

function Card() {
  const router = useRouter();
  
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 mx-auto mt-8">
      <div className="w-80 h-48 bg-yellow-400">
          <div>
            <h1 className="text-center text-xl font-bold m-8 text-gray-50">
            THE THEORY OF EVERYTHING
            </h1>       
          </div>

        <div className="ml-6 ">
          <Button
            buttonType="filled"
            size="lg"
            block={false}
            iconOnly={false}
            ripple="light"
            className="bg-white w-60 h-10"
            onClick={() => router.push('/introduction')}
          >
            <h1 className="text-yellow-400 text-lg text-left">Study decks ></h1>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
