import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    [key: string]: {
      darker: string;
      lighter: string;
      fontColor: string;
    };
  }
}
