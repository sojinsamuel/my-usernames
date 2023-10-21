import { Hanko, register } from "@teamhanko/hanko-elements";

const HANKO_API_URL = process.env.NEXT_PUBLIC_HANKO_API_URL!;

const hanko = new Hanko(HANKO_API_URL);

export { hanko, register };
