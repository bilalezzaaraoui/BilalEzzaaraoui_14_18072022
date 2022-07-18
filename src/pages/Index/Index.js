import "./Index.scss";

const Index = () => {
  return (
    <main className="index-container">
      <div className="title">
        <h2>Create Employee</h2>
      </div>
      <div className="form-container">
        <form>
          <label htmlFor="name">
            <span>first name</span>
            <input type="text" name="name" required />
          </label>
          <label htmlFor="lastname">
            <span>last name</span>
            <input type="text" name="lastname" required />
          </label>
          <label htmlFor="date-of-birth">
            <span>date of birth</span>
            <input type="date" name="date-of-birth" required />
          </label>
          <label htmlFor="start-date">
            <span>start date</span>
            <input type="date" name="start-date" required />
          </label>
          <fieldset>
            <legend>Address</legend>
            <label htmlFor="street">
              <span>street</span>
              <input type="text" name="street" required />
            </label>
            <label htmlFor="city">
              <span>city</span>
              <input type="text" name="city" required />
            </label>
            <label htmlFor="state">
              <span>state</span>
              <select name="state" required>
                <option>Choose a state</option>
              </select>
            </label>
            <label htmlFor="zipcode">
              <span>zipcode</span>
              <input type="number" name="zipcode" required />
            </label>
          </fieldset>
          <label htmlFor="department">
            <span>state</span>
            <select name="department" required>
              <option selected>sales</option>
            </select>
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </main>
  );
};

export default Index;
