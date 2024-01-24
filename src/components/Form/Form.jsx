function Form({ onAddActivity, isGoodWeather }) {

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        data['isForGoodWeather'] = data.hasOwnProperty('isForGoodWeather');

        if(data.activityName){
          onAddActivity(data);
        }else{
          alert("You need to fill at least the name of the activity.");
        }
        event.target.reset();
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new activity:</h2>

      <div>
        <label htmlFor="inputText">Name:</label>
        <input className="input__activity" type="text" placeholder="Activity description" id="inputText" name="activityName" autoComplete="off"/>
      </div>
      <br />
      <div>
        <label htmlFor="checkbox">Good-weather activity:</label>
        <input className="checkbox" type="checkbox" id="checkbox" name="isForGoodWeather" />
      </div>

      <button className={`submitButton submitButton__${isGoodWeather ? "good" : "bad"}`} type="submit">Submit</button>
    </form>
  );
}

export default Form;
