import Tamagui from '../tamagui.config'
import { TamaguiProviderProps } from '@yapster/ui'

export function Provider({ children, ...rest }: TamaguiProviderProps) {
  return (
    <Tamagui.Provider disableInjectCSS defaultTheme="light" {...rest}>
      {children}
    </Tamagui.Provider>
  )
}