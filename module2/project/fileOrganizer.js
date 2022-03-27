let fs=require("fs");
let path = require("path");
let folderPath=process.argv[2]; //node fileOrganizer.js "C:\Users\Asus\OneDrive\Desktop\FPJ6\module2\project\Download"
//give this an input on terminal 
//process argv returns an array so writng[2] means element at 2nd index
//it returns an array having pathToNode(where node is installed) , pathToFile(where file is created) and  paths which yu give at terminal

//console.log(folderPath);

let folderExists=fs.existsSync(folderPath); //returns whether given path or name of a file or folder exists or not (true /false)

//console.log(folderExists);

let extensions = {
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpeg",".jpg",".png",".gif"],
    Software:[".exe"]
};

//checking if the folder exists or not if it exists then reading the content of that directory
if(folderExists)
{
    //console.log("path is valid");

    let files=fs.readdirSync(folderPath);
    //console.log(files);
    
    for(let i=0;i<files.length;i++)
    {
       // console.log(files[i]);
       
       //find extensions related to each file
       let ext = path.extname(files[i]);
      // console.log(ext);

      //find the folder related to that extension for ex .pdf file is a document and .mp3 is Audio  etc
      let nameOfFolder=giveFolderName(ext);
      //console.log("Ext--",ext,"Folder--",nameOfFolder);

      //give the path to the folder and check if it already exists or not 
      let pathOfFolder = path.join(folderPath,nameOfFolder); 
        let exist = fs.existsSync(pathOfFolder);

        //if it exists then yu have to move the file from download folder(folderPath) to pathOfFolder(Audio,video folder)
        if(exist){
            moveFile(folderPath,pathOfFolder,files[i]);
        }
        //if doesnt exists then yu have to first create the folder then move the file accordingly
        else{
            fs.mkdirSync(pathOfFolder);  //creating a folder
            moveFile(folderPath,pathOfFolder,files[i]);
        }
    }
}

else
{
    console.log("Please enter a valid path");
}

function giveFolderName(ext){
    for(let key in extensions){   //for each loop
        let extArr = extensions[key];
        for(let i=0;i<extArr.length;i++){
            if(extArr[i] == ext){
                return key;
            }
        }
    }
    return 'Others'
}

//folderPath: download directory
//pathOfFolder: Audio,Video,Image etc

//moving a file 
function moveFile(folderPath,pathOfFolder,fileName){   //(download->(Audio,Video,Document))
    let sourcePath = path.join(folderPath,fileName);
    let destinationPath = path.join(pathOfFolder,fileName);
    fs.copyFileSync(sourcePath,destinationPath);
    fs.unlinkSync(sourcePath);
}
