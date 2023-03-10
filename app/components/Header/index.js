import React from 'react'
import { Box, IconButton, Typography, Avatar, useTheme, useMediaQuery, Skeleton } from '@mui/material'
import PropTypes from 'prop-types'
import {Await } from '@remix-run/react';
import styled from './Header.module.css'
import LanguageMenu from '../Pro/LanguageMenu'
import NotificationMenu from '../Pro/NotificationMenu'
import GroupMenu from '../Pro/GroupMenu'
import UserMenu from '../Pro/UserMenu'
function Header({  model,setModel,user }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const headerWrap = model == "simple" ? `${styled.headerWrap} ${styled.simpleWrap}` : styled.headerWrap;
    const newModel=model=="simple"?'full':'simple'
    return (
        <Box className={headerWrap}>
            <div>
                <IconButton sx={{ fontSize: '1.5rem',display:matches?'inline-flex':'none' }} size="large" onClick={()=>setModel(newModel)}>
                    <i className='iconfont icon-shousuo'></i>
                </IconButton>
                <IconButton sx={{ fontSize: '1.3rem',fontWeight:'bold' }} size="large">
                    <i className='iconfont icon-sousuo'></i>
                </IconButton>

            </div>
          
            <div className={styled.Box}>
                <Box sx={{ px: 0.1 }}>
                    <LanguageMenu />
                </Box>
                <Box sx={{ px: 0.1 }}>
                    <NotificationMenu />
                </Box>
                <Box sx={{ px: 0.1 }}>
                    <GroupMenu  />
                </Box>
                <Box sx={{ px: 0.1 }}>
                {/* <React.Suspense fallback={<Skeleton variant="circular" width={40} height={40} />}>
                <Await resolve={user}> */}

                    <UserMenu user={user}></UserMenu>
                {/* </Await>
                </React.Suspense> */}
                </Box>
                


            </div>


        </Box>

    )
}

Header.propTypes = {

}

export default Header

