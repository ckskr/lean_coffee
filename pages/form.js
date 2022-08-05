import Head from "next/head";
import StyledWrapper from "../src/components/StyledWrapper";
import CardForm from "../src/components/CardForm";

export default function Form() {
  return (
    <StyledWrapper>
      <Head>
        <title>Form</title>
        <meta name="description" content="Lean Coffee Board by me" />
      </Head>
      <h1>Form page</h1>
      <CardForm></CardForm>
    </StyledWrapper>
  );
}
