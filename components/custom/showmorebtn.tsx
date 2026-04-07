"use client"

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ShowMoreButtonProps {
  isExpanded?: boolean;
}

export default function ShowMoreButton({ isExpanded = false }: ShowMoreButtonProps) {
  return (
    <Button
      className="gap-1"
      variant="secondary"
      aria-expanded={isExpanded}
      aria-controls="expandable-content"
    >
      {isExpanded ? "Show less" : "Show more"}
      {isExpanded ? (
        <ChevronUpIcon className="-me-1" size={16} aria-hidden="true" />
      ) : (
        <ChevronDownIcon className="-me-1" size={16} aria-hidden="true" />
      )}
    </Button>
  )
}
