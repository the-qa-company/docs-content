import React from "react";
import { API } from "@stoplight/elements";
import styles from "./index.module.scss";

export default function Stoplight({ apiDescriptionUrl }) {
  return (
    <div className={(styles).stoplight}>
      <API apiDescriptionUrl={apiDescriptionUrl} router="hash" />
    </div>
  );
}