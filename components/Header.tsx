import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">
        <div className="hidden md:block">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/logo-icon.svg"
              alt="Logo"
              width={36}
              height={36}
              className="hidden md:block"
            />
            <span className="text-lg font-bold">Scribe</span>
          </div>
        </div>

        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo Icon"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
