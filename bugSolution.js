useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message); // Set an error state
    }
  };
  fetchData();
}, []);

return (
  <div>
    {error ? <p>Error: {error}</p> : null}
    {data && data.map(item => (
      <p key={item.id}>{item.name}</p>
    ))}
  </div>
); 