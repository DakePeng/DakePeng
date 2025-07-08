import SectionHeader from "./SectionHeader";
import SectionLine from "./SectionLine";
import ContactFormFields from "./ContactFormFields";
import ContactStatusMessage from "./ContactStatusMessage";
import { useContactForm } from '@hooks/useContactForm.js';
import { CONTACT_CONSTANTS } from '@constants/contactConstants.js';
import { extractFormData, resetForm, getButtonClasses } from '@utils/contactUtils.js';

export default function Contact() {
  const { status, loading, submitForm } = useContactForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = extractFormData(e.target);
    const result = await submitForm(formData);
    
    if (result.success) {
      resetForm(e.target);
    }
  };

  return (
    <section className="w-full px-4 md:px-8 lg:px-24" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader 
          title={CONTACT_CONSTANTS.TITLE} 
          description={CONTACT_CONSTANTS.DESCRIPTION} 
        />

        <form onSubmit={handleSubmit} className="space-y-6">
          <ContactFormFields />

          <button
            type="submit"
            disabled={loading}
            className={getButtonClasses(loading)}
          >
            {loading ? CONTACT_CONSTANTS.BUTTON_TEXT.SENDING : CONTACT_CONSTANTS.BUTTON_TEXT.SEND}
          </button>

          <ContactStatusMessage status={status} />
        </form>
      </div>

      <SectionLine />
    </section>
  );
}