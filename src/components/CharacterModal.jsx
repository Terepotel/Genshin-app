import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styleCss from './characterModal.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CharacterModal({open,handleOpen,handleClose,character}) {


  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <img className={styleCss.imageModal} src= {`https://genshin.jmp.blue/characters/${character.name.toLowerCase()}/gacha-splash`}/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {character.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {character.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
