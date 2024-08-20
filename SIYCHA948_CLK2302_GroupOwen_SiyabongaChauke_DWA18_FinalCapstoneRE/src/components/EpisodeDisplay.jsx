import React from "react";

// an arrow function called EpisodeDisplay with a parameter name called props
const EpisodeDisplay = (props) => {
    const { episodes, playEpHandler } = props;

    function play(ep) {
        playEpHandler(ep);
    }
// This will be shown in the episodes menu
    return (
        <div className="select-episode">
            <h3>Episodes: </h3>
            {episodes && (
                <div className="episodes">
                    {episodes.map((episode) => {
                        return (
                            <div
                                className="episode" 
                                key={episode.title}   // The title of each episode will be shown
                                onClick={() => {
                                    play(episode);
                                }}
                            >

                                {/* The play icon will be displayed at the users far right for each  episode */}
                                <div className="episode-title">
                                    <small>{episode.episode}.</small>
                                    <h5>{episode.title}</h5>
                                </div>
                                <ion-icon name="play-outline"></ion-icon>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default EpisodeDisplay;
