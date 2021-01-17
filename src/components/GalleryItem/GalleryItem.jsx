import { useState } from 'react';
import { Button, CardContent } from '@material-ui/core';
import { Card } from '@material-ui/core/';
import { Grid } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';


function GalleryItem({ item, likeClick }) {
    const [description, setDescription] = useState(false);

    const clicked = () => {
        likeClick()
    }

    return (
        <>
            {description ? (

                <div key={item.id} onClick={() => setDescription(false)}>
                    <Grid container style={{width: "250rem", height: "200px"}}>
                        <Card>
                            <CardContent>
                            {item.description}
                            </CardContent>
                        </Card>
                    </Grid>

                </div>

            ) : (
                    <Grid item >
                        <Card key={item.id}>
                            <CardActionArea>
                                <CardMedia onClick={() => setDescription(true)}>
                                    <img src={item.path}  width={'250rem'} />
                                </CardMedia>
                            </CardActionArea>

                            <CardContent>
                                <Button id={item.id} onClick={likeClick} variant="contained" color="primary">
                                <span id={item.id} >{item.likes} Likes</span>
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            
        </>


    )
}

export default GalleryItem;