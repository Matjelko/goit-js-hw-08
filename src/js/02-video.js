import Player from "@vimeo/player";
import _ from "lodash";

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

const STORAGE_KEY = "vimeo-time";

const onSaveTimeUpdate = ({seconds} = 0) => {
    localStorage.setItem(STORAGE_KEY, seconds)
};

const getVideoPlayerCurrentTime = () => {
    return localStorage.getItem(STORAGE_KEY);
}

player
.setCurrentTime(getVideoPlayerCurrentTime())
.catch(function (err) {
    switch (err.name) {
        case "RangeError":
            break;
        default:
            break;
    }
});

player.on("timeupdate", _.throttle(onSaveTimeUpdate, 1000));