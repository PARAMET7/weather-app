import useLocalStorageState from "use-local-storage-state";
import useFetch from "./hooks/UseFetch";
//Components
import Form from "./components/Form/Form";
import List from "./components/List/List";
import GoTopButton from "./components/GoTopButton/GoTopButton";
// Styles
import "./App.css";

function App() {
  const API_URL = "https://example-apis.vercel.app/api/weather/";
  const { data, error } = useFetch(API_URL, 5000);
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(formData) {
    setActivities([formData, ...activities]);
  }

  function handleDeleteActivity(index) {
    if (confirm("Do you wanna delete this activity?")) {
      const newActivitiesList = activities.filter((activity, i) => {
        return i !== index;
      });
      setActivities(newActivitiesList);
    }
  }

  if (error) {
    return <h1>Error!!!</h1>;
  }

  return (
    <>
      {data && (
        <main
          className={`main-container ${
            data.isGoodWeather ? "good" : "bad"
          }-weather-app`}
        >
          <List
            activities={activities}
            weatherData={data}
            onDeleteActivity={handleDeleteActivity}
          />
          <Form
            onAddActivity={handleAddActivity}
            isGoodWeather={data.isGoodWeather}
          />
          <GoTopButton />
        </main>
      )}
    </>
  );
}

export default App;
