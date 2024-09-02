import React from "react";
import styles from "./WebPreview.module.css";

const WebPreview  = ({
  title,
  image,
  description,
  goto,
  url,
  githubUrl = '',
  github,
  available
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <img className={styles.img} src={image} alt="" />
      <div className={styles.links}>
        <a href={url} target="_blank" rel="noreferrer">
          {goto}
        </a>
        {available === "active" && <a href={githubUrl} target="_blank" rel="noreferrer">
          {github}
        </a>}
      </div>
    </div>
  );
};

export default WebPreview;
