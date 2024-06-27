const fs = require('fs');

function instructorJson(instructor){
    let jsonFiles = path.join(__dirname,'../public/javascript/dataJSON/instructor.json');
    fs.readFile(jsonFiles,'utf8',(error,data)=>{
        if(error){
            console.error('erreur de recuperation de donnees',error);
            return instructor(error,null);
        }

        try{
           const jsonData = JSON.parse(data);
           return instructor(null,jsonData);

        }catch(error){
            console.error('une erreur s4est produite',error);
            return instructor(error,null);
        }
    })
}

module.exports = { instructorJson };