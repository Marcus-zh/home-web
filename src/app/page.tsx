// import EasyTyper from 'easy-typer-js'
import style9 from "style9";
import React from "react";

const styles = style9.create({
  main: {
    height: "50vh",
    width: "50vw",
    top: "25vh",
    right: "25vw",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "right",
    "@media screen and (max-width: 768px)": {
      width: "70vw",
      height: "70vh",
      top: "18vh",
      right: "15vw",
    }
  },
  titles: {
    display: "flex",
    flexDirection: "column",
    color: "var(--title-color)",
  },
  name: {
    color: "var(--main-color)",
    fontWeight: "bold",
    fontSize: "60px",
    display: "inline",
    textShadow: "var(--shadow)",
  },
  span: {
    color: "var(--main-color)",
    textShadow: "var(--shadow)",
    transition: "all 0.1s ease 0s",
  },
  titleBig: {
    fontSize: "60px",
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: "1.5rem",
    "@media screen and (max-width: 768px)": {
      fontSize: "50px"
    }
  },
  titleSmall: {
    fontSize: "30px",
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: "1.5rem",
    color: "var(--text-2-color)",
  },
  buttons: {
    display: "flex",
    lineHeight: "2.8rem",
    flexDirection: "row",
    "@media screen and (max-width: 768px)": {
      flexDirection: "column",
      alignItems: 'flex-start'
    }
  },
  button: {
    marginRight: "1rem",
    "@media screen and (max-width: 768px)": {
      marginBottom: "1rem",
    },
    padding: "0 3.5rem",
    height: "3rem",
    borderRadius: "8px",
    backgroundColor: "var(--main-color)",
    boxShadow: "var(--shadow)",
    borderWidth: "medium",
    borderColor: "var(--main-color)",
    borderStyle: "solid",
    boxSizing: "border-box",
    transition: "all 0.1s ease 0s",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "var(--hover-color)",
      boxShadow: "var(--hover-shadow)",
      borderColor: "var(--hover-color)",
    },
  },
  primaryButton: {
    backgroundColor: "transparent",
    ":hover": {
      backgroundColor: "var(--hover-bg-color)",
      boxShadow: "var(--hover-shadow)",
      borderColor: "var(--hover-bg-color)",
    },
  },
  buttonA: {
    color: "var(--text-color)",
    textDecoration: "none",
    fontWeight: "bold",
  },
  footer: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: "1rem",
    color: "var(--text-2-color)",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "0.8rem",
    "@media screen and (max-width: 768px)": {
      fontSize: "0.9rem"
    }
  },
  footerAs: {
    display: "flex",
    flexDirection: "row",
  },
  footerA: {
    color: "var(--title-color)",
    textDecoration: "none",
    ":hover":{
      color: "var(--main-color)",
    }
  },
});

export default function Home() {
  return (
    <>
      <div className={styles("main")}>
        <div className={styles("titles")}>
          <div className={styles("titleBig")}>
            Hi👋,
            <br />
            I'm <div className={`${styles("name")} name`}>Marcus</div>.
          </div>
          <div className={`${styles("titleSmall")} title-small`}>
            A student
            <span className={styles("span")}> / </span>
            web developer
            <span className={styles("span")}> / </span>
            vexer
          </div>
        </div>
        <div className={styles("buttons")}>
          <Button text="Blog" to="https://blog.marcus233.top/" />
          <Button text="Gtihub" to="https://github.com/MarcusYYDS" primary />
          <Button
            text="Bilibili"
            to="https://space.bilibili.com/1024450661"
            primary
          />
        </div>
      </div>
      <footer className={styles("footer")}>
        Copyright © 2022-2023 Marcus. All rights reserved.
        <br />
        <div className={styles("footerAs")}>
        <a
          href="https://github.com/MarcusYYDS/home-web"
          target="_blank"
          className={styles("footerA")}
          style={{ marginRight: "1rem"}}
        >
          Theme: Home-web
        </a>
        <a
          href="https://icp.gov.moe/?keyword=20230221"
          target="_blank"
          className={styles("footerA")}
          >
          MoeICP: 20230221
        </a>
        </div>
      </footer>
    </>
  );
}
type ButtonProps = {
  text?: string;
  to?: string;
  primary?: boolean;
};
function Button({ text, to, primary }: ButtonProps) {
  return (
    <div
      className={`${styles("button")} ${
        primary ? styles("primaryButton") : ""
      } button`}
    >
      <a
        href={to}
        className={styles("buttonA")}
        style={{ color: primary ? "var(--main-color)" : "" }}
        target="_blank"
      >
        {text}
      </a>
    </div>
  );
}
