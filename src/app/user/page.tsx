import Image from 'next/image'
import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material'

export default function Home() {
  return (
    <div>
       <h1>Selamat datang di Emkay.id</h1>
      <Link href="/login">
        <Button variant="contained" color="primary">
          Go to Login
        </Button>
      </Link>
      <h1></h1>
      <Link href="/admin">
        <Button variant="contained" color="primary">
          Go to Admin Daasboard
        </Button>
      </Link>
    </div>
  )
}
