export function mock(ms: number): Promise<number> {
    return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
}

export async function getData(): Promise<number[]> {
    const result: number[] = [];

    const [data1, data2, data3] = await Promise.all([
        mock(100),
        mock(200),
        mock(300),
    ]);

    result.push(data1, data2, data3);

    return result;
}

export async function catchException(): Promise<string | undefined> {
    try {
        await Promise.reject(new Error('my error'));
    } catch (err) {
        return (err as Error).message;
    }
}
