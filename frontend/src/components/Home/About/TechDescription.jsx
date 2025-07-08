import React from "react";

export default function TechDescription({ description, className = "" }) {
  return (
    <p className={className}>
      {description}
    </p>
  );
}