"use client";
import React from 'react'
import PropTypes from 'prop-types'
import {Grid,Paper,Typography} from '@mui/material'
import styled from './home.module.css'
import ShowCard from '../../components/ShowCard'
import PaySvg from '../../public/svg/Pay.svg';

var arr=[
  {
    mainText:'784K',
    subTitle:'Total Booking',
    svg:require('~/images/svg/1.svg')
  },
  {
    mainText:'784K',
    subTitle:'Total Booking',
    svg:require('~/images/svg/2.svg')
  }, {
    mainText:'784K',
    subTitle:'Total Booking',
    svg:require('~/images/svg/3.svg')
  },
  {
    mainText:'784K',
    subTitle:'Total Booking',
    svg:require('~/images/svg/4.svg')
  }
]

function HomePage() {
  return (
    <>
    <Grid container spacing={2} sx={{mt:1}}>
      {
        arr.map((t,i)=>{
        return <Grid key={i} item lg={3} md={3} sm={1}>
          <ShowCard mainText={t.mainText} subTitle={t.subTitle} pic={<img  alt={"图片"} width={90} height={90} src={t.svg} />}></ShowCard>
        </Grid>
      })

      }
    </Grid>


    </>
  )
}

HomePage.propTypes = {}

export default HomePage
