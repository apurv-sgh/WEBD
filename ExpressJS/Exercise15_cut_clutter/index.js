// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. rajjo.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. appu.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/rajjo.pdf
// zip/harry.zip zip/Rohan.zip



import fs from "fs/promises"
import fsn from "fs"
import path from "path"
import fsa from "fs-extra"


const basepath="D:\\WEBD\\ExpressJS\\Exercise15_cut_clutter"
let files=await fs.readdir(basepath)


for (const item of files) {

    let ext=item.split(".")[item.split(".").length-1]
    console.log(ext)
    
    if(ext!="js"&& ext!="json" && item.split(".").length>1){    //exception for js ,json, and folder
        if(fsn.existsSync(path.join(basepath,ext))) {           //if files exists then,
        //move the files to this directory/.

        // let slug1 =item;
        // let slug2 =ext;
        // fsa.move('D:/WEBD\\ExpressJS\\Exercise15_cut_clutter\:slug1', 'D:\\WEBD\\ExpressJS\\Exercise15_cut_clutter\:slug2')

        fs.rename(path.join(basepath,item),path.join(basepath,ext,item))  
    }

    else{
        fs.mkdir(ext)  //creating new folder or new directory with value of ext as name.
    }

}
}