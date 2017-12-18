#! /usr/bin/env node

const exec = require('child_process').exec;
const path = require('path');


if(process.argv.length > 2){
	console.log("Generating files...")

	exec(`mkdir ${process.argv[2]}`, (error, stdout, stderr) => {
	    if (error !== null) {
	        console.log(`exec error: ${error}`);
	    }else {
		    exec(`cp -r ${path.resolve(__dirname, 'skeleton/*')} ${process.argv[2]}`, 
	    	(err, stdout, stderr) =>{
		    	if(err){
			        console.log(`exec error: ${error}`);
		    	}else{
					console.log(`Your new PWA is hack-ready.\n\nrun`, 
					`"cd ${process.argv[2]}"\n\nand build something awesome!`);
		    	}		
	    	})
	    }
	});
}else{
	console.log('Run "vanilla-pwa <name of the pwa>"')
}
