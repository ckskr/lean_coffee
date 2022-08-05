import StyledButton from "./StyledButton";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AddCardButton() {
  const router = useRouter();
  return (
    <StyledButton type="button" onClick={() => router.push("./form")}>
      Add card
    </StyledButton>
  );
}
