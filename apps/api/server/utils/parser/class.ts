export class FileNode {
    name: string;
    type: string; // "file" or "folder"
    children: FileNode[];

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
        this.children = [];
    }

    addChild(child: FileNode) {
        this.children.push(child);
    }
}
