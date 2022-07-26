let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
const yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}

today = `${yyyy}-${mm}-${dd}`;

/**
 * Component to display a date input
 *
 * @component
 *
 *
 * @param {string} props.name - Name of the input
 * @example
 * const string = "dateOfBirth"
 *
 *
 * @returns (
 *  <DateInput name={string} />
 *)
 */

const DateInput = (props) => {
  return <input type="date" name={props.name} max={today} required />;
};

export default DateInput;
