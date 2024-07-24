export function clickOutside(element: HTMLElement, callbackFunction: () => {}) {
	function onEsc(event: KeyboardEvent) {
		if (event.key === "Escape") {
			// console.log("pressed esc - closing!");
			callbackFunction();
		}
	}

	function onClick(event: MouseEvent) {
		const target = event.target as Node;
		if (!element.contains(target)) {
			// console.log("clicked outside of modal - closing!");
			callbackFunction();
		} else {
			// console.log("clicked in modal");
		}
	}
	document.body.addEventListener("mousedown", onClick);
	document.body.addEventListener("keydown", onEsc);
	return {
		update(newCallbackFunction: () => {}) {
			callbackFunction = newCallbackFunction;
		},
		destroy() {
			document.body.removeEventListener("mousedown", onClick);
			document.body.removeEventListener("keydown", onEsc);
		},
	};
}
