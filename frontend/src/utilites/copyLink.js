const copyLinkToClipboard = () => {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
};
export default copyLinkToClipboard;