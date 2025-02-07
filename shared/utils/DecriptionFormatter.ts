function decryptionFormatter(text: string): string[] {
  if (!text.trim()) return [];
  return (
    text
      .match(/(?:[^."●:]+|"[^"]*")+(?:\.|●|:)?/g)
      ?.filter(
        (s) => s.trim() !== "" && !/^[A-Z]\.(?:[A-Z]\.)+$/.test(s.trim())
      )
      .map((s) => s.trim()) || []
  );
}
