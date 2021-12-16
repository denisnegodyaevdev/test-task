import { Button } from '@mui/material'
import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
export default { title: 'Buttons component', decorators: [withKnobs] }
export const LearnMoreButton = () => {
  return <Button size='small'>Learn More</Button>
}

