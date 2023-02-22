import { useRef, useState } from "react";
import "./App.css";
import { Button, Input } from "./components/Utils";

function App() {
	const inputRef = useRef<HTMLInputElement>(null);
	const inputRef2 = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		inputRef.current?.focus();
	};

	return (
		<div className="App">
			<div className="inputs">
				<label>Name</label>
				<Input ref={inputRef} />
				<label>Email</label>
				<Input ref={inputRef2} />
			</div>
			<div className="btns">
				<Button onClick={handleClick}>Focus</Button>
				<Button onClick={() => inputRef2.current?.focus()}>
					Focus 2
				</Button>
			</div>
		</div>
	);
}

export default App;
