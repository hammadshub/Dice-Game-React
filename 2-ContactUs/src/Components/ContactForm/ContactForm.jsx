import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Wali");
  const [email, setEmial] = useState("Wali@gmail.com");
  const [text, setText] = useState("Not Welcome Here!");

  // bUttons Js
  const onViaCallSubmit = () => {
    console.log("I am from call");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmial(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />

          <Button
            onClick={onViaCallSubmit}
            text="VIA CALL"
            icon={<MdAddCall fontSize="24px" />}
          />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Name</label>
            <textarea name="name" rows="8" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="./images/img22.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
