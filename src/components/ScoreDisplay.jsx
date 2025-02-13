import useGameStore from "../store/gameStore";

const ScoreDisplay = () => {
    const { step } = useGameStore();

    return (
        <div className="score-display">
            <p>Passos</p>
            <span>{step}</span>
        </div>
    );
};

export default ScoreDisplay;
