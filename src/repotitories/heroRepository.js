const { readFile, writeFile } = require('fs/promises');

class HeroRepository {
    constructor({ file }) {
        this.file = file;
    }

    async _currentFileConent() {
        return JSON.parse(await readFile(this.file));
    }

    async find(itemId) {
        const all = await this._currentFileConent();
        if(!itemId) {
            return all;
        }

        return all.find(({ id }) => itemId === id );
    }

    async create(data) {
        const currentFile = await this._currentFileConent();
        currentFile.push(data);

        await writeFile(this.file, JSON.stringify(currentFile));

        return data.id;
    }
}

module.exports = HeroRepository;
