import Head from "next/head";
import AddCardButton from "../src/components/AddCardButton";
import StyledWrapper from "../src/components/StyledWrapper";
import CardForm from "./CardForm";

export default function Home() {
  return (
    <StyledWrapper>
      <Head>
        <title>Lean Coffee</title>
        <meta name="description" content="Lean Coffee Board by me" />
      </Head>
      <AddCardButton />
    </StyledWrapper>
  );
}
