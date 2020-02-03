export function checkLocalStorageSupport() {
    try {
        // If these succeed, localStorage is available.
        localStorage.setItem('CKLocalStorageTest', `TestData${new Date().now()}`);
        localStorage.removeItem('CKLocalStorageTest');
        return true;
    } catch (error) {
        // Else, it isn't available.
        return false;
    }
}