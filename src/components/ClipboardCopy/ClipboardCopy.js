function ClipboardCopy({ copyText }) {
  const [isCopied, setIsCopied] = useState(false);

  // TODO: Implement copy to clipboard functionality

  return (
    <div>
      <input type="text" value={copyText} readOnly />
      <button>
        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
      </button>
    </div>
  );
}