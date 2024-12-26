import Image from "next/image";
import styles from "./style.module.css";
import { CSSProperties } from "react";

const HexagonGallery = () => {
  const navOptions = [
    {
      name: "Web Design",
      img: "https://images.unsplash.com/photo-1618578906891-86e569eefe7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
    },
    {
      name: "Graphic Design",
      img: "https://images.unsplash.com/photo-1618578906891-86e569eefe7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
    },
    {
      name: "Illustration",
      img: "https://images.unsplash.com/photo-1618578906891-86e569eefe7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
    },
    {
      name: "Motion Graphics",
      img: "https://images.unsplash.com/photo-1618578906891-86e569eefe7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
    },
    {
      name: "3D Animation",
      img: "https://images.unsplash.com/photo-1618578906891-86e569eefe7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
    },
    {
      name: "Cinematic 4D",
      img: "https://images.unsplash.com/photo-1618578906891-86e569eefe7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
    },
    {
      name: "Share Design",
      img: "https://images.unsplash.com/photo-1618578906891-86e569eefe7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
    },
  ];
  const customDelay = () =>
    ({
      "--delay": `0.${Math.ceil(Math.random() * 10)}s`,
    } as CSSProperties);

  return (
    <nav>
      <ul className={styles["honeycomb"]}>
        {navOptions.map((option) => (
          <li
            className={styles["honeycomb-cell"]}
            style={customDelay()}
            key={option.name}
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
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HexagonGallery;
