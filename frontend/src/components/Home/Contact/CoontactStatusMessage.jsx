import { CONTACT_SECTION } from '@constants/contactConstants.js';

export default function ContactStatusMessage({ status }) {
  if (!status) return null;

  const isSuccess = status === "success";
  const message = isSuccess 
    ? CONTACT_SECTION.STATUS_MESSAGES.SUCCESS 
    : CONTACT_SECTION.STATUS_MESSAGES.ERROR;
  
  const colorClass = isSuccess ? "text-green-600" : "text-red-600";

  return (
    <p className={`${colorClass} mt-4`}>
      {message}
    </p>
  );
}