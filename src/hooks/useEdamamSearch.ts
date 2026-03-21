const ID = import.meta.env.VITE_ID;
const KEY = import.meta.env.VITE_KEY;

const useEdamamSearch = (onResults: (recipes: any[]) => void) => {
  const search = async (query: string) => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${ID}&app_key=${KEY}`,
    );
    const data = await response.json();
    // console.log("Search results:", data.hits);
    onResults(data.hits);
  };

  return { search };
};

export default useEdamamSearch;
