import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CharacterModal from './CharacterModal';


export default function CharacterCard({character}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <Card sx={{ maxWidth: 345 , width: 260 }}>
      <CardMedia
        sx={{ height: 260}}
        image= {`https://genshin.jmp.blue/characters/${character.name.toLowerCase()}/gacha-splash`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        
      </CardContent>
      <CharacterModal open={open} handleOpen={handleOpen} handleClose={handleClose} character={character}/>
    </Card>
    
    </>

  );
  
}
