/**
 * Form Configuration
 * 
 * This file handles form submission configuration.
 * Currently set up for Formspree, but can be easily adapted for:
 * - Netlify Forms
 * - Custom backend API
 * - EmailJS
 * - Other form services
 */

export const FORM_CONFIG = {
  // Formspree Form ID (replace with your actual form ID)
  // Get yours at: https://formspree.io/
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || "",
  
  // Alternative: Custom backend API
  // apiUrl: process.env.NEXT_PUBLIC_API_URL || "/api/contact",
  
  // Form settings
  settings: {
    timeout: 10000, // 10 seconds
    retryAttempts: 3,
  },
  
  // Contact email (display only)
  contactEmail: "hello@q12agency.com",
  
  // Contact phone (display only)
  contactPhone: "+1 (555) 123-4567", // Update with real number
  
  // Location
  location: "New York, NY",
};

/**
 * Submit form data to backend
 */
export async function submitForm(formData: Record<string, string>) {
  // Using Formspree (recommended for static sites)
  if (FORM_CONFIG.formspreeId) {
    const response = await fetch(`https://formspree.io/f/${FORM_CONFIG.formspreeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error("Failed to submit form");
    }
    
    return await response.json();
  }
  
  // Alternative: Mock submission for development
  console.log("Form submitted:", formData);
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return { ok: true, message: "Form submitted successfully" };
}