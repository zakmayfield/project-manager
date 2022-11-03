# Simple Documentation

## Headings

- `h1 - h4` will me `lg`, `md`, `sm`, `xs` in that order 

```tsx
<Box>
  <Heading as='h1' size='lg'>
    h1
  </Heading>

  <Heading as='h2' size='md'>
    h2
  </Heading>

  <Heading as='h3' size='sm'>
    h3
  </Heading>

  <Heading as='h4' size='xs'>
    h4
  </Heading>
</Box>
```

## Text

- Default `Text` will be `md`

```tsx
<Box>
  <Text fontSize='lg'>Text will go here</Text>
  <Text fontSize='md'>Text will go here</Text>
  <Text fontSize='sm'>Text will go here</Text>
  <Text fontSize='xs'>Text will go here</Text>
</Box>
```

## Color

- App Background Color
    - `#f0f0f0`

- App Color (text)
    - `#171717`