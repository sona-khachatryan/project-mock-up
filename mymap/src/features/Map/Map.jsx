import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFeatures, getName} from "../../thunks/getData";
import {Alert, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, styled, Typography} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgb(164, 138, 125)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "white",
}));

function Map(props) {
    const {features, name} = useSelector(state => state.map);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFeatures())
        dispatch(getName())
    }, [])

    console.log(name, 'features')

    return (
        <div style={{
            textAlign: "center",
            alignItems: "center",
            alignContent: 'center',
            justifyContent: 'center',
            display: "flex",
            flexWrap: 'wrap',
        }}>
            <Alert severity="warning" sx={{width:400, margin:4}}>
                At the moment, we have insufficient data for our Maps.
                <br/>
                Our team is working on it.
            </Alert>
            <div style={{
                textAlign: "center",
                alignItems: "center",
                alignContent: 'center',
                justifyContent: 'center',
                display: "flex",
                flexWrap: 'wrap',
            }}>
                <Typography variant="h6" component="h2" sx={{
                    'width': 400,
                    'border': 'thin solid rgb(164, 138, 125)',
                    'border-radius': 4,
                    'backgroundColor': 'rgb(164, 138, 125)',
                    'color': 'white',
                    'margin': 4,

                }}>
                    {name}
                </Typography>
                <Grid container spacing={2}>
                    {features.map(place => <Grid item xs={6} md={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={place.properties.gx_media_links}
                                title="location"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {place.properties.Name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {`Longitude:${place.geometry.coordinates[0]}`} <br/>
                                    {`Latitude:${place.geometry.coordinates[1]}`}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>)}
                </Grid>
            </div>

        </div>
    );
}

export default Map;