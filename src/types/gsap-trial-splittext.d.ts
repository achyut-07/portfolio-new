declare module "gsap/SplitText" {
  export interface SplitTextVars {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
    [key: string]: unknown;
  }

  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];

    constructor(target: string | Element | Array<string | Element>, vars?: SplitTextVars);

    revert(): void;
  }
}
