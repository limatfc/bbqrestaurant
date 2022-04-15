export default function InputField({ label, setter }) {
  return (
    <label>
      {label}
      <input
        type="text"
        required
        onChange={(event) => setter(event.target.value)}
      />
    </label>
  );
}
