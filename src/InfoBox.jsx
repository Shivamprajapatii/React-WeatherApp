import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({ info }) {
    const INITIAL_URL = "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://img.freepik.com/premium-vector/sunset-summer-beach-bakground_53060-24.jpg?w=740";
    const COLD_URL = "https://img.freepik.com/premium-photo/woman-walk-by-park-where-winter-meet-spring_259348-26623.jpg?w=1060";
    const RAIN_URL = "https://img.freepik.com/premium-photo/amazing-lovely-best-this-photo-take-this-picture-your-work-ai-generated-top-wonderful-photo_1078211-209556.jpg?w=1060";
    return (
        <div>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 340, height: 390 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <b>{info.city}</b>{" "}
                            {info.humidity > 80 ? (
                                <ThunderstormIcon className='Icons' />
                            ) : 
                            info.temp > 15 ? (
                                < WbSunnyIcon className='Icons' />) : (
                                <AcUnitIcon className='Icons' />)
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature - {info.temp}&deg;</p>
                            <p>Humidity - {info.humidity}</p>
                            <p>Min Temp - {info.tempMin}&deg;C</p>
                            <p>Max Temp - {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <b>{info.weather}</b> feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}