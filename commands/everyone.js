import {Response} from "kb2abot";

export default class Everyone extends Kb2abotCommand {
	static keywords = ["everyone", "all"];
	static description = "Dùng để gọi hồn tất cả mọi người trong group";
	static permission = {
		"*": "admin"
	};
	static guide = "<text>";

	constructor(options) {
		super(options);
	}

	async onCall(sender, args, sendMessage) {
		const text = getParam(message.body);
		const {participantIDs} = await getThreadInfo(message.threadID);
		let replyMsg = "";
		const mentions = [];
		participantIDs.splice(participantIDs.indexOf(fca.getCurrentUserID()), 1);
		for (const id of participantIDs) {
			let tag = "@";
			replyMsg += tag;
			mentions.push({
				tag,
				id: id,
				fromIndex: replyMsg.length - tag.length
			});
		}
		return new Response.Facebook({
			body: replyMsg + (text || ""),
			mentions
		});
	}
}
