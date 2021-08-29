import Button from "@material-tailwind/react/Button";
import { checkAdmin } from "../services/adminService";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from "./components/Home/Header";
import { useState } from 'react';
import { db } from '../firebase';

function admin() {
  const [course, setCourse] = useState("");
  const router = useRouter();

  const create = (event) => {
    db.ref(`courses/${course}`).set({
      course,
    }).then(
      setCourse("")
    )
    
  }

    useEffect(() => {
        const checkadmin = () => {
          if (!checkAdmin()) {
            router.replace("/");
          } else {
            console.log('falsse');
          }
        }

        return () => {
            checkadmin();
        }
    });

    return (
        <div>
            <Header/>
            <div className="mx-52 mt-10">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="add-course" className="sr-only">
                  Add Course
                </label>
                <input
                  id="addCourse"
                  name="course"
                  type="text"
                  autoComplete="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Add Course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </div>
              </div>

              <div className="ml-96 mt-6">
                <Button
                      color="blue"
                      buttonType="filled"
                      size="lg"
                      rounded={false}
                      block={false}
                      iconOnly={false}
                      ripple="light"
                      onClick={() => create()}
                  >
                      Add Course
                  </Button>
              </div>
            </div>
        </div>

    )
}

export default admin
