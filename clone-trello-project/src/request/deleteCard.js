
const removeCard = (id) => {
    fetch(`https://radiant-temple-07706.herokuapp.com/cards${id}`, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
    })
        .then(() => {
            console.log('removed');
            document.location.reload();
        })
        .catch((err) => {
            console.error(err);
        });
};