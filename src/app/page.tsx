'use client'
import { useRouter } from "next/navigation"


export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push("/app")
  }
    return (
      <main className="w-full h-full text-center">
         <h1 className="">Landing Page</h1>
        <button className="m-[30%]" onClick={handleClick}>Go to App</button>
      </main>
    )
}
