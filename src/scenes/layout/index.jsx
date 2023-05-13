import React, { useState} from 'react';
import {Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from 'component/Navbar';
import { height } from '@mui/system';
import Sidebar from 'component/Sidebar'

const Layout = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return  <Box display={isNonMobile ? 'flex' : 'block'} width = '100%' height = '100%'>
    <Box>
      <Sidebar
      isNonMobile={isNonMobile}
      drawerWidth='250px'
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen} />
      <Navbar 
      isSidebarOpen= {isSidebarOpen}
      setIsSidebarOpen= {setIsSidebarOpen}
      />
      <Outlet />
    </Box>
  </Box>
}

export default Layout