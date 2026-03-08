const ELEMENT_REF_PATTERN = /^e\d+$/;

export function isElementRef(input: string): boolean {
	return ELEMENT_REF_PATTERN.test(input);
}

export function isSelector(input: string): boolean {
	return !isElementRef(input);
}

export function toElementTarget(input: string): { selector: string } | { ref: string } {
	return isElementRef(input) ? { ref: input } : { selector: input };
}
