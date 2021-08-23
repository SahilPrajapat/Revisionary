import { useRouter } from 'next/router'
import { checkAdmin } from "../services/adminService"

function admin() {
    const router = useRouter();

    if(!checkAdmin())
        // router.replace('/');

    return (

        <div>
            {console.log(checkAdmin())}
        </div>
    )
}

export default admin
