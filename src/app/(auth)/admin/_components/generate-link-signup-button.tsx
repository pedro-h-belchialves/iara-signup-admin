"use client";

import { generateSignupLinkAction } from "@/actions/generate-signup-link";
import { CopyIcon } from "@/components/icons/copy";
import { LinkIcon } from "@/components/icons/link";
import { Button } from "@/components/ux/button";
import { useState } from "react";

export const GenrateLinkSignupButton = () => {
  const [generatedLink, setGeneratedLink] = useState("");

  const handleGenerateLink = async () => {
    const response = await generateSignupLinkAction();

    if (response.success) {
      setGeneratedLink(response.link || "");
      return;
    }

    alert(response.errorMessage);
  };

  const handlwCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      setGeneratedLink("Copiado com sucesso!");
      setTimeout(() => {
        setGeneratedLink("");
      }, 3000);
    } catch (err) {
      console.error("Erro ao copiar:", err);
    } /* COPIAR generatedLink */
  };
  if (generatedLink) {
    return (
      <div className="w-fit  px-10 bg-primary  text-white font-normal text-xs h-11 flex justify-center items-center rounded-lg gap-2">
        <span className="truncate max-w-[165px]">{generatedLink}</span>
        <button onClick={() => handlwCopyLink()} className="">
          <CopyIcon className="h-5 w-5" />
        </button>
      </div>
    );
  } else {
    return (
      <Button
        type="button"
        onClick={() => handleGenerateLink()}
        className="w-fit px-10 bg-primary"
      >
        <LinkIcon className="h-5 w-5" />
        Gerar link de signup
      </Button>
    );
  }
};
