fetch('http://localhost:3000/name')
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.error('Error fetching posts:', error));
