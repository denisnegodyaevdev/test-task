import React, { useEffect, useState } from 'react'
import CardItem from '../CardItem'
import Grid from '@mui/material/Grid'
import ModalForMan from '../ModalForMan/ModalForMan'

const MainContent = props => {
  const { getPeople, getOnePeople } = props
  const [open, setOpen] = useState(false)
  const [people, setPeople] = useState()
  const [id, setId] = useState('')
  useEffect(() => {
    getPeople()
      .then(response => {
        return setPeople(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [getPeople])
  const toProps = {
    getOnePeople,
    setOpen,
    setId,
    id,
    open
  }
  if (!people) return null
  return (
    <>
      <Grid container spacing={2}>
        {people.data.map(item => (
          <Grid item xs={3}>
            <CardItem key={item.id} manItem={item} toProps={toProps} />
          </Grid>
        ))}
      </Grid>
      <ModalForMan toProps={toProps} />
    </>
  )
}

export default MainContent
