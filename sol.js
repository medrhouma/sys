
const fixIt = () => {
	solarSystem.style.display = "none";
	requestAnimationFrame(() => {
		solarSystem.style.display = "";
	});
}

const ro = new ResizeObserver(entries => {
	const sunHeight = solarSystem.querySelector(".sun").getBoundingClientRect().height;
	const solarSystemHeight = solarSystem.getBoundingClientRect().height;
	if(solarSystemHeight > 10 * sunHeight) {
		fixIt();
	}
});            