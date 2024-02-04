import React, { useCallback } from "react";
import { CopyToClipboard as ReactCopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "./Toast";

interface CopyToClipboardProps {
    text: string;
    className?: string;
}
export default function CopyToClipboard({
    text,
    className,
}: CopyToClipboardProps) {
    const handleCopied = useCallback(() => {
        toast.success("Copied to clipboard");
    }, []);
    return (
        <ReactCopyToClipboard text={text} onCopy={handleCopied} className={className}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 15.25V15.25C5.5335 15.25 4.75 14.4665 4.75 13.5V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H13.5C14.4665 4.75 15.25 5.5335 15.25 6.5V6.5" />
                <rect width="10.5" height="10.5" x="8.75" y="8.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="2" />
            </svg>

        </ReactCopyToClipboard>
    );
}