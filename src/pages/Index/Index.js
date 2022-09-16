import "./Index.scss";
import React, { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";
import { modalActions } from "../../store/modalSlice";
import departements from "../../assets/data/department";
import states from "../../assets/data/state";
import Modal from "../../components/Modal/Modal";
import { DateInput } from "modalib";
import SelectList from "../../components/SelectList/SelectList";

/**
 * Component to display an index page
 *
 * @component
 *
 *
 * @returns (
 *  <Index />
 *)
 */

const Index = () => {
  const form = useRef();
  const dispatch = useDispatch();
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
    form.current.reset();
  };

  const maxLengthCheck = (object) => {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength);
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
              <DateInput name="dateOfBirth" />
            </label>
            <label htmlFor="startDate">
              <span>start date</span>
              <DateInput name="startDate" />
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
                <SelectList data={states} name="state" defaultValue="AL" />
              </label>
              <label htmlFor="zipcode">
                <span>zipcode</span>
                <input
                  type="number"
                  name="zipcode"
                  onChange={(e) => maxLengthCheck(e.target)}
                  maxLength="5"
                  min="10000"
                  max="99999"
                  required
                />
              </label>
            </fieldset>
            <label htmlFor="department">
              <span>Department</span>
              <SelectList
                data={departements}
                name="department"
                defaultValue="sales"
              />
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
