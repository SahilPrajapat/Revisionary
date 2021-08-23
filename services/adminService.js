import { useSession } from "next-auth/client";

let adminEmail = "sparjapat005@gmail.com";

function checkAdmin(){
    const [session] = useSession();
    if(!session)
        return false;
    if(session?.user?.email !== adminEmail)
        return false;
    return true;
}


export {checkAdmin};