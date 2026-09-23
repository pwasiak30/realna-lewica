export function Prose({ body }: { body: string }) {
  const chunks = body.trim().split(/\n\n+/);
  return (
    <div className="space-y-4 text-ink">
      {chunks.map((chunk) => {
        const lines = chunk
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);
        const bullets = lines.length > 0 && lines.every((line) => line.startsWith("—") || line.startsWith("- "));
        if (bullets) {
          return (
            <ul key={chunk} className="space-y-2 border-l-2 border-gold pl-4">
              {lines.map((line) => (
                <li key={line}>{line.replace(/^[—-]\s*/, "")}</li>
              ))}
            </ul>
          );
        }
        const only = lines[0] ?? "";
        if (lines.length === 1 && only.endsWith(":") && only.length < 48) {
          return (
            <p key={chunk} className="pt-2 font-semibold tracking-wide text-red">
              {only}
            </p>
          );
        }
        return (
          <p key={chunk} className="max-w-3xl">
            {lines.join(" ")}
          </p>
        );
      })}
    </div>
  );
}
