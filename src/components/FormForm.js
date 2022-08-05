import StyledButton from "./StyledButton";

export default function FormForm() {
  return (
    <form aria-labelledby="user">
      <h2>This is a form</h2>
      <StyledButton button="submit">Submit</StyledButton>
    </form>
  );
}
