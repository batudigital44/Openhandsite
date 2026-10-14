import emailjs from '@emailjs/browser'

export const RECIPIENT_EMAIL = 'digital@batuhanates.com'

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  contactTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  trainingTemplateId: import.meta.env.VITE_EMAILJS_TRAINING_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

export const isEmailConfigured = () =>
  Boolean(
    emailConfig.serviceId &&
      emailConfig.contactTemplateId &&
      emailConfig.trainingTemplateId &&
      emailConfig.publicKey
  )

export const sendContactEmail = (params) =>
  emailjs.send(
    emailConfig.serviceId,
    emailConfig.contactTemplateId,
    { ...params, to_email: RECIPIENT_EMAIL },
    emailConfig.publicKey
  )

export const sendTrainingEmail = (params) =>
  emailjs.send(
    emailConfig.serviceId,
    emailConfig.trainingTemplateId,
    { ...params, to_email: RECIPIENT_EMAIL },
    emailConfig.publicKey
  )

export default emailConfig
