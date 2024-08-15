import { promises as fs } from 'fs';
const filename = './db.json';

interface Message {
    author?: string;
    message: string;
    photo?: string | null;
}

let data: Message[] = [];

const fileDb = {
    async init() {
        try {
            const fileContents = await fs.readFile(filename);
            data = JSON.parse(fileContents.toString());
        } catch (e) {
            data = [];
        }
    },
    async getItems() {
        return data;
    },
    async addItem(item: Message) {
        data.push(item);
        await this.save();
    },
    async save() {
        return fs.writeFile(filename, JSON.stringify(data , null , 2));
    }
};



export default fileDb;