import Image from 'next/image'
import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material'
import Home from './user/page';
import UserLayout from './user/layout'

export default function Index() {
  return (
    <UserLayout>
      <Home/>
      <h1>hahah</h1>
    </UserLayout>
  )
}
