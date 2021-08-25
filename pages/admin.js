import { checkAdmin } from "../services/adminService";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function admin() {
    const router = useRouter();

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
            {/* {()=> checkadmin()} */}
            <p>ksdhfkjhaklsjhfd</p>
        </div>

    )
}

export default admin
