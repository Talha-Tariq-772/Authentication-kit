"use client"
import { useUserContext } from '@/context/userContext'
import { use } from 'react'

interface Params {
    verificationToken: string
}

function Page({ params }: { params: Params }) {

  const {verifyUser}=useUserContext();
    // Proper type assertion through unknown
    const resolvedParams = use(params as unknown as Promise<Params>)
    const { verificationToken } = resolvedParams

    return (
        <div className='auth-page  flex flex-col justify-center gap-[2rem] items-center'>
          <div className='bg-white flex flex-col px-[4rem] py-[2rem] rounded-md'>
            <h1 className='text-[#999] text-[2rem]'>Email Verification</h1>
        <button className=' px-4 py-2 self-center  bg-blue-500 text-white rounded-md'
        onClick={()=>{
          verifyUser(verificationToken);
        }}>
          Verify
        </button>
            </div>
        </div>
    )
} 

export default Page