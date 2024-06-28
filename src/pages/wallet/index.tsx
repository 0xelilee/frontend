import React from "react";
import Layout from "@theme/Layout";
import { useAccount } from "wagmi";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { WTFLetter as WTFLetterIcon } from "@site/src/icons";
import Translate from "@docusaurus/Translate";
import ChangeWallet from "@site/src/pages/wallet/_ChangeWallet";
import LoginEntry from "@site/src/pages/wallet/_LoginEntry";

function Login() {
  const { siteConfig } = useDocusaurusContext();
  const { isConnected } = useAccount();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Login to WTF Academy"
      noFooter
    >
      <div className="mx-auto text-center mt-14">
        <WTFLetterIcon />
        <p className="text-2xl font-bold leading-8 text-content">
          <Translate id="login.intro">登录 WTF 学院</Translate>
        </p>
        <div className="px-10 py-8 mt-8 bg-white rounded-lg shadow-md dark:bg-zinc-900 w-[340px] md:min-w-[340px] md:w-auto">
          {console.log("isConnected", isConnected)}
          {isConnected ? <ChangeWallet /> : <LoginEntry />}
        </div>
      </div>
    </Layout>
  );
}

export default Login;
