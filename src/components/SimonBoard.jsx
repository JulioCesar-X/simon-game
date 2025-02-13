import { useEffect, useState } from "react";
import useGameStore from "../store/gameStore";
import { Howl } from "howler";

const sounds = [
    new Howl({
        src: ["https://cdn.freecodecamp.org/curriculum/take-home-projects/simonSound1.mp3"],
    }),
    new Howl({
        src: ["https://cdn.freecodecamp.org/curriculum/take-home-projects/simonSound2.mp3"],
    }),
    new Howl({
        src: ["https://cdn.freecodecamp.org/curriculum/take-home-projects/simonSound3.mp3"],
    }),
    new Howl({
        src: ["https://cdn.freecodecamp.org/curriculum/take-home-projects/simonSound4.mp3"],
    }),
];

const colors = ["red", "green", "blue", "yellow"];

const SimonBoard = () => {
    const { sequence, playing, addUserInput } = useGameStore();
    const [flash, setFlash] = useState(null);

    useEffect(() => {
        if (playing && sequence.length) {
            let i = 0;
            const interval = setInterval(() => {
                setFlash(sequence[i]);
                sounds[sequence[i]].play();
                setTimeout(() => setFlash(null), 500);
                i++;
                if (i >= sequence.length) clearInterval(interval);
            }, 1000);
        }
    }, [sequence, playing]);

    const handleUserClick = (index) => {
        if (!playing) return;
        sounds[index].play();
        setFlash(index);
        setTimeout(() => setFlash(null), 300);
        addUserInput(index);
    };

    return (
        <div className="simon-board">
            {colors.map((color, index) => (
                <button
                    key={index}
                    className={`simon-button ${color} ${flash === index ? "active" : ""}`}
                    onClick={() => handleUserClick(index)}
                />
            ))}
        </div>
    );
};

export default SimonBoard;
