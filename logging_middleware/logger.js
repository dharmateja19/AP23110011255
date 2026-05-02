export const logger = (message, level = "info") => {
	const log = {
		message,
		level,
		timestamp: new Date().toISOString(),
	};

	console.log(JSON.stringify(log));
};
