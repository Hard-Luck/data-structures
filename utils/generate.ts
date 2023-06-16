const fs = require('fs');
const path = require('path');

const folderName = process.argv[2];

if (!folderName) {
    console.error('Please provide a folder name as the first argument.');
    process.exit(1);
}

const projectRoot = process.cwd();
const folderPath = path.join(projectRoot, 'src', folderName);

// Create the folder and its parent directories
fs.mkdirSync(folderPath, { recursive: true });

// Create index.ts file
const indexPath = path.join(folderPath, 'index.ts');
const className = capitalizeFirstLetter(folderName);

const indexFileContent = `export default class ${className} {
  // Class implementation goes here
}
`;
fs.writeFileSync(indexPath, indexFileContent);

// Create __tests__ folder
const testsFolderPath = path.join(folderPath, '__tests__');
fs.mkdirSync(testsFolderPath);

// Create index.test.ts file inside __tests__ folder
const testFilePath = path.join(testsFolderPath, 'index.test.ts');

const testFileContent = `import ${className} from '../index';

describe('${className}', () => {
  // Test cases go here
});
`;
fs.writeFileSync(testFilePath, testFileContent);

console.log(`Created folder "${folderName}" with index.ts and __tests__ folder in the project root directory.`);

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
