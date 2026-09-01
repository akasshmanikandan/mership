"use client";

import { useState } from "react";
import QuoteModal from "./QuoteModal";

interface GetQuoteButtonProps {
  className?: string;
  children?: React.ReactNode;
  /** Optional callback to run before opening the modal (e.g. close mobile nav) */
  onBeforeOpen?: () => void;
}

export default function GetQuoteButton({
  className,
  children,
  onBeforeOpen,
}: GetQuoteButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    onBeforeOpen?.();
    setIsOpen(true);
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        {children ?? "Get a Quote"}
      </button>
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
