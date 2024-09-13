import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

async function Home() {
  const user = await currentUser()

  console.log(user, "current user")

  const profileInfo = null

  if (user && !profileInfo?.id) { redirect("/onboard") }


  return (

    <section>
      main content
    </section>
  );
}

export default Home


