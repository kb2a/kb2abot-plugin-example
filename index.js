import {Plugin as Kb2abotPlugin} from "kb2abot-plugin"

export default class Internal extends Kb2abotPlugin {
	constructor(options) {
		super(options)
	}

	// Called when this plugin is disabled
	onDisable() {}

	// Called when this plugin is enabled
	onEnable() {}

	// Called after a plugin is loaded but before it has been enabled.
	onLoad() {}
}
