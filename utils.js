export function explainCode(code) {
  return `This code adds two numbers.\n\nCode:\n${code}`;
}

export function formatJSON(json) {
  try {
    return JSON.stringify(JSON.parse(json), null, 2);
  } catch {
    return "Invalid JSON";
  }
}
