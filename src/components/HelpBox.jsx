import { string } from "prop-types";

import "./HelpBox.css";

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h1>New Image_Dev</h1>
      <h1>New Image_Dev_Changed_workflow_1_1_dn2</h1>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
