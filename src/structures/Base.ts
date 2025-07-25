import type { Client } from "../Client";

export class Base {
    /**
     * the client instance
     */
    public readonly client: Client;

    constructor(client: Client) {
        this.client = client;
    }
}
