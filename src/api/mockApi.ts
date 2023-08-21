import db from './mockDb';

function mockFetchRequest<T>(data: T) {
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 200);
    });
}

export default {
    getParteners() {
        return mockFetchRequest(db.parteners);
    },
    getProducts(partener?: string | string[]) {
        // ignore performance
        mockFetchRequest(
            db.parteners
                .filter(p => !partener || (typeof partener === 'string' ? partener === p.name : partener.includes(p.name)))
                .map(p => p.products)
                .flat()
        );
    },
};
