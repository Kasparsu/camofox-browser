const SELECTOR_HINT_PATTERN = /[.#\[\]:>~+*=|^$]/;

export function isSelector(input: string): boolean {
	return SELECTOR_HINT_PATTERN.test(input) || input.includes(' ');
}

export function toElementTarget(input: string): { selector: string } | { ref: string } {
	return isSelector(input) ? { selector: input } : { ref: input };
}
