import fs from "fs";
import path from "path";
const importJSON = pathToJson => {
	return JSON.parse(fs.readFileSync(pathToJson));
};
import getDirname from "es-dirname";

export default class Command {
	static keywords = [];
	static description = "";
	static usage = "<text>";

	constructor(options) {
		const {plugin} = options;
		this.plugin = plugin;
	}

	onCall() {}

	getKeywords() {
		return this.constructor.keywords;
	}

	getDescription() {
		return this.constructor.description;
	}

	getKeywords() {
		return this.constructor.keywords;
	}

	getKeywords() {
		return this.constructor.keywords;
	}
}
