const fs = require('fs').promises;

async function readFileContent(fileName){
    try{
        const data = await fs.readFile(fileName,'utf-8');
        console.log('File Content :',data);
    }
    catch(error){
        console.error('Error reading the file : ',error);
    }

}

readFileContent('test-files/file1.txt');
// Expected Output: Content of file1.txt

readFileContent('test-files/empty-file.txt');
// Expected Output: (empty string)

readFileContent('test-files/nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...