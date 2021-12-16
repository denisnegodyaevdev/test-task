import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { withKnobs, text } from '@storybook/addon-knobs'
export default { title: 'CardItem component', decorators: [withKnobs] }
export const CardItem = () => {
  return (
    <Card style={{ maxWidth: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color='text.secondary' gutterBottom>
          Name: Test
        </Typography>
        <Typography sx={{ fontSize: 12 }} color='text.secondary' gutterBottom>
          Last Name: Test
        </Typography>
        <img
          style={{ width: 130, height: 130, objectFit: 'cover' }}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
          alt='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
        ></img>
        <Typography sx={{ fontSize: 12 }} color='text.secondary' gutterBottom>
          Email: test@gmail.com
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}
