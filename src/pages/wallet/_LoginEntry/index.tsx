import useAuth from "@site/src/hooks/useAuth";
import { GitHubWhite as GitHubIconWhite } from "@site/src/icons";
import React, { useMemo } from "react";
import LoginTipParagraph from "@site/src/components/LoginTipParagraph";
import { Button } from "@site/src/components/ui/Button";
import ConnectWalletButton from "@site/src/components/ui/ConnectWalletButton";
import Translate, { translate } from "@docusaurus/Translate";
import useRouterQuery from "@site/src/hooks/useRouterQuery";
import { cn } from "@site/src/utils/class-utils";

function LoginEntry() {
  const { signInWithGithub } = useAuth();
  const query = useRouterQuery();
  const isBindWallet = query.get("bind_wallet") === "true";
  const redirect = query.get("redirect");

  const tips = useMemo(() => {
    return translate({
      id: "login.LoginEntry.tips",
      message: "或者您的帐户已连接到钱包",
    });
  }, []);

  const handleSignInWithGithub = () => {
    const url = window.location.origin + redirect;
    signInWithGithub(
      redirect ? { useLocationHref: true, customPath: url } : {},
    );
  };

  return (
    <>
      {!isBindWallet && (
        <>
          <Button className="w-full" onClick={() => handleSignInWithGithub()}>
            <GitHubIconWhite />
            <span className="ml-3 text-base">
              <Translate id="login.LoginEntry.Github.button">
                使用 GitHub 登录
              </Translate>
            </span>
          </Button>
          <LoginTipParagraph text={tips} />
        </>
      )}
      <ConnectWalletButton
        className={cn(
          "w-full bg-background text-content border border-border border-solid text-base",
        )}
      >
        <Translate id="login.LoginEntry.Ethereum.button">
          使用以太坊登录
        </Translate>
      </ConnectWalletButton>
    </>
  );
}

export default LoginEntry;
