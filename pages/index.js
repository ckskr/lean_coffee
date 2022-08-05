import Head from "next/head";
import StyledButton from "../src/components/StyledButton";
import StyledWrapper from "../src/components/StyledWrapper";

export default function Home() {
  return (
    <StyledWrapper>
      <Head>
        <title>Lean Coffee</title>
        <meta name="description" content="Lean Coffee Board by me" />
      </Head>
      <StyledButton>Add card</StyledButton>
    </StyledWrapper>
  );
}
