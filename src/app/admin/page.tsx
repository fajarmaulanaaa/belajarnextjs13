'use client'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const router = useRouter()
  const goBack = ()=>{
    router.back()
  }
  return (
    <div>
        Ini Halaman dashboard
        <Link href="/login">
        
        <Button onClick={goBack}  variant="contained" color="primary" >
          back
        </Button>
      </Link>
    </div>
  )
}
// 'use client'
 
// import { Button } from '@mui/material'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
 
// export default function Page() {
//   const router = useRouter()
 
//   return (
//     <div>
//          Ini Halaman dashboard
//          <Link href="/login">
        
//          <Button onClick={() => router.back()} variant="contained" color="primary" >
//            back
//          </Button>
//        </Link>
//      </div>
    
//   )
// }