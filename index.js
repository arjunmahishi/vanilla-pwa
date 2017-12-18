#! /usr/bin/env node

const exec = require('child_process').exec;

var run = command => {
	exec(command, (error, stdout, stderr) => {
	    if (error !== null) {
	        console.log(`exec error: ${error}`);
	    }else {
	    	console.log(`${stdout}`);
		    console.log(`${stderr}`);
	    }
	});
} 

if(process.argv.length > 2){
	run(`mkdir ${process.argv[2]}`);
	run(`cp -r skeleton/* ${process.argv[2]}`);
}
