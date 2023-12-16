// import EasyTyper from 'easy-typer-js'
import style9 from "style9";
import React from "react";

const styles = style9.create({
  name: {
    color: "var(--main-color)",
    fontWeight: "bold",
    fontSize: "60px",
    display: "inline",
    textShadow: "0px 8px 20px rgba(0,118,255,0.39)",
  },
  main: {
    height: "50vh",
    width: "50vw",
    top: "25vh",
    right: "25vw",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "right",
  },
  titles: {
    display: "flex",
    flexDirection: "column",
    color: "var(--title-color)",
  },
  span: {
    color: "var(--main-color)",
    textShadow: "0px 8px 20px rgba(0,118,255,0.39)",
  },
  titleBig: {
    fontSize: "60px",
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: "1.5rem",
  },
  titleSmall: {
    fontSize: "30px",
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: "1.5rem",
  },
  buttons: {
    display: "flex",
    lineHeight: "2.8rem",
    flexDirection: "row",
  },
  button: {
    marginRight: "20px",
    padding: "0 3.5rem",
    height: "3rem",
    borderRadius: "8px",
    backgroundColor: "var(--main-color)",
    boxShadow: "0 4px 14px 0 rgba(0,118,255,0.39)",
    borderWidth: "medium",
    borderColor: "var(--main-color)",
    borderStyle: "solid",
    boxSizing: "border-box",
    transition: "all 0.1s ease 0s",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "var(--hover-color)",
      boxShadow: "0 6px 20px rgba(0,118,255,0.23)",
      borderColor: "var(--hover-color)",
    },
  },
  primaryButton: {
    backgroundColor: "transparent",
    // boxShadow: "none",
    ":hover": {
      backgroundColor: "var(--hover-bg-color)",
      boxShadow: "0 6px 20px rgba(0,118,255,0.23)",
      borderColor: "var(--hover-bg-color)",
    },
  },
  buttonA: {
    color: "var(--text-color)",
    textDecoration: "none",
    fontWeight: "bold",
    ":hover": {
      color: "inherit",
    },
  },
});

export default function Home() {
  return (
    <div className={styles("main")}>
      <div className={styles("titles")}>
        <div className={styles("titleBig")}>
          Hi👋,
          <br />
          I'm <div className={styles("name")}>Marcus</div>.
        </div>
        <div className={styles("titleSmall")}>
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
      }`}
    >
      <a
        href={to}
        className={styles("buttonA")}
        style={{ color: primary ? "var(--main-color)" : "" }}
      >
        {text}
      </a>
    </div>
  );
}
