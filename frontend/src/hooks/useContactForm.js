import { useState } from "react";
import { BACKEND_URL } from '../config.js';

export const useContactForm = () => {
  const [status, setStatus] = useState(""); // success, error, or empty
  const [loading, setLoading] = useState(false);

  const submitForm = async (formData) => {
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        return { success: true };
      } else {
        setStatus("error");
        return { success: false };
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return {
    status,
    loading,
    submitForm,
  };
};