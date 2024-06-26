// src/Home.js
import React from 'react';
import {chatItem} from "../AppStyle";
import {Box, SnackbarContent, Stack, Typography} from "@mui/material";
import {useRouter} from 'next/navigation';
const ChatListItem = () => {


    const router = useRouter();

    const handleNavigate = () => {
        router.push('/messenger');
    }

    return (
        <Box className={'chat-item-list'} sx={chatItem}>

            <h2 className={'title'}>Receive quick answers</h2>
            <Box className={"group-items"}>
                <Typography>Ask for Advice</Typography>
                <Box>
                    <Stack spacing={2} sx={{maxWidth: 600, mb: 1,}}>
                        <SnackbarContent
                            message="Give me a step-bystep plan to get Rich"
                            action={<Box
                                component="img"
                                src="/images/smily_doller.png"
                                alt="Custom Icon"
                                sx={{width: 24, height: 24}}
                            />
                            }
                            onClick={handleNavigate}
                        />
                    </Stack>
                    <Stack spacing={2} sx={{maxWidth: 600,}}>
                        <SnackbarContent
                            message="How can I get a promotion?"
                            action={<Box
                                component="img"
                                src="/tasks_for_ai/flying-money.png"
                                alt="Custom Icon"
                                sx={{width: 24, height: 24}}
                            />
                            }
                            onClick={handleNavigate}
                        />
                    </Stack>
                </Box>
            </Box>

            <Box className={"group-items"}>
                <Typography>Have Fun</Typography>
                <Box>
                    <Stack spacing={2} sx={{maxWidth: 600, mb: 1,}}>
                        <SnackbarContent
                            message="Tell me a joke"
                            action={<Box
                                component="img"
                                src="/images/ic_joke.png"
                                alt="Custom Icon"
                                sx={{width: 24, height: 24}}
                            />
                            }
                            onClick={handleNavigate}
                        />
                    </Stack>
                </Box>
            </Box>

            <Box className={"group-items"}>
                <Typography>Write & Edit</Typography>
                <Box>
                    <Stack spacing={2} sx={{maxWidth: 600, mb: 1}}>
                        <SnackbarContent message="Create a one-page essay on The Great Gatsby"
                                         action={<Box
                                             component="img"
                                             src="/images/ic_note.png"
                                             alt="Custom Icon"
                                             sx={{width: 24, height: 24}}
                                         />
                                         }
                                         onClick={handleNavigate}
                        />
                    </Stack>
                </Box>
            </Box>

            <Box className={"group-items"}>
                <Typography>Improve Health</Typography>
                <Box>
                    <Stack spacing={2} sx={{maxWidth: 600, mb: 1}}>
                        <SnackbarContent message="How many hours of sleep does an average person need?"
                                         action={<Box
                                             component="img"
                                             src="/images/ic_study.png"
                                             alt="Custom Icon"
                                             sx={{width: 24, height: 24}}
                                         />
                                         }
                                         onClick={handleNavigate}
                        />
                    </Stack>
                </Box>
            </Box>

            <Box className={"group-items"}>
                <Typography>Talk Philosopy</Typography>
                <Box>
                    <Stack spacing={2} sx={{maxWidth: 600, mb: 1}}>
                        <SnackbarContent
                            message="What is the meaning of life?"
                            action={<Box
                                component="img"
                                src="/tasks_for_ai/looking.png"
                                alt="Custom Icon"
                                sx={{width: 24, height: 24}}
                            />
                            }
                            onClick={handleNavigate}
                        />
                    </Stack>
                </Box>
            </Box>

            <Box className={"group-items"}>
                <Typography>Play Games</Typography>
                <Box>
                    <Stack spacing={2} sx={{maxWidth: 600, mb: 1}}>
                        <SnackbarContent message="Lets play Word Ladder. You go first"
                                         action={<Box
                                             component="img"
                                             src="/tasks_for_ai/target.png"
                                             alt="Custom Icon"
                                             sx={{width: 24, height: 24}}
                                         />
                                         }
                                         onClick={handleNavigate}
                        />
                    </Stack>
                </Box>
            </Box>


        </Box>
    );
};

export default ChatListItem;
