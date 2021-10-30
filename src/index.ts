import { object, string } from "decoders";
import type { Decoder } from "decoders";

export interface Person {
  name: string;
}

export const personDecoder: Decoder<Person> = object({
  name: string,
});
