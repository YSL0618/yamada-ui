import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { COLOR_SCHEMES, dataAttr } from "@yamada-ui/utils"
import { useId } from "react"
import { Controller, useForm } from "react-hook-form"
import { ui } from "../../core"
import { useBoolean } from "../../hooks/use-boolean"
import { Box } from "../box"
import { Button } from "../button"
import { useCheckbox } from "../checkbox"
import { Wrap } from "../flex"
import { Label } from "../form-control"
import { HStack } from "../stack"
import { VStack } from "../stack"
import { Switch } from "./"

type Story = StoryFn<typeof Switch>

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Components / Switch",
}

export default meta

export const Basic: Story = () => {
  return <Switch>basic</Switch>
}

export const WithReverse: Story = () => {
  return <Switch reverse>basic</Switch>
}

export const WithSize: Story = () => {
  return (
    <>
      <Switch size="sm">small size</Switch>
      <Switch size="md">medium size</Switch>
      <Switch size="lg">large size</Switch>
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <Switch variant="thick">thick</Switch>
      <Switch variant="thin">thin</Switch>
    </>
  )
}

export const WithLabel: Story = () => {
  const id = useId()

  return (
    <HStack gap="sm">
      <Label htmlFor={id} userSelect="none">
        Please Click
      </Label>
      <Switch id={id} />
    </HStack>
  )
}

export const WithColorScheme: Story = () => {
  return (
    <Wrap gap="md">
      {COLOR_SCHEMES.map((colorScheme) => (
        <Switch key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Switch>
      ))}
    </Wrap>
  )
}

export const IsDisabled: Story = () => {
  return (
    <>
      <Switch isDisabled>disabled</Switch>
      <Switch defaultIsChecked isDisabled>
        disabled
      </Switch>
    </>
  )
}

export const IsReadonly: Story = () => {
  return (
    <>
      <Switch isReadOnly>read only</Switch>
      <Switch defaultIsChecked isReadOnly>
        read only
      </Switch>
    </>
  )
}

export const CustomControl: Story = () => {
  const [isChecked, { toggle }] = useBoolean(false)

  return (
    <Switch isChecked={isChecked} onChange={toggle}>
      custom control
    </Switch>
  )
}

export const CustomHook: Story = () => {
  const { checked, getIconProps, getInputProps, getLabelProps } = useCheckbox(
    {},
  )

  return (
    <Box as="label" display="inline-flex" gap="sm">
      <ui.input aria-checked={checked} role="switch" {...getInputProps()} />

      <Box
        bg={["blackAlpha.400", "whiteAlpha.300"]}
        boxSizing="content-box"
        display="inline-flex"
        p={1}
        rounded="full"
        transitionDuration="fast"
        transitionProperty="common"
        w={8}
        _checked={{
          bg: ["primary.500", "primary.500"],
        }}
        {...getIconProps()}
      >
        <Box
          data-checked={dataAttr(checked)}
          bg="white"
          h={4}
          rounded="inherit"
          transitionDuration="fast"
          transitionProperty="translate"
          w={4}
          _checked={{
            translate: "100%",
          }}
        />
      </Box>

      <Box {...getLabelProps()}>Switch</Box>
    </Box>
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    switch: boolean
  }

  const { control, handleSubmit, watch } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="switch"
        control={control}
        render={({ field: { value, ...rest } }) => (
          <Switch isChecked={value} {...rest}>
            Dark mode
          </Switch>
        )}
      />

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const ReactHookFormWithDefaultValue: Story = () => {
  interface Data {
    switch: boolean
  }

  const defaultValues: Data = {
    switch: true,
  }

  const { control, handleSubmit, watch } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="switch"
        control={control}
        render={({ field: { value, ...rest } }) => (
          <Switch isChecked={value} {...rest}>
            Dark mode
          </Switch>
        )}
      />

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
