import { CONTACT_SECTION } from '@constants/contactConstants.js';

const FormField = ({ type, name, placeholder, className, required = false, rows = null }) => {
  const baseClasses = "w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500";
  
  if (type === "textarea") {
    return (
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className={`${baseClasses} ${className}`}
        required={required}
      />
    );
  }
  
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`${baseClasses} ${className}`}
      required={required}
    />
  );
};

export default function ContactFormFields() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          type="text"
          name="name"
          placeholder={CONTACT_SECTION.PLACEHOLDERS.NAME}
          required
        />
        <FormField
          type="email"
          name="email"
          placeholder={CONTACT_SECTION.PLACEHOLDERS.EMAIL}
          required
        />
      </div>

      <FormField
        type="textarea"
        name="message"
        placeholder={CONTACT_SECTION.PLACEHOLDERS.MESSAGE}
        className="mb-4"
        rows={CONTACT_SECTION.FORM.TEXTAREA_ROWS}
        required
      />
    </>
  );
}