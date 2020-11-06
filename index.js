const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	var globalVariable;

	if (command === 'add') {
		var date = new Date();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var year = date.getFullYear();
		var formattedDate = `${month}-${day}-${year}`;

		let tasks = {"Today\'s Date" : formattedDate};
		var propertyName = args;
		var propertyValue = "Not Done";
		tasks[propertyName] = propertyValue;

		message.channel.send(JSON.stringify(args + " has been added! Here are your tasks for today."));
		message.channel.send(JSON.stringify(tasks));	
		//	message.channel.send(JSON.stringify(args)); Doesn't save args, just sends current args
	}
	else if (command === 'addtest') {
		var date = new Date();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var year = date.getFullYear();
		var formattedDate = `${month}-${day}-${year} `;

		var taskList = new Array();
		if (!(args in taskList)) {
			taskList.push(args)
		}

		var format = {formattedDate : taskList};
		

		message.channel.send(JSON.stringify(args + " has been added! Here are your tasks for today."));
		message.channel.send(JSON.stringify(format));	
		//	message.channel.send(JSON.stringify(args)); Doesn't save args, just sends current args
	}
	else if (command === 'show') {
	}
	else if (command === 'start' || command === 'end') {
		var date = new Date();
		var day = date.getDate();
		var hour = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		amPm = "AM";

		if (hour > 12) {
			hour = hour - 12;
			amPm = "PM";
		}
		var startTime;
		var endTime;
		var timeDone;

		if (command === 'start') {
			var startTime = hour + ":" + minutes + " " + amPm;
			message.channel.send("Clocking in at " + startTime);

			startHourInMinutes = hour * 60;
			startMinutesDone = startHourInMinutes + minutes;
		}
		if (command === 'end') {
			var endTime = hour + ":" + minutes + " " + amPm;
			message.channel.send("Clocking out at " + endTime);

			endHourInMinutes = hour * 60;
			endMinutesDone = endHourInMinutes + minutes;
			
			timeDone = endMinutesDone - startMinutesDone;
			message.channel.send("This studying session lasted: " + timeDone + " minutes");
		}
	}
 
	// other commands...
});

client.login(token);