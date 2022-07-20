import "./Index.scss";
import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";
import { modalActions } from "../../store/modalSlice";
import departements from "../../assets/data/department";
import states from "../../assets/data/state";
import Modal from "../../components/modal/Modal.js/Modal";

const Index = () => {
  const form = useRef();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.arr);
  const isOpen = useSelector((state) => state.modal.isOpen);

  const handleForm = (e) => {
    e.preventDefault();
    const user = {
      firstName: form.current.firstname.value.toLowerCase(),
      lastName: form.current.lastName.value.toLowerCase(),
      dateOfBirth: form.current.dateOfBirth.value.toLowerCase(),
      startDate: form.current.startDate.value.toLowerCase(),
      street: form.current.street.value.toLowerCase(),
      city: form.current.city.value.toLowerCase(),
      state: form.current.state.value.toLowerCase(),
      zipCode: form.current.zipcode.value.toLowerCase(),
      department: form.current.department.value.toLowerCase(),
    };

    dispatch(
      userActions.newUser({
        firstName: user.firstName,
        lastName: user.lastName,
        dateOfBirth: user.dateOfBirth,
        startDate: user.startDate,
        street: user.street,
        city: user.city,
        state: user.state,
        zipCode: user.zipCode,
        department: user.department,
      })
    );
    dispatch(modalActions.open());
  };

  return (
    <Fragment>
      <main className="index-container">
        <div className="title">
          <h2>Create Employee</h2>
        </div>
        <div className="form-container">
          <form ref={form} onSubmit={handleForm}>
            <label htmlFor="firstname">
              <span>first name</span>
              <input type="text" name="firstname" required />
            </label>
            <label htmlFor="lastName">
              <span>last name</span>
              <input type="text" name="lastName" required />
            </label>
            <label htmlFor="dateOfBirth">
              <span>date of birth</span>
              <input type="date" name="dateOfBirth" required />
            </label>
            <label htmlFor="startDate">
              <span>start date</span>
              <input type="date" name="startDate" required />
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
                <select name="state" defaultValue="AL" required>
                  {states.map((item, index) => (
                    <option key={index} value={item.abbreviation}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="zipcode">
                <span>zipcode</span>
                <input type="number" name="zipcode" required />
              </label>
            </fieldset>
            <label htmlFor="department">
              <span>Department</span>
              <select name="department" defaultValue="sales" required>
                {departements.map((item, index) => (
                  <option value={item.name} key={index}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit">Save</button>
          </form>
        </div>
      </main>
      {isOpen && <Modal />}
    </Fragment>
  );
};

export default Index;
