import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import LearnMoreButton from '../LearnMoreButton/LearnMoreButton'

export default function CardItem (props) {
  const {
    manItem: { id, avatar, email, first_name, last_name },
    toProps: { setOpen, open, setId },
    modalView
  } = props
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color='text.secondary' gutterBottom>
          Name: {first_name}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color='text.secondary' gutterBottom>
          Last Name: {last_name}
        </Typography>
        <img
          style={{ width: 130, height: 130, objectFit: 'cover' }}
          src={avatar}
          alt={avatar}
        ></img>
        <Typography sx={{ fontSize: 12 }} color='text.secondary' gutterBottom>
          Email: {email}
        </Typography>
      </CardContent>
      {!modalView && (
        <CardActions>
          <LearnMoreButton
            onClick={() => {
              setId(id)
              setOpen(!open)
            }}
            size='small'
          >
            Learn More
          </LearnMoreButton>
        </CardActions>
      )}
    </Card>
  )
}
