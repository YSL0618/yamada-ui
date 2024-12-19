import type { CSSUIObject } from "@yamada-ui/core"
import { createContext } from "@yamada-ui/utils"

interface PasswordInputContext {
  styles: { [key: string]: CSSUIObject | undefined }
}

export const [PasswordInputProvider, usePasswordInputContext] =
  createContext<PasswordInputContext>({
    name: "PasswordInputContext",
    errorMessage: `usePasswordInputContext returned is 'undefined'. Seems you forgot to wrap the components in "<PasswordInput />"`,
  })
