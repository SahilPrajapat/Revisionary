import Button from "@material-tailwind/react/Button";
import { useRouter } from 'next/router';

function Card() {
  const router = useRouter();
  
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 mx-auto mt-8">
      <div className="w-80 h-48 bg-sandy">
          <div>
            <h1 className="text-xl font-bold m-8 text-gray-50">
            LECTURE 1
            </h1>       
              <p className='text-left text-white text-xl pl-8 pb-4'>21 decks</p>
          </div>

        <div className="ml-6 ">
          <Button
            buttonType="filled"
            size="lg"
            color=""
            block={false}
            iconOnly={false}
            ripple="light"
            className="bg-white w-56 h-10"
            onClick={() => router.push('/lecture')}
          >
            <h1 className="text-sandy text-lg text-left">Study decks ></h1>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
