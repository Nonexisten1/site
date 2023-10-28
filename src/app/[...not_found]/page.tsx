"use client";
import { Button, Card } from "@gravity-ui/uikit";
import React from "react";
import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";

export default function Error() {
  return (
    <div>
      <Card theme="danger">Something went wrong? Try something else!</Card>

      <Button view="outlined-info" href="/">
        Go back
      </Button>
    </div>
  );
}
