import Head from "next/head";
import Image from "next/image";

import StyledButton from "../src/components/StyledButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lean Coffee</title>
        <meta name="description" content="Lean Coffee Board by me" />
      </Head>
      <StyledButton>Add card</StyledButton>
    </div>
  );
}
