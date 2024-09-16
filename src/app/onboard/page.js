import { fetchProfileAction } from "@/action"
import OnBoard from "@/components/on-board"
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";


async function OnBoardPage() {

    // get the auth user from clerk

    const user = await currentUser()

    const profileInfo = await fetchProfileAction(user?.id);
    console.log(currentUser);
    

    if (profileInfo?._id) {
        if (profileInfo?.role === 'recruiter' && !profileInfo.isPremiumUser)
            redirect('/membership');
        else redirect('/');
    }
    return (
        <OnBoard />
    )

}

export default OnBoardPage