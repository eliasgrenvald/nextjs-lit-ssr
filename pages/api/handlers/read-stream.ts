export const readStream = (stream: any, encoding = "utf8") => {
	stream.setEncoding(encoding);
	return new Promise((resolve, reject) => {
			let data = "";
			stream.on("data", (chunk: any) => { data += chunk });
			stream.on("end", () => resolve(data));
			stream.on("error", (error: any) => reject(error));
	});
}