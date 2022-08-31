/* 2. Készíts egy `cookieHandler` nevű objectet, az alábbi három metódust megvalósítja:
- `getAll`: kiolvassa a sütik nevét és értékét, majd visszaadja őket egy objektumban, ahol a sütik neve a key 
és  az értéke a value (pl. { viewed: 5 })
- `toSessionStorage`: minden sütit egyenként elment a sessionStorage-ba az adott süti nevével és értékével
- `flush`: törli az összes sütit

A teszteléshez hozd létre a böngésződben az alábbi sütiket:
- `viewed`: 5
- `uid`: 354774631237
- `ssid`: Bx55OWbHJ0Vt_IGIF */

const cookieHandler = {
    doc: {},
    getAll() {
        let obj = {};
        this.doc.cookie?.split('; ').forEach((entry) => {
            const [key, value] = entry.split('=');
            obj = {
                ...obj,
                [key]: value
            };
        });
        return obj;
    },
    toSessionStorage() {
        const result = this.getAll();
        Object.entries(result).forEach(([key, value]) => {
            sessionStorage.setItem(key, value);
        });
    },
    flush() {
        const result = this.getAll();
        Object.keys(result).forEach((key) => {
            this.doc.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`
        });
    }
};

export { cookieHandler };
