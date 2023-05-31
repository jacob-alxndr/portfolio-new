export default function SplitText({ copy, role }) {
  return (
    <span aria-label={copy} role={role}>
      {copy.split("").map((char, index) => (
        <span aria-hidden="true" key={index}>
          {char}
        </span>
      ))}
    </span>
  );
}
