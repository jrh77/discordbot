module.exports = {
	name: 'args-info',
  description: 'Information about the arguments provided.',
  args: true,
	usage: '<user> <role>',
	cooldown: 10,
	execute(message, args) {
		if (args[0] === 'foo') {
    }

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};