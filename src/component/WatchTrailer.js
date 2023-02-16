import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react';
import YouTube from 'react-youtube';



const WatchTrailer = ({ movieYoutubeTrailer }) => {


    let foundTrailer = movieYoutubeTrailer.results && movieYoutubeTrailer.results?.find((item) => item.type == "Trailer")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className='watch-trailer-area'>
                <div className='watch-trailer' onClick={handleShow}>Watch Trailer</div>
            </div>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                
            >
                <Modal.Body>
                    <button onClick={handleClose}>X</button>
                    {foundTrailer &&
                        <YouTube
                            opts={{width:750,height:600}}
                            videoId={`${foundTrailer.key}`}
                        />
                    }
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default WatchTrailer
