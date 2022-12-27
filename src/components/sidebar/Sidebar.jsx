import style from "./sidebar.module.css"
import React, { useState } from 'react'
import { Box, Drawer, FormControl, FormControlLabel, IconButton, Link, Stack, Switch, Typography } from "@mui/material"
import { MenuOutlined } from "@mui/icons-material";


const Sidebar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
    <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={()=>setIsDrawerOpen(true)}>
        <MenuOutlined />
    </IconButton>
        <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}> {/* whenever "isDrawerOpen" is true, the drawer opens. Whenever the drawer closes eg by the user clicking outside the drawer, "isDrawerOpen" is set to false */}
        <Stack p={2} my={6} width="250px"  alignItems="center" role="presentation">
            <Link variant="h5" href="/" underline="hover" mb={3} sx={{fontWeight:"700"}}>
                HOME
            </Link>
            <Link variant="h5" href="/" underline="hover" mb={3} sx={{fontWeight:"700"}}>
                MOVIES
            </Link>
            <Link variant="h5" href="/" underline="hover" sx={{fontWeight:"700"}}>
                SERIES
            </Link>
            <Box mt={30}><FormControlLabel  label={<Typography variant="body1" color="primary" sx={{fontWeight:"500"}}>Dark mode</Typography>} control={<Switch />}/></Box>    {/*Getting the value from the "switch" element (note that whenever the switch is switched on, the "checked" prop value is true and whenever it is switched off, the "checked" prop value is false. I'm simply grabbing that value using my own "checked" useState. ) */}
            
        </Stack>
        </Drawer>
    </>
  )
}

export default Sidebar
