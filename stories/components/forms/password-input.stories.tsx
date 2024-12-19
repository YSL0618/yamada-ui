import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { FrownIcon, SmileIcon } from "@yamada-ui/lucide"
import {
  Button,
  FormControl,
  PasswordInput,
  PasswordInputStrengthMeter,
  Text,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import { useForm } from "react-hook-form"

type Story = StoryFn<typeof PasswordInput>

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  title: "Components / Forms / PasswordInput",
}

export default meta

export const basic: Story = () => {
  return <PasswordInput placeholder="your password" />
}

export const withSize: Story = () => {
  return (
    <>
      <PasswordInput size="xs" placeholder="extra small size" />
      <PasswordInput size="sm" placeholder="small size" />
      <PasswordInput size="md" placeholder="medium size" />
      <PasswordInput size="lg" placeholder="large size" />
    </>
  )
}

export const withVariants: Story = () => {
  return (
    <>
      <PasswordInput variant="outline" placeholder="outline" />
      <PasswordInput variant="filled" placeholder="filled" />
      <PasswordInput variant="flushed" placeholder="flushed" />
      <PasswordInput variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const withDefaultVisible: Story = () => {
  return (
    <PasswordInput
      defaultValue="password"
      defaultVisible
      placeholder="your password"
    />
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <PasswordInput placeholder="default border color" />
      <PasswordInput
        focusBorderColor="green.500"
        placeholder="custom border color"
      />
      <PasswordInput
        errorBorderColor="orange.500"
        isInvalid
        placeholder="custom border color"
      />
    </>
  )
}

export const withStrengthMeter: Story = () => {
  const [value, setValue] = useState("Password")

  const getStrength = (password: string): number => {
    let strength = 0

    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++

    return strength
  }

  return (
    <>
      <PasswordInput
        placeholder="your password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <PasswordInputStrengthMeter value={getStrength(value)} />
    </>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <PasswordInput variant="outline" isDisabled placeholder="outline" />
      <PasswordInput variant="filled" isDisabled placeholder="filled" />
      <PasswordInput variant="flushed" isDisabled placeholder="flushed" />
      <PasswordInput variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl
        helperMessage="We'll never share your password."
        isDisabled
        label="Password"
      >
        <PasswordInput placeholder="your password" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <PasswordInput variant="outline" isReadOnly placeholder="outline" />
      <PasswordInput variant="filled" isReadOnly placeholder="filled" />
      <PasswordInput variant="flushed" isReadOnly placeholder="flushed" />
      <PasswordInput variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl
        helperMessage="We'll never share your password."
        isReadOnly
        label="Password"
      >
        <PasswordInput placeholder="your password" />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <PasswordInput variant="outline" isInvalid placeholder="outline" />
      <PasswordInput variant="filled" isInvalid placeholder="filled" />
      <PasswordInput variant="flushed" isInvalid placeholder="flushed" />
      <PasswordInput variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="Email is required." isInvalid label="Password">
        <PasswordInput placeholder="your password" />
      </FormControl>
    </>
  )
}

export const customIcon: Story = () => {
  return (
    <PasswordInput
      placeholder="your password"
      visibilityIcon={{ off: <SmileIcon />, on: <FrownIcon /> }}
    />
  )
}

export const customControl: Story = () => {
  const [visible, setVisible] = useState(true)

  return (
    <>
      <Text>Password visibility: {visible ? "show" : "hide"}</Text>

      <PasswordInput
        placeholder="your password"
        visible={visible}
        onVisibleChange={setVisible}
      />
    </>
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    password: string
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.password?.message}
        isInvalid={!!errors.password}
        label="Password"
      >
        <PasswordInput
          {...register("password", {
            required: { message: "Password is required.", value: true },
          })}
        />
      </FormControl>

      <Button type="submit">Submit</Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: Story = () => {
  interface Data {
    password: string
  }

  const defaultValues: Data = {
    password: "password",
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.password?.message}
        isInvalid={!!errors.password}
        label="Password"
      >
        <PasswordInput
          {...register("password", {
            required: { message: "Password is required.", value: true },
          })}
        />
      </FormControl>

      <Button type="submit">Submit</Button>
    </VStack>
  )
}
