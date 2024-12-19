import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { ReactNode } from "react"
import {
  forwardRef,
  mergeVars,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import {
  createContext,
  cx,
  dataAttr,
  getValidChildren,
  isArray,
  isEmpty,
  isNumber,
  omitChildren,
  pickChildren,
  useUpdateEffect,
} from "@yamada-ui/utils"
import { useMemo, useState } from "react"

export type DataListOrientation = "horizontal" | "vertical"

interface DataListContext {
  grid: boolean
  orientation: DataListOrientation
  styles: { [key: string]: CSSUIObject | undefined }
  descriptionProps?: DataListDescriptionProps
  termProps?: DataListTermProps
}

const [DataListProvider, useDataListContext] = createContext<DataListContext>({
  name: "DataListContext",
  errorMessage: `useDataListContext returned is 'undefined'. Seems you forgot to wrap the components in "<DataList />"`,
})

interface DataListOptions {
  /**
   * The number of columns.
   * If `orientation` is `"horizontal"` and `items` is not set, please set this.
   */
  col?: number
  /**
   * If provided, generate elements based on items.
   */
  items?: DataListItemProps[]
  /**
   * The orientation of the data list.
   *
   * @default 'horizontal'
   */
  orientation?: DataListOrientation
  /**
   * The props for the data list description component.
   */
  descriptionProps?: DataListDescriptionProps
  /**
   * The props for the data list term component.
   */
  termProps?: DataListTermProps
}

export interface DataListProps
  extends HTMLUIProps<"dl">,
    ThemeProps<"DataList">,
    DataListOptions {}

/**
 * `DataList` is used to display a list of data items.
 *
 * @see Docs https://yamada-ui.com/components/data-display/data-list
 */
export const DataList = forwardRef<DataListProps, "dl">((props, ref) => {
  const [styles, { variant, ...mergedProps }] = useComponentMultiStyle(
    "DataList",
    props,
  )
  const {
    className,
    children,
    col: colProp,
    items = [],
    orientation = "horizontal",
    vars: varsProp,
    descriptionProps,
    termProps,
    ...rest
  } = omitThemeProps(mergedProps)
  const [col, setCol] = useState(() => {
    if (isNumber(colProp)) return colProp

    let col = 0

    items.forEach(({ description, term }) => {
      const termCount = !term ? 0 : isArray(term) ? term.length : 1
      const descriptionCount = !description
        ? 0
        : isArray(description)
          ? description.length
          : 1

      col = Math.max(col, termCount + descriptionCount)
    })

    return col
  })
  const grid = variant === "grid"

  const computedChildren = useMemo(
    () => items.map((props, index) => <DataListItem key={index} {...props} />),
    [items],
  )

  const css: CSSUIObject = {
    ...styles.container,
    vars: mergeVars(varsProp, styles.container?.vars, [
      { name: "col", value: col },
    ]),
  }

  useUpdateEffect(() => {
    if (isNumber(colProp)) return

    let col = 0

    items.forEach(({ description, term }) => {
      const termCount = !term ? 0 : isArray(term) ? term.length : 1
      const descriptionCount = !description
        ? 0
        : isArray(description)
          ? description.length
          : 1

      col = Math.max(col, termCount + descriptionCount)
    })

    setCol(col)
  }, [items, colProp])

  return (
    <DataListProvider
      value={{ grid, orientation, styles, descriptionProps, termProps }}
    >
      <ui.dl
        ref={ref}
        className={cx("ui-data-list", className)}
        data-grid={dataAttr(grid)}
        data-orientation={orientation}
        __css={css}
        {...rest}
      >
        {children ?? computedChildren}
      </ui.dl>
    </DataListProvider>
  )
})

DataList.displayName = "DataList"
DataList.__ui__ = "DataList"

export interface DataListItemProps extends HTMLUIProps {
  /**
   * The data list description to use.
   */
  description?: ReactNode | ReactNode[]
  /**
   * The data list term to use.
   */
  term?: ReactNode | ReactNode[]
  /**
   * The props for the data list description component.
   */
  descriptionProps?: DataListDescriptionProps
  /**
   * The props for the data list term component.
   */
  termProps?: DataListTermProps
}

export const DataListItem = forwardRef<DataListItemProps, "div">(
  (
    {
      className,
      children,
      description,
      term,
      descriptionProps: customDescriptionProps,
      termProps: customTermProps,
      ...rest
    },
    ref,
  ) => {
    const { grid, orientation, styles, descriptionProps, termProps } =
      useDataListContext()

    const validChildren = getValidChildren(children)
    const customTerms = pickChildren(validChildren, DataListTerm)
    const customDescriptions = pickChildren(validChildren, DataListDescription)
    const computedChildren = !isEmpty(validChildren)
      ? omitChildren(validChildren, DataListTerm, DataListDescription)
      : children

    const css: CSSUIObject = { ...styles.item }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-data-list__item", className)}
        data-grid={dataAttr(grid)}
        data-orientation={orientation}
        __css={css}
        {...rest}
      >
        {!isEmpty(customTerms) ? (
          customTerms
        ) : isArray(term) ? (
          term.map((item, index) => (
            <DataListTerm key={index} {...termProps} {...customTermProps}>
              {item}
            </DataListTerm>
          ))
        ) : (
          <DataListTerm {...termProps} {...customTermProps}>
            {term}
          </DataListTerm>
        )}
        {!isEmpty(customDescriptions) ? (
          customDescriptions
        ) : isArray(description) ? (
          description.map((item, index) => (
            <DataListDescription
              key={index}
              {...descriptionProps}
              {...customDescriptionProps}
            >
              {item}
            </DataListDescription>
          ))
        ) : (
          <DataListDescription
            {...descriptionProps}
            {...customDescriptionProps}
          >
            {description}
          </DataListDescription>
        )}
        {computedChildren}
      </ui.div>
    )
  },
)

DataListItem.displayName = "DataListItem"
DataListItem.__ui__ = "DataListItem"

export interface DataListTermProps extends HTMLUIProps<"dt"> {}

export const DataListTerm = forwardRef<DataListTermProps, "dt">(
  ({ className, ...rest }, ref) => {
    const { grid, orientation, styles } = useDataListContext()

    const css: CSSUIObject = { ...styles.term }

    return (
      <ui.dt
        ref={ref}
        className={cx("ui-data-list__term", className)}
        data-grid={dataAttr(grid)}
        data-orientation={orientation}
        __css={css}
        {...rest}
      />
    )
  },
)

DataListTerm.displayName = "DataListTerm"
DataListTerm.__ui__ = "DataListTerm"

export interface DataListDescriptionProps extends HTMLUIProps<"dd"> {}

export const DataListDescription = forwardRef<DataListDescriptionProps, "dd">(
  ({ className, ...rest }, ref) => {
    const { grid, orientation, styles } = useDataListContext()

    const css: CSSUIObject = { ...styles.description }

    return (
      <ui.dd
        ref={ref}
        className={cx("ui-data-list__description", className)}
        data-grid={dataAttr(grid)}
        data-orientation={orientation}
        __css={css}
        {...rest}
      />
    )
  },
)

DataListDescription.displayName = "DataListDescription"
DataListDescription.__ui__ = "DataListDescription"
