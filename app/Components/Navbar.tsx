"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { github } from "../utils/icon";
import React from "react";
import { ThemeDropdown } from "@/app/Components/ThemeDropdown/ThemeDropdown";
import SearchDialog from "@/app/Components/SearchDialog/SearchDialog";
import { useGlobalContext } from "@/app/context/globalContext";

function Navbar() {
  const router = useRouter();
  const { state } = useGlobalContext();

  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog/>

        <div className="btn-group flex items-center gap-2">
          <ThemeDropdown/>
          <Button
            className="source-code flex items-center gap-2"
            onClick={() => {
              router.push("https://github.com");
            }}
          >
            {github} Source Code
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
