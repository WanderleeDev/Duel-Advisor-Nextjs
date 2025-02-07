"use client";

import Image from "next/image";
import styles from "./style.module.css";
import { CSSProperties, useState } from "react";
import { Link } from "next-view-transitions";
import { ImageBase } from "@/shared/interfaces/ImageBase.interface";

interface Props {
  links: ImageBase[];
  titleBase?: string;
}

export default function HexagonGallery({ links, titleBase }: Props) {
  const [title, setTitle] = useState<string>(titleBase ?? "");
  const onHover = (title: string) => setTitle(title);
  const onLeave = () => setTitle("");

  return (
    <>
      <div className={styles["title"] + " text-stroke capitalize"}>
        {title && <strong>{title}</strong>}
        <span>*</span>
      </div>
      <nav>
        <ul className={styles["honeycomb"]}>
          {links.map((option, i) => (
            <li className="contents" key={option.name}>
              <Link
                href={"/" + `${option.name.toLowerCase().replace(" ", "-")}`}
                className={styles["honeycomb-cell"]}
                style={
                  {
                    "--delay": `0.${i * 15}s`,
                  } as CSSProperties
                }
                onMouseEnter={() => onHover(option.name)}
                onMouseLeave={onLeave}
              >
                <Image
                  className={styles["honeycomb-cell_img"]}
                  width={250}
                  height={137.5}
                  src={option.img}
                  alt={option.name}
                />
                <span className={styles["honeycomb-cell_title"]}>
                  {option.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
