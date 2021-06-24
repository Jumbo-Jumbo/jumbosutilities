module.exports = {
    name: 'clear',
    description: "This is a clear command! It clears previous messages.",
    async execute(message, args){

        if(message.member.roles.cache.some(r => r.name === "Moderator")){
            if(!args[0]) return message.reply("Error 69 | A number wasn't specified or it wasn't a real number.");
            if(isNaN(args[0])) return message.reply("Error 69 | A number wasn't specified or it wasn't a real number.");

            if(args[0] > 100) return message.reply("Error 69:1 | The number you specified is over your limit or less than 2! 100 is the max!");
            if(args[0] < 2) return message.reply("Error 69:1 | The number you specified is over your limit or less than 2! 100 is the max!");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });  
        } else {
            message.channel.send('Error 1 | You do not have valid permissions to do that!')
        }  
    }
}