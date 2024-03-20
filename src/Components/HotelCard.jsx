import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Rating } from '@mui/material';



const Cards = ({ hoteldetails, image, address, price, defaultValue ,value}) => {
  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          p: 2,
          display: 'flex',
          flexWrap: 'wrap',
          zIndex: 1,
        }}
      >
        <CardMedia
          component="img"
          width="100"
          height="150"
          src={image}
          sx={{
            borderRadius: '6px',
            width: { xs: '100%', sm: 150 },
          }}
        />
        <Box sx={{ alignSelf: 'center', ml: 4 }}>
          <Typography variant="h6" gutterBottom>
            {hoteldetails}
          </Typography>
          <Rating name="read-only" value={defaultValue} readOnly />

          <Typography variant="body2" color="text.secondary" fontWeight="regular">
            {address}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight="regular">
            {price}
          </Typography>
          <Button variant="contained">Book Now</Button>
          <Typography fontWeight="bold" noWrap gutterBottom>
          </Typography>
        </Box>
      </Card>
    </div>
  )
}
export default Cards
