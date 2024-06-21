import React, { useState } from 'react'
import "./homepage.css"
import { words } from './wordList'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import soundImg from "../images/sound.png"

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
    const synthesizeSpeech = () => {
        const utterance = new SpeechSynthesisUtterance(selectedWord.english);
        utterance.lang = 'en-US'; // İngilizce aksan için dil ayarını yapın
        utterance.rate = 1; // Konuşma hızını ayarlayın (1 normal hız)
        window.speechSynthesis.speak(utterance);
    };
    const synthesizeSpeechProposition = () => {
        const utterance = new SpeechSynthesisUtterance(selectedWord.example);
        utterance.lang = 'en-US'; // İngilizce aksan için dil ayarını yapın
        utterance.rate = 1; // Konuşma hızını ayarlayın (1 normal hız)
        window.speechSynthesis.speak(utterance);
    };
    return (
        <div className='container' >
            <Button variant="contained" color="success" onClick={selectRandomWord}>Choose word</Button>
            <Box
                height="auto"
                width="auto"
                my={8}
                display="flex"
                alignItems="center"
                gap={4}
                p={4}
                sx={{
                    border: '2px solid black',
                    bgcolor: '#4f75c2',

                }}

            >
                {selectedWord != null ? <div>
                    <div className='word'>
                        <h1>{selectedWord.english}</h1>
                        <img onClick={synthesizeSpeech} src={soundImg} alt='...' />
                    </div>
                    <Button variant="contained" color="success" onClick={showHideFunc}>{isShow ? "Hide" : "Show Turkish.."}</Button>
                    {isShow &&
                        <h3>{selectedWord.turkish}</h3>
                    }
                    <div className='word'>
                        <h2>{selectedWord.example}</h2>
                        <img onClick={synthesizeSpeechProposition} src={soundImg} alt='...' />
                    </div>
                </div> : <h1>Please choose a word!</h1>}
            </Box>
        </div>
    )
}

export default Homepage