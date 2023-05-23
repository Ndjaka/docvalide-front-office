
function fileToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result?.toString().split(',')[1];
            if (base64String) {
                resolve(base64String);
            } else {
                reject(new Error('Failed to convert file to base64.'));
            }
        };

        reader.onerror = error => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
}

export default fileToBase64;