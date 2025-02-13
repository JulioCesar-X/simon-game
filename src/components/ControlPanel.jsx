import useGameStore from "../store/gameStore";

const ControlPanel = () => {
    const { addStep, resetGame, playing } = useGameStore();

    return (
        <div className="control-panel">
            <button className="start-btn" onClick={addStep}>
                {playing ? "Próximo Passo" : "Iniciar"}
            </button>
            <button className="reset-btn" onClick={resetGame}>
                Resetar
            </button>
        </div>
    );
};

export default ControlPanel;
