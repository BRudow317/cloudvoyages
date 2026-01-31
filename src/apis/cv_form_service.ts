/**
 * @see
 */

export interface FormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export const cv_form_service = async (formData: FormData) => {
  try {
    const response = await fetch(import.meta.env.VITE_CV_FORM_SERVICE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error('CV form service error:', error);
    throw error;
  }
};