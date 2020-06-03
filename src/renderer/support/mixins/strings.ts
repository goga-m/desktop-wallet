export const stringsMixings = {
	methods: {
		/**
		 * Truncates a given string adding
		 * dots in the middle (e.g AUdQs...SfdQs).
		 *
		 * @truncateStringMiddle
		 *
		 * @param input - String to trancate
		 * @param maxChars - maxChars to truncate
		 * @returns truncated string
		 */
		truncateStringMiddle(input: string, maxChars = 20) {
			if (input.length <= maxChars) return input;

			const midPos = Math.floor(maxChars / 2) - 2;
			const start = input.substr(0, midPos);
			const end = input.substr(input.length - midPos, input.length);
			return `${start}...${end}`;
		},
	},
};