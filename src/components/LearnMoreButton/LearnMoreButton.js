import { Button } from '@mui/material'
import React from 'react'

const LearnMoreButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} size='small'>
      Learn More
    </Button>
  )
}

export default LearnMoreButton
