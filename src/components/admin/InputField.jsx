export default function InputField({ settings, setter }) {
  const { label, type, placeholder, required, min } = settings;

  return (
    <label className="input-field">
      {label}
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        onChange={(event) => setter(event.target.value)}
        min={min}
      />
    </label>
  );
}
