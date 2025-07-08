export const extractFormData = (form) => {
  return {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };
};

export const resetForm = (form) => {
  form.reset();
};

export const getButtonClasses = (loading) => {
  const baseClasses = "inline-block px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-700 rounded-full transition duration-300 cursor-pointer";
  
  if (loading) {
    return `${baseClasses} opacity-50 cursor-not-allowed`;
  }
  
  return `${baseClasses} hover:bg-blue-700 hover:text-white`;
};