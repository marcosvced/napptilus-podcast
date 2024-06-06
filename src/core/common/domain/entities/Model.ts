export class Model {
    toJSON() {
        const json:Record<string, any> = {}
        Object.entries(this).forEach(([key, value]) => json[key] = value)
        return json
    }
}