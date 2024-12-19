import type { Meta, StoryFn } from "@storybook/react"
import type { CheckboxCardItem } from "@yamada-ui/react"
import {
  ChartAreaIcon,
  ChartColumnIcon,
  ChartLineIcon,
  LockIcon,
  RabbitIcon,
  ShieldCheckIcon,
  SnailIcon,
  SquirrelIcon,
  UserRoundIcon,
} from "@yamada-ui/lucide"
import {
  CheckboxCard,
  CheckboxCardAddon,
  CheckboxCardDescription,
  CheckboxCardGroup,
  CheckboxCardLabel,
  Fieldset,
  For,
  HStack,
  Text,
  VStack,
} from "@yamada-ui/react"
import { useMemo, useState } from "react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof CheckboxCard>

const meta: Meta<typeof CheckboxCard> = {
  component: CheckboxCard,
  title: "Components / Forms / CheckboxCard",
}

export default meta

export const basic: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "ドラえもん",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "ドラミ",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "ガチャ子",
      },
    ],
    [],
  )

  return (
    <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard
          description="22世紀の未来から来たネコ型ロボット。"
          label="ドラえもん"
          value="ドラえもん"
        />
        <CheckboxCard
          description="ドラえもんの妹のロボット。"
          label="ドラミ"
          value="ドラミ"
        />
        <CheckboxCard
          description="アヒル型のロボット。"
          label="ガチャ子"
          value="ガチャ子"
        />
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard value="ドラえもん">
          <CheckboxCardLabel>ドラえもん</CheckboxCardLabel>
          <CheckboxCardDescription>
            22世紀の未来から来たネコ型ロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
          <CheckboxCardDescription>
            ドラえもんの妹のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
          <CheckboxCardDescription>
            アヒル型のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]} items={items} />
    </>
  )
}

export const withSize: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "ドラえもん",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "ドラミ",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "ガチャ子",
      },
    ],
    [],
  )

  return (
    <For each={["sm", "md", "lg"]}>
      {(size) => (
        <CheckboxCardGroup
          key={size}
          size={size}
          defaultValue={["ドラえもん"]}
          items={items}
        />
      )}
    </For>
  )
}

export const withVariant: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "ドラえもん",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "ドラミ",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "ガチャ子",
      },
    ],
    [],
  )

  return (
    <For each={["outline", "subtle", "surface"]}>
      {(variant) => (
        <CheckboxCardGroup
          key={variant}
          variant={variant}
          defaultValue={["ドラえもん"]}
          items={items}
        />
      )}
    </For>
  )
}

export const withColorScheme: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      { label: "ドラえもん", value: "ドラえもん" },
      { label: "ドラミ", value: "ドラミ" },
      { label: "ガチャ子", value: "ガチャ子" },
    ],
    [],
  )

  return (
    <For each={["outline", "subtle", "surface"]}>
      {(variant) => (
        <For key={variant} each={colorSchemes}>
          {(colorScheme) => (
            <CheckboxCardGroup
              key={colorScheme}
              colorScheme={colorScheme}
              variant={variant}
              defaultValue={["ドラえもん"]}
              items={items}
            />
          )}
        </For>
      )}
    </For>
  )
}

export const withAddon: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      {
        addon: "藤子・F・不二雄",
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "ドラえもん",
      },
      {
        addon: "藤子・F・不二雄",
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "ドラミ",
      },
      {
        addon: "藤子・F・不二雄",
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "ガチャ子",
      },
    ],
    [],
  )

  return (
    <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard
          addon="藤子・F・不二雄"
          description="22世紀の未来から来たネコ型ロボット。"
          label="ドラえもん"
          value="ドラえもん"
        />
        <CheckboxCard
          addon="藤子・F・不二雄"
          description="ドラえもんの妹のロボット。"
          label="ドラミ"
          value="ドラミ"
        />
        <CheckboxCard
          addon="藤子・F・不二雄"
          description="アヒル型のロボット。"
          label="ガチャ子"
          value="ガチャ子"
        />
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard value="ドラえもん">
          <CheckboxCardLabel>ドラえもん</CheckboxCardLabel>
          <CheckboxCardDescription>
            22世紀の未来から来たネコ型ロボット。
          </CheckboxCardDescription>
          <CheckboxCardAddon>藤子・F・不二雄</CheckboxCardAddon>
        </CheckboxCard>

        <CheckboxCard value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
          <CheckboxCardDescription>
            ドラえもんの妹のロボット。
          </CheckboxCardDescription>
          <CheckboxCardAddon>藤子・F・不二雄</CheckboxCardAddon>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
          <CheckboxCardDescription>
            アヒル型のロボット。
          </CheckboxCardDescription>
          <CheckboxCardAddon>藤子・F・不二雄</CheckboxCardAddon>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]} items={items} />
    </>
  )
}

export const withDefaultValue: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      { label: "ドラえもん", value: "ドラえもん" },
      { label: "ドラミ", value: "ドラミ" },
      { label: "ガチャ子", value: "ガチャ子" },
    ],
    [],
  )

  return <CheckboxCardGroup defaultValue={["ドラえもん"]} items={items} />
}

export const isDisabled: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      { label: "ドラえもん", value: "ドラえもん" },
      { label: "ドラミ", value: "ドラミ" },
      { label: "ガチャ子", value: "ガチャ子" },
    ],
    [],
  )

  return (
    <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard value="ドラえもん">
          <CheckboxCardLabel>ドラえもん</CheckboxCardLabel>
          <CheckboxCardDescription>
            22世紀の未来から来たネコ型ロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard isDisabled value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
          <CheckboxCardDescription>
            ドラえもんの妹のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
          <CheckboxCardDescription>
            アヒル型のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup isDisabled items={items} />

      <Fieldset isDisabled legend="Which characters would you like to select?">
        <CheckboxCardGroup items={items} />
      </Fieldset>
    </>
  )
}

export const isReadOnly: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      { label: "ドラえもん", value: "ドラえもん" },
      { label: "ドラミ", value: "ドラミ" },
      { label: "ガチャ子", value: "ガチャ子" },
    ],
    [],
  )

  return (
    <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard value="ドラえもん">
          <CheckboxCardLabel>ドラえもん</CheckboxCardLabel>
          <CheckboxCardDescription>
            22世紀の未来から来たネコ型ロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard isReadOnly value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
          <CheckboxCardDescription>
            ドラえもんの妹のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
          <CheckboxCardDescription>
            アヒル型のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup isReadOnly items={items} />

      <Fieldset isReadOnly legend="Which characters would you like to select?">
        <CheckboxCardGroup items={items} />
      </Fieldset>
    </>
  )
}

export const isInvalid: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      { label: "ドラえもん", value: "ドラえもん" },
      { label: "ドラミ", value: "ドラミ" },
      { label: "ガチャ子", value: "ガチャ子" },
    ],
    [],
  )

  return (
    <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard isInvalid value="ドラえもん">
          <CheckboxCardLabel>ドラえもん</CheckboxCardLabel>
          <CheckboxCardDescription>
            22世紀の未来から来たネコ型ロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
          <CheckboxCardDescription>
            ドラえもんの妹のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
          <CheckboxCardDescription>
            アヒル型のロボット。
          </CheckboxCardDescription>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup isInvalid items={items} />

      <Fieldset
        errorMessage="This is required."
        isInvalid
        legend="Which characters would you like to select?"
      >
        <CheckboxCardGroup items={items} />
      </Fieldset>
    </>
  )
}

