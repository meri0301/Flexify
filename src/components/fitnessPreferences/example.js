
// Code Synchronizing
function syncData() {
    const offlineData = localStorage.getItem('offlineData');
    if (offlineData) {
        fetch('https://api.example.com/sync', {
            method: 'POST',
            body: offlineData,
        });
    }
}