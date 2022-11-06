# Simple Documentation

# React app is hosted on `vercel`

  - `https://project-manager-gilt.vercel.app/`

# DB is hosted on `heroku`

- The main `endpoint` for this application is `https://fake-server-1-mayfield.herokuapp.com/`

- The only available `route` is `/projects`

- This `/projects` route has all available HTTP methods attached with `no validation`

- The db is being served by `json-server`

# Start App (Local DB)

- Ensure endpoint is set to `http://localhost:4000`

- `npm run api`

  - server will run on port `4000`
  - the 'db' is just a json object located in `./api/db.json`
  - `json-server` is running our 'db' which gives us routes we can hit to access data
  - changes made using an HTTP request will update the db.json using `lowdb`

- `npm start`

---

# Headings

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

---

# Text

- Default `Text` will be `md`

```tsx
<Box>
  <Text fontSize='lg'>Text will go here</Text>
  <Text fontSize='md'>Text will go here</Text>
  <Text fontSize='sm'>Text will go here</Text>
  <Text fontSize='xs'>Text will go here</Text>
</Box>
```

---

# Color

- App Background Color

  - `#f0f0f0`

- App Color (text)
  - `#171717`
