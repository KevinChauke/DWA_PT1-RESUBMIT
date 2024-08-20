import React from "react";
import { calcTime } from "../utilities/calculate.time";

const AudioPlayer = (props) => {
    const { state } = props;

    // Audio State
    const [audState, setAudState] = React.useState({
        isPlaying: false,
        episode: "",
    });

    function playPause() {
        const prevIsPlaying = audState.isPlaying;
        setAudState((prev) => ({
            ...prev,
            isPlaying: !prevIsPlaying,
        }));


    }

    React.useEffect(() => {
        setAudState(state);
    }, [state]);

    return (
        <>
            {audState.episode && (
                <div className="audio-player">
                    <button
                        onClick={() => {
                            setAudState({ isPlaying: false, episode: "" });
                        }}
                    >
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                    <audio
                        controls
                        // ref={audioPlayer}
                        autoPlay
                        src={state.episode.file}
                        preload="metadata"
                    ></audio>
                </div>
            )}
        </>
    );
};

export default AudioPlayer;
