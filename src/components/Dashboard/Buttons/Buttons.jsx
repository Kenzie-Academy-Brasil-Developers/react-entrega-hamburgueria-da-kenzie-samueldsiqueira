const Buttons = (className, onClick, text) => {
	return (
		<button className={className} onClick={onClick}>
			{text}
		</button>
	);
};

export default Buttons;
