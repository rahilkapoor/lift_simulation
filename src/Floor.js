import "./floor.css";
import {Testing} from "./Scheduling"

const Floor = ({ index }) => {
	const askLift = (floor) => {
        // console.log(floor);
        // Testing(floor);
        Testing(floor);
        // <Testing floor={floor} />
		// const lift = document.getElementById("lift");
		// const curpos = parseInt(getComputedStyle(lift).bottom);
		// const nextpos = 120 * (floor - 1) + (floor - 1) * 10;
		// const sec = Math.abs(curpos - nextpos) / 120;
		// const timer = (1 * sec).toString();

		// lift.style.bottom = nextpos + "px";
		// lift.style.transition = "bottom " + timer + "s ease-in-out";
	};
	return (
		<div className="floor" id={index}>
			<div className="panel">
				<h2>Floor {index}</h2>
				<button
					className="panel__button"
					onClick={() => askLift(index)}
				>
					🔼
				</button>
				<button
					className="panel__button"
					onClick={() => askLift(index)}
				>
					🔽
				</button>
			</div>
			<div className="lifts"></div>
		</div>
	);
};

export default Floor;
