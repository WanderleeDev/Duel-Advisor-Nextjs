import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  content: string | string[];
}

export default function ProfileEmptyContent({ content, children }: Props) {
  if (Array.isArray(content) && content.length > 0) {
    return (
      <div className="flex flex-col justify-center gap-4 text-center text-muted-foreground">
        {content.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
        {children}
      </div>
    );
  }

  if (typeof content === "string" && !content.length) {
    return (
      <div className="flex flex-col justify-center gap-4 text-center text-muted-foreground">
        <p>{content}</p>
        {children}
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center gap-4 text-center text-muted-foreground">
      {children};
    </div>
  );
}
