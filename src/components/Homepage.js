import React, { useState } from 'react'
import "./homepage.css"
import { words } from './wordList'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Homepage() {
    const [isShow, setIsShow] = useState(false)
    const [selectedWord, setSelectedWord] = useState(null);


    const selectRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        const randomWord = words[randomIndex];
        setSelectedWord(randomWord);
        setIsShow(false)
    };
    function showHideFunc() {
        setIsShow(!isShow)
    }
    return (
        <div className='container' >
            <Button variant="contained" color="success" onClick={selectRandomWord}>Choose word</Button>
            <Box
                height="auto"
                width="auto"
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{
                    border: '2px solid black',
                    bgcolor: '#e3bef7',

                }}

            >
                {selectedWord != null ? <div>
                    <h1>{selectedWord.english}</h1>
                    <Button variant="contained" color="success" onClick={showHideFunc}>{isShow ? "Hide" : "Show Turkish.."}</Button>
                    {isShow &&
                        <h3>{selectedWord.turkish}</h3>
                    }
                    <h2>{selectedWord.example}</h2>
                </div> : <h1>Please choose a word!</h1>}
            </Box>
        </div>
    )
}

export default Homepage