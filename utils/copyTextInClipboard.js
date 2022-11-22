export function copyTextInClipboard(text) {
    if (!navigator.clipboard) {
        alert("Clipboard API not available");
        return;
    }  else {
        return navigator.clipboard.writeText(text)
    }
}