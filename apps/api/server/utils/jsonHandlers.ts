import { FileNode } from "./parser/class";


export function createFileStructure(files: string[]): FileNode {
    const root = new FileNode('', 'folder');

    for (const filePath of files) {
        const pathSegments = filePath.split('/');
        let currentNode = root;

        for (const segment of pathSegments) {
            let childNode = currentNode.children.find((node) => node.name === segment);

            if (!childNode) {
                const isFile = segment.includes('.'); // Check if the segment has an extension
                const type = isFile ? 'file' : 'folder';
                childNode = new FileNode(segment, type);
                currentNode.addChild(childNode);
            }

            currentNode = childNode;
        }
    }

    return root;
}

export function convertToJSON(node: FileNode): Record<string, any>[] {
    return node.children.map((child) => ({
        name: child.name,
        type: child.type,
        children: convertToJSON(child)
    }));
}