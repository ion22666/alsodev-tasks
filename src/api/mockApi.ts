import db from './mockDb';

function mockFetchRequest<T>(data: T) {
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 200);
    });
}

export default {
    listParteners() {
        return mockFetchRequest(db.parteners);
    },
    getPartener(name: string) {
        return mockFetchRequest(db.parteners.find(p => p.name.toLowerCase() === name.toLowerCase()));
    },
    getProducts(partener?: string | string[]) {
        // ignore performance
        return mockFetchRequest(
            db.parteners
                .filter(p => !partener || (typeof partener === 'string' ? partener === p.name : partener.includes(p.name)))
                .map(p => p.products)
                .flat()
        );
    },
};
