
export const success = (data, prefix) => {
  return { type: `${prefix}_SUCCESS`, value: data }
}