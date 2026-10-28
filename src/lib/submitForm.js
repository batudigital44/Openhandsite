// Form gonderimi.
//
// Birincil yol FormSubmit (formsubmit.co): gonderimler dogrudan
// digital@batuhanates.com adresine e-posta olarak iletilir. API anahtari
// gerekmez; yalnizca alici adresine gelen ilk "Activate Form" baglantisinin
// bir kez onaylanmasi gerekir.
//
// Alternatif yol EmailJS: VITE_EMAILJS_* ortam degiskenleri tanimliysa
// gonderim EmailJS uzerinden yapilir.
import emailjs from '@emailjs/browser'
import { RECIPIENT_EMAIL } from '../config/email'

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`

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

const submitToFormSubmit = async (subject, params) => {
  const response = await fetch(FORMSUBMIT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...params,
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
    }),
  })
  if (!response.ok) throw new Error(`FormSubmit gonderimi basarisiz: ${response.status}`)

  const result = await response.json().catch(() => ({}))
  if (result && result.success === 'false') {
    throw new Error(`FormSubmit: ${result.message || 'gonderim reddedildi'}`)
  }
  return result
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
  return submitToFormSubmit('Yeni iletisim mesaji - batuhanates.com', params)
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
  return submitToFormSubmit('Yeni egitim basvurusu - batuhanates.com', params)
}
