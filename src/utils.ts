export function getFriendlyKey(text: string) {
    // Currently just intended to transform basic titles into a friendly key when looping, consider using uniq lib to generate?
    return text.replace(' ', '-').toLowerCase()
}