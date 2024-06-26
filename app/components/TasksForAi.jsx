// src/Home.js
import React from 'react';
import {mainContent, TaskAIStyle} from "../AppStyle";
import {Box, CardActionArea} from "@mui/material";
import ChatListItems from "./ChatListItem";
import ClaimOffer from "./ClaimOffer";
import Chip from '@mui/material/Chip';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InstagramIcon from '@mui/icons-material/Instagram';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SchoolIcon from '@mui/icons-material/School';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import WorkIcon from '@mui/icons-material/Work';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import TimelineIcon from '@mui/icons-material/Timeline';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import CodeIcon from '@mui/icons-material/Code';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const TasksForAi = () => {
    return (
        <Box sx={mainContent} className={"main-content"}>
            <ChatListItems/>
            <Box className={'task-ai-wrap'} sx={TaskAIStyle}>
                <Box className={'tags'}>
                    <Chip icon={<StarBorderIcon/>} label="Popular" size={'medium'} color={'primary'}/>
                    <Chip icon={<InstagramIcon/>} label="Social Media"/>
                    <Chip icon={<QuestionAnswerIcon/>} label="Communication"/>
                    <Chip icon={<SchoolIcon/>} label="Education"/>
                    <Chip icon={<InsertEmoticonIcon/>} label="Fun"/>
                    <Chip icon={<WorkIcon/>} label="Work"/>
                    <Chip icon={<MarkEmailUnreadIcon/>} label="Emails"/>
                    <Chip icon={<TimelineIcon/>} label="Marketing"/>
                    <Chip icon={<TipsAndUpdatesIcon/>} label="Ideas"/>
                    <Chip icon={<MonitorHeartIcon/>} label="Health"/>
                    <Chip icon={<CodeIcon/>} label=">_ Coding"/>
                    <Chip icon={<SportsEsportsIcon/>} label="Gaming"/>
                </Box>

                <ClaimOffer/>
                <Box className={"task-items"}>
                    <Card className={'card-item'}>
                        <CardActionArea>

                            <CardContent>
                                <Box className={'card-icons'}>
                                    <CardMedia
                                        className={'mini-icon left-icon'}
                                        component="img"
                                        image={'/tasks_for_ai/note.png'}
                                        alt="green iguana"
                                    />
                                    <CardMedia
                                        className={'mini-icon right'}
                                        component="img"
                                        image={'/images/bookmark-24.png'}
                                        alt="green iguana"
                                    />
                                </Box>

                                <Typography gutterBottom variant="h6" component="div">
                                    Text Summary
                                </Typography>
                                <Typography variant="body2" color="text.light">
                                    Summarize any text and create a numbered list of its key points
                                </Typography>

                            </CardContent>

                        </CardActionArea>
                    </Card>
                    <Card className={'card-item'}>
                        <CardActionArea>

                            <CardContent>
                                <Box className={'card-icons'}>
                                    <CardMedia
                                        className={'mini-icon left-icon'}
                                        component="img"
                                        image={'/tasks_for_ai/pen.png'}
                                        alt="green iguana"
                                    />
                                    <CardMedia
                                        className={'mini-icon right'}
                                        component="img"
                                        image={'/images/bookmark-24.png'}
                                        alt="green iguana"
                                    />
                                </Box>

                                <Typography gutterBottom variant="h6" component="div">
                                    Writing
                                </Typography>
                                <Typography variant="body2" color="text.light">
                                    Fight write's block and finish your text
                                </Typography>

                            </CardContent>

                        </CardActionArea>
                    </Card>
                    <Card className={'card-item'}>
                        <CardActionArea>

                            <CardContent>
                                <Box className={'card-icons'}>
                                    <CardMedia
                                        className={'mini-icon left-icon'}
                                        component="img"
                                        image={'/tasks_for_ai/document.png'}
                                        alt="green iguana"
                                    />
                                    <CardMedia
                                        className={'mini-icon right'}
                                        component="img"
                                        image={'/images/bookmark-24.png'}
                                        alt="green iguana"
                                    />
                                </Box>

                                <Typography gutterBottom variant="h6" component="div">
                                    Rewriting
                                </Typography>
                                <Typography variant="body2" color="text.light">
                                    Create unique rewrites with high text authenticity
                                </Typography>

                            </CardContent>

                        </CardActionArea>
                    </Card>
                    <Card className={'card-item'}>
                        <CardActionArea>

                            <CardContent>
                                <Box className={'card-icons'}>
                                    <CardMedia
                                        className={'mini-icon left-icon'}
                                        component="img"
                                        image={'/tasks_for_ai/search.png'}
                                        alt="green iguana"
                                    />
                                    <CardMedia
                                        className={'mini-icon right'}
                                        component="img"
                                        image={'/images/bookmark-24.png'}
                                        alt="green iguana"
                                    />
                                </Box>

                                <Typography gutterBottom variant="h6" component="div">
                                    Text Check
                                </Typography>
                                <Typography variant="body2" color="text.light">
                                    Check any text for spelling and grammatical mistakes
                                </Typography>

                            </CardContent>

                        </CardActionArea>
                    </Card>
                    <Card className={'card-item'}>
                        <CardActionArea>

                            <CardContent>
                                <Box className={'card-icons'}>
                                    <CardMedia
                                        className={'mini-icon left-icon'}
                                        component="img"
                                        image={'/tasks_for_ai/instagram.png'}
                                        alt="green iguana"
                                    />
                                    <CardMedia
                                        className={'mini-icon right'}
                                        component="img"
                                        image={'/images/bookmark-24.png'}
                                        alt="green iguana"
                                    />
                                </Box>

                                <Typography gutterBottom variant="h6" component="div">
                                    Content
                                </Typography>
                                <Typography variant="body2" color="text.light">
                                    Create instagram posts on any topic
                                </Typography>

                            </CardContent>

                        </CardActionArea>
                    </Card>
                    <Card className={'card-item'}>
                        <CardActionArea>

                            <CardContent>
                                <Box className={'card-icons'}>
                                    <CardMedia
                                        className={'mini-icon left-icon'}
                                        component="img"
                                        image={'/tasks_for_ai/instagram.png'}
                                        alt="green iguana"
                                    />
                                    <CardMedia
                                        className={'mini-icon right'}
                                        component="img"
                                        image={'/images/bookmark-24.png'}
                                        alt="green iguana"
                                    />
                                </Box>

                                <Typography gutterBottom variant="h6" component="div">
                                    Captions
                                </Typography>
                                <Typography variant="body2" color="text.light">
                                    Come up with engaging captions for your instagram posts
                                </Typography>

                            </CardContent>

                        </CardActionArea>
                    </Card><Card className={'card-item'}>
                    <CardActionArea>

                        <CardContent>
                            <Box className={'card-icons'}>
                                <CardMedia
                                    className={'mini-icon left-icon'}
                                    component="img"
                                    image={'/tasks_for_ai/facebook.png'}
                                    alt="green iguana"
                                />
                                <CardMedia
                                    className={'mini-icon right'}
                                    component="img"
                                    image={'/images/ic_bulb.png'}
                                    alt="green iguana"
                                />
                            </Box>

                            <Typography gutterBottom variant="h6" component="div">
                                Facebook
                            </Typography>
                            <Typography variant="body2" color="text.light">
                                Stand out on facebook with unique posts
                            </Typography>

                        </CardContent>

                    </CardActionArea>
                </Card>
                    <Card className={'card-item'}>
                        <CardActionArea>

                            <CardContent>
                                <Box className={'card-icons'}>
                                    <CardMedia
                                        className={'mini-icon left-icon'}
                                        component="img"
                                        image={'/tasks_for_ai/notepad.png'}
                                        alt="green iguana"
                                    />
                                    <CardMedia
                                        className={'mini-icon right'}
                                        component="img"
                                        image={'/images/bookmark-24.png'}
                                        alt="green iguana"
                                    />
                                </Box>

                                <Typography gutterBottom variant="h6" component="div">
                                    Essay
                                </Typography>
                                <Typography variant="body2" color="text.light">
                                    Have a well-structured essay written especially for your
                                </Typography>

                            </CardContent>

                        </CardActionArea>
                    </Card>
                    <Card className={'card-item'}>
                        <CardActionArea>

                            <CardContent>
                                <Box className={'card-icons'}>
                                    <CardMedia
                                        className={'mini-icon left-icon'}
                                        component="img"
                                        image={'/tasks_for_ai/instagram.png'}
                                        alt="green iguana"
                                    />
                                    <CardMedia
                                        className={'mini-icon right'}
                                        component="img"
                                        image={'/images/bookmark-24.png'}
                                        alt="green iguana"
                                    />
                                </Box>

                                <Typography gutterBottom variant="h6" component="div">
                                    Reels
                                </Typography>
                                <Typography variant="body2" color="text.light">
                                    Get creative description for your instagram Reels
                                </Typography>

                            </CardContent>

                        </CardActionArea>
                    </Card>
                    <Card className={'card-item'}>
                        <CardActionArea>

                            <CardContent>
                                <Box className={'card-icons'}>
                                    <CardMedia
                                        className={'mini-icon left-icon'}
                                        component="img"
                                        image={'/tasks_for_ai/tik-tok.png'}
                                        alt="green iguana"
                                    />
                                    <CardMedia
                                        className={'mini-icon right'}
                                        component="img"
                                        image={'/images/bookmark-24.png'}
                                        alt="green iguana"
                                    />
                                </Box>

                                <Typography gutterBottom variant="h6" component="div">
                                    TikTok
                                </Typography>
                                <Typography variant="body2" color="text.light">
                                    Boost your TikTop views with appealing captions
                                </Typography>

                            </CardContent>

                        </CardActionArea>
                    </Card>
                    <Card className={'card-item'}>
                        <CardActionArea>

                            <CardContent>
                                <Box className={'card-icons'}>
                                    <CardMedia
                                        className={'mini-icon left-icon'}
                                        component="img"
                                        image={'/tasks_for_ai/printer.png'}
                                        alt="green iguana"
                                    />
                                    <CardMedia
                                        className={'mini-icon right'}
                                        component="img"
                                        image={'/images/bookmark-24.png'}
                                        alt="green iguana"
                                    />
                                </Box>

                                <Typography gutterBottom variant="h6" component="div">
                                    AI Art
                                </Typography>
                                <Typography variant="body2" color="text.light">
                                    Create detailed promots you can use in AI image generators
                                </Typography>

                            </CardContent>

                        </CardActionArea>
                    </Card>
                    <Card className={'card-item'}>
                        <CardActionArea>

                            <CardContent>
                                <Box className={'card-icons'}>
                                    <CardMedia
                                        className={'mini-icon left-icon'}
                                        component="img"
                                        image={'/tasks_for_ai/thought-light.png'}
                                        alt="green iguana"
                                    />
                                    <CardMedia
                                        className={'mini-icon right'}
                                        component="img"
                                        image={'/images/bookmark-24.png'}
                                        alt="green iguana"
                                    />
                                </Box>

                                <Typography gutterBottom variant="h6" component="div">
                                    Reply Ideas
                                </Typography>
                                <Typography variant="body2" color="text.light">
                                    Explore possible replies to your partner's message
                                </Typography>

                            </CardContent>

                        </CardActionArea>
                    </Card>
                    <Card className={'card-item'}>
                        <CardActionArea>

                            <CardContent>
                                <Box className={'card-icons'}>
                                    <CardMedia
                                        className={'mini-icon left-icon'}
                                        component="img"
                                        image={'/tasks_for_ai/typography.png'}
                                        alt="green iguana"
                                    />
                                    <CardMedia
                                        className={'mini-icon right'}
                                        component="img"
                                        image={'/images/bookmark-24.png'}
                                        alt="green iguana"
                                    />
                                </Box>

                                <Typography gutterBottom variant="h6" component="div">
                                    Text Style
                                </Typography>
                                <Typography variant="body2" color="text.light">
                                    See your text rewritten in another style
                                </Typography>

                            </CardContent>

                        </CardActionArea>
                    </Card>

                </Box>
            </Box>
        </Box>
    );
};

export default TasksForAi;
