
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "filename",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            message: "Give a brief description of your project.",
            name: "description",
        },
        {
            type: "checkbox",
            message: "Do you need a table of contents?",
            name: "Contents",
            choices: [
                "Yes",
                "No",
            ]
        },
    ]).then(function (data) {
        var filename = data.filename.trim(" ") + ".MD";
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });
    });
}
init();