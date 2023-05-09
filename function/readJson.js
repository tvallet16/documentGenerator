const fs = require('fs').promises;

async function readJsonFile(filePath) {
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const jsonData = JSON.parse(fileContent);
      return jsonData;
    } catch (error) {
      console.error(`Erreur lors de la lecture du fichier JSON: ${error.message}`);
      throw error;
    }
  }

  module.exports = readJsonFile;