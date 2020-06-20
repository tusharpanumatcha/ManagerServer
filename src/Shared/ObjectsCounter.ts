

export class Monitor {

    public static printInstances(): string {
        let response: string = '';
        Counter.objectCount.forEach((value: number, key: string) => {
            response = response + `${key}: ${value} \n`;
        })
        return response;
    }
}



class Counter {
    static objectCount: Map<string, number> = new Map();

    static increment(className: string) {
        if (!this.objectCount.get(className)) {
            this.objectCount.set(className, 1);
        } else {
            const currentValue = this.objectCount.get(className);
            this.objectCount.set(className, currentValue! + 1);
        }
    }
}

export function singleInstance<T extends { new(...args: any[]): {} }>(constructor: T) {

    let counts = 0;
    function checkCounts() {
        if (counts > 1) {
            throw new Error(`Instantiated more than one ${constructor.name}!`);
        }
    }

    return class extends constructor {
        abc = counts++;
        def = checkCounts();
    }
}


export function countInstances<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        abc = Counter.increment(constructor.name)
    }
}