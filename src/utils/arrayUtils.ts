function removeDuplicates<T>(arr: T[]): T[] {
    return arr.filter((item, index) => {
        // Check if the index of the current item is the first occurrence
        return index === arr.findIndex(obj => isEqual(obj, item));
    });
}

// Utility function to compare objects for equality
function isEqual(obj1: any, obj2: any): boolean {
    // Add your custom comparison logic here
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export  default removeDuplicates;