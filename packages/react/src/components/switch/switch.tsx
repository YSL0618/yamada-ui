import type { InputHTMLAttributes, ReactElement } from "react"
import type { HTMLUIProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { UseCheckboxProps } from "../checkbox"
import { cloneElement } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { cx, dataAttr } from "../../utils"
import { useCheckbox } from "../checkbox"

export interface SwitchIconProps {
  active?: boolean
  checked?: boolean
  focused?: boolean
  hovered?: boolean
  /**
   * @deprecated Use `active` instead.
   */
  isActive?: boolean
  /**
   * @deprecated Use `checked` instead.
   */
  isChecked?: boolean
  /**
   * @deprecated Use `focused` instead.
   */
  isFocused?: boolean
  /**
   * @deprecated Use `hovered` instead.
   */
  isHovered?: boolean
}

interface SwitchOptions {
  /**
   * The switch icon to use.
   */
  icon?: ReactElement<SwitchIconProps>
  /**
   * Change switch label from right to left.
   *
   * @default false
   *
   * @deprecated Use `reverse` instead.
   */
  isReverse?: boolean
  /**
   * Change switch label from right to left.
   *
   * @default false
   */
  reverse?: boolean
  /**
   * Props for switch input element.
   */
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  /**
   * Props for switch label element.
   */
  labelProps?: HTMLUIProps<"span">
}

export interface SwitchProps
  extends Merge<
      HTMLUIProps<"label">,
      Omit<UseCheckboxProps, "isIndeterminate"> & SwitchOptions
    >,
    ThemeProps<"Switch"> {}

/**
 * `Switch` is a component used to toggle between on and off states.
 *
 * @see Docs https://yamada-ui.com/components/forms/switch
 */
export const Switch = forwardRef<SwitchProps, "input">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("Switch", props)
  const {
    className,
    children,
    flexDirection,
    gap = "0.5rem",
    icon,
    isReverse,
    reverse = isReverse,
    inputProps,
    labelProps,
    ...computedProps
  } = omitThemeProps(mergedProps)
  const {
    active,
    checked,
    focused,
    hovered,
    props: rest,
    getContainerProps,
    getIconProps,
    getInputProps,
    getLabelProps,
  } = useCheckbox({ selectOnEnter: true, ...computedProps })
  const cloneIcon = icon
    ? cloneElement(icon, {
        active,
        checked,
        focused,
        hovered,
        isActive: active,
        isChecked: checked,
        isFocused: focused,
        isHovered: hovered,
      })
    : null

  return (
    <ui.label
      ref={ref}
      className={cx("ui-switch", className)}
      __css={{
        alignItems: "center",
        cursor: "pointer",
        display: "inline-flex",
        flexDirection: flexDirection ?? (reverse ? "row-reverse" : "row"),
        gap,
        position: "relative",
        verticalAlign: "top",
        ...styles.container,
      }}
      {...getContainerProps()}
      {...rest}
    >
      <ui.input
        className={cx("ui-switch__input", className)}
        aria-checked={checked}
        role="switch"
        {...getInputProps(inputProps, ref)}
      />

      {cloneIcon ?? (
        <ui.div
          className={cx("ui-switch__track", className)}
          __css={{
            alignItems: "center",
            boxSizing: "content-box",
            display: "inline-flex",
            flexShrink: 0,
            ...styles.track,
          }}
          {...getIconProps()}
        >
          <ui.div
            className={cx("ui-switch__thumb", className)}
            data-checked={dataAttr(checked)}
            __css={{
              ...styles.thumb,
            }}
          />
        </ui.div>
      )}

      {children ? (
        <ui.span
          className={cx("ui-switch__label", className)}
          __css={{ ...styles.label }}
          {...getLabelProps(labelProps)}
        >
          {children}
        </ui.span>
      ) : null}
    </ui.label>
  )
})

Switch.displayName = "Switch"
Switch.__ui__ = "Switch"
