// Form gonderimi.
//
// Birincil yol Netlify Forms: Netlify build sirasinda index.html icindeki form
// semalarini algilar ve gonderimleri Site settings > Forms > Form notifications
// altinda tanimli e-posta adresine iletir. API anahtari gerekmez.
//
// Alternatif yol EmailJS: VITE_EMAILJS_* ortam degiskenleri tanimliysa
// gonderim dogrudan EmailJS uzerinden yapilir (Netlify disi hosting icin).
import emailjs from '@emailjs/browser'
import { RECIPIENT_EMAIL } from '../config/email'

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  contactTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  trainingTemplateId: import.meta.env.VITE_EMAILJS_TRAINING_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

export const isEmailJsConfigured = () =>
  Boolean(
    emailConfig.serviceId &&
      emailConfig.contactTemplateId &&
      emailConfig.trainingTemplateId &&
      emailConfig.publicKey
  )

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? '')}`)
    .join('&')

const submitToNetlify = async (formName, params) => {
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': formName, ...params }),
  })
  if (!response.ok) throw new Error(`Netlify Forms gonderimi basarisiz: ${response.status}`)
}

export const sendContactMessage = async (params) => {
  if (isEmailJsConfigured()) {
    return emailjs.send(
      emailConfig.serviceId,
      emailConfig.contactTemplateId,
      { ...params, to_email: RECIPIENT_EMAIL },
      emailConfig.publicKey
    )
  }
  return submitToNetlify('contact', params)
}

export const sendTrainingApplication = async (params) => {
  if (isEmailJsConfigured()) {
    return emailjs.send(
      emailConfig.serviceId,
      emailConfig.trainingTemplateId,
      { ...params, to_email: RECIPIENT_EMAIL },
      emailConfig.publicKey
    )
  }
  return submitToNetlify('training-application', params)
}
