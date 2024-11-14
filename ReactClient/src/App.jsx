import './App.css';


async function App() {
  const url = PORT; 
  
  try{
    const fetchData = await fetch(url);
    if (!fetchData.ok){
      throw new Error(`Response status: ${fetchData.status}`);
    }
    const json = await fetchData.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }

  return (
    <>
      
    </>
  )
}

export default App
