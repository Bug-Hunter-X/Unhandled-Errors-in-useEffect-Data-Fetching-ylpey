useEffect(() => {  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => setData(data)); }, []);

// ... later in the component ...

return (
  <div>
    {data.map(item => (
      <p key={item.id}>{item.name}</p>
    ))}
  </div>
);

//Missing error handling for fetch request, this can cause errors and crashes if there is a network issue or the API is unavailable.