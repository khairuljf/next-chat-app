// src/Home.js
import React from 'react';
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {feature, mainContent} from "../AppStyle";
import ClaimOffer from "./ClaimOffer";
import ChatListItems from "./ChatListItem";
import {useRouter} from 'next/navigation';


const Chats = () => {
    const router = useRouter();


    const handleNavigate = () => {
        router.push('/messenger');
    }

    return (
        <>
            <Box sx={mainContent} className={"main-content"}>
                <ChatListItems/>
                <Box className={'premium-feature-wrap'} sx={feature}>

                    <ClaimOffer/>

                    <Box className={'component-item'}>
                        <h2 className={'title'}>Premium Features </h2>
                        <Box className={"items-wrap"}>
                            <Card className={'card-item'}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={'/image-lab.jpg'}
                                    alt="green iguana"
                                />
                                <CardActionArea>

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Pro image Lab
                                        </Typography>
                                        <Typography variant="body2" color="text.light">
                                            Create pics your way
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={'card-item'}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={'/ask-the-web.jpg'}
                                    alt="green iguana"
                                />
                                <CardActionArea>

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Aks the web
                                        </Typography>
                                        <Typography variant="body2" color="text.light">
                                            Find info onlin
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={'card-item'}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={'/pdf-master-2.jpg'}
                                    alt="green iguana"
                                />
                                <CardActionArea>

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            PDF master
                                        </Typography>
                                        <Typography variant="body2" color="text.light">
                                            Work with PDFs
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card className={'card-item'}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={'/youtube.jpg'}
                                    alt="green iguana"
                                />
                                <CardActionArea>

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            YouTube
                                        </Typography>
                                        <Typography variant="body2" color="text.light">
                                            Work with videos
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Box>
                    <Box className={'component-item with-double'}>
                        <h2 className={'title'}>Get help with any task </h2>
                        <Box
                            className={'items-wrap double-item'}
                            sx={{
                                display: 'flex',
                                gap: '30px',
                                '& > div': {
                                    width: '25%',
                                    minHeight: '200px',
                                }

                            }}>
                            <Box>
                                <Card className={'card-item'}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                Image Generation
                                            </Typography>
                                            <Typography variant="body2" color="text.light">
                                                Turn words into images
                                            </Typography>
                                        </CardContent>

                                    </CardActionArea>
                                    <CardMedia
                                        className={'card-img'}
                                        component="img"
                                        image={'/images/ic_art.png'}
                                        alt="green iguana"
                                    />
                                </Card>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: '20px',
                                '& img': {
                                    height: '100px',
                                    width: '100px',
                                    position: 'absolute',
                                    top: '10px',
                                    right: '20px'

                                }
                            }}>
                                <Card className={'card-item'}>
                                    <CardActionArea>

                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                Summary
                                            </Typography>
                                            <Typography variant="body2" color="text.light">
                                                Summaries text from photos
                                            </Typography>

                                        </CardContent>
                                        <CardMedia
                                            className={'mini-icon'}
                                            component="img"
                                            image={'/images/ic_camera.png'}
                                            alt="green iguana"
                                        />
                                    </CardActionArea>
                                </Card>

                                <Card className={'card-item'}>
                                    <CardActionArea>

                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                Socials
                                            </Typography>
                                            <Typography variant="body2" color="text.light">
                                                Create an engaging post
                                            </Typography>

                                        </CardContent>
                                        <CardMedia
                                            className={'mini-icon'}
                                            component="img"
                                            image={'/message.png'}
                                            alt="green iguana"
                                        />
                                    </CardActionArea>
                                </Card>

                            </Box>
                            <Box>
                                <Card className={'card-item'}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                Creativity
                                            </Typography>
                                            <Typography variant="body2" color="text.light">
                                                Compose lyrics in the style of the Beatles
                                            </Typography>
                                        </CardContent>

                                    </CardActionArea>
                                    <CardMedia
                                        className={'card-img'}
                                        component="img"
                                        image={'images/ic_mic1.png'}
                                        alt="green iguana"
                                    />
                                </Card>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: '20px',
                                '& img': {
                                    height: '100px',
                                    width: '100px',
                                    position: 'absolute',
                                    top: '10px',
                                    right: '20px'

                                }
                            }}>
                                <Card className={'card-item'}>
                                    <CardActionArea>

                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                Studying
                                            </Typography>
                                            <Typography variant="body2" color="text.light">
                                                Explain a theorem ot me
                                            </Typography>

                                        </CardContent>
                                        <CardMedia
                                            className={'mini-icon'}
                                            component="img"
                                            image={'/images/ic_bulb.png'}
                                            alt="green iguana"
                                        />
                                    </CardActionArea>
                                </Card>

                                <Card className={'card-item'}>
                                    <CardActionArea>

                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                Promotion
                                            </Typography>
                                            <Typography variant="body2" color="text.light">
                                                Draft an email
                                            </Typography>

                                        </CardContent>
                                        <CardMedia
                                            className={'mini-icon'}
                                            component="img"
                                            image={'/tasks_for_ai/mailbox.png'}
                                            alt="green iguana"
                                        />
                                    </CardActionArea>
                                </Card>

                            </Box>


                        </Box>
                    </Box>

                </Box>
            </Box>

        </>
    );
};

export default Chats;
