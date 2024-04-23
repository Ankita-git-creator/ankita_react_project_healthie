// export const passwordStrengthRegex=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/
// export const urlRegex=/https?:\/\/(www\.)?[-a-zA-Z0–9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0–9@:%_\+.~#()?&//=]*)/

// export default {
//   emailRegex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//   phoneRegex: /^\(\d{3}\) \d{3}-\d{4}$/
// };

export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
