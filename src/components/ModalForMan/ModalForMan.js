import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import CardItem from '../CardItem'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function ModalForMan ({ toProps }) {
  const { setOpen, open, id, getOnePeople } = toProps
  const [info, setInfo] = useState()
  const handleClose = () => setOpen(false)

  useEffect(() => {
    getOnePeople(id).then(res => setInfo(res.data))
    return setInfo('')
  }, [id, getOnePeople])
  if (!info) return null
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <CardItem manItem={info.data} toProps={toProps} modalView={true} />
        </Box>
      </Modal>
    </div>
  )
}