export const hiddenIcon: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      {
        label: "ドラえもん",
        value: "ドラえもん",
        withIcon: false,
      },
      {
        label: "ドラミ",
        value: "ドラミ",
      },
      {
        label: "ガチャ子",
        value: "ガチャ子",
      },
    ],
    [],
  )

  return (
    <>
      <CheckboxCardGroup defaultValue={["ドラえもん"]} withIcon={false}>
        <CheckboxCard label="ドラえもん" value="ドラえもん" />
        <CheckboxCard label="ドラミ" value="ドラミ" />
        <CheckboxCard label="ガチャ子" value="ガチャ子" />
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]}>
        <CheckboxCard value="ドラえもん">
          <CheckboxCardLabel withIcon={false}>ドラえもん</CheckboxCardLabel>
        </CheckboxCard>

        <CheckboxCard value="ドラミ">
          <CheckboxCardLabel>ドラミ</CheckboxCardLabel>
        </CheckboxCard>

        <CheckboxCard value="ガチャ子">
          <CheckboxCardLabel>ガチャ子</CheckboxCardLabel>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup defaultValue={["ドラえもん"]} items={items} />
    </>
  )
}

export const customControl: Story = () => {
  const [value, setValue] = useState<string[]>(["ドラえもん"])

  const items = useMemo<CheckboxCardItem[]>(
    () => [
      { label: "ドラえもん", value: "ドラえもん" },
      { label: "ドラミ", value: "ドラミ" },
      { label: "ガチャ子", value: "ガチャ子" },
    ],
    [],
  )

  return <CheckboxCardGroup items={items} value={value} onChange={setValue} />
}

export const customLabel: Story = () => {
  const items = useMemo<CheckboxCardItem[]>(
    () => [
      {
        label: (
          <VStack alignItems="center" gap="sm">
            <ChartLineIcon color="muted" fontSize="3xl" />
            <Text>Line Chart</Text>
          </VStack>
        ),
        value: "Line Chart",
      },
      {
        label: (
          <VStack alignItems="center" gap="sm">
            <ChartColumnIcon color="muted" fontSize="3xl" />
            <Text>Bar Chart</Text>
          </VStack>
        ),
        value: "Bar Chart",
      },
      {
        label: (
          <VStack alignItems="center" gap="sm">
            <ChartAreaIcon color="muted" fontSize="3xl" />
            <Text>Area Chart</Text>
          </VStack>
        ),
        value: "Area Chart",
      },
    ],
    [],
  )

  return (
    <>
      <CheckboxCardGroup defaultValue={["Admin"]}>
        <CheckboxCard
          description="Give full access to the system"
          label={
            <VStack gap="sm">
              <ShieldCheckIcon fontSize="2xl" />
              <Text>Admin</Text>
            </VStack>
          }
          value="Admin"
          labelProps={{
            alignItems: "start",
          }}
        />
        <CheckboxCard
          description="Give limited access to the system"
          label={
            <VStack gap="sm">
              <UserRoundIcon fontSize="2xl" />
              <Text>User</Text>
            </VStack>
          }
          value="User"
          labelProps={{
            alignItems: "start",
          }}
        />
        <CheckboxCard
          description="No access to the system"
          label={
            <VStack gap="sm">
              <LockIcon fontSize="2xl" />
              <Text>Blocked</Text>
            </VStack>
          }
          value="Blocked"
          labelProps={{
            alignItems: "start",
          }}
        />
      </CheckboxCardGroup>

      <CheckboxCardGroup
        defaultValue={["Rabbit"]}
        w="fit-content"
        withIcon={false}
      >
        <CheckboxCard value="Rabbit">
          <CheckboxCardLabel>
            <HStack gap="sm">
              <RabbitIcon color="muted" fontSize="2xl" />
              <Text>Rabbit</Text>
            </HStack>
          </CheckboxCardLabel>
        </CheckboxCard>

        <CheckboxCard value="Snail">
          <HStack gap="sm">
            <SnailIcon color="muted" fontSize="2xl" />
            <Text>Snail</Text>
          </HStack>
        </CheckboxCard>

        <CheckboxCard value="Squirrel">
          <CheckboxCardLabel>
            <HStack gap="sm">
              <SquirrelIcon color="muted" fontSize="2xl" />
              <Text>Squirrel</Text>
            </HStack>
          </CheckboxCardLabel>
        </CheckboxCard>
      </CheckboxCardGroup>

      <CheckboxCardGroup
        defaultValue={["Line Chart"]}
        items={items}
        labelProps={{ flexDirection: "column", gap: "sm" }}
      />
    </>
  )
}
