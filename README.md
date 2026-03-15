# Angular Beginner CV Builder

This project is a beginner-friendly Angular app that lets you:

- Enter **name**
- Enter **email**
- Enter **skills** (comma separated)
- See a **live CV preview**

## 1) Create and run the project

```bash
npm install
npm start
```

Then open `http://localhost:4200`.

## 2) How the code works (step by step)

### Step 1: Bootstrap Angular
In `src/main.ts`, Angular starts the app by bootstrapping `AppComponent`.

### Step 2: Build a standalone component
In `src/app/app.component.ts`:
- `standalone: true` means no NgModule is needed.
- `ReactiveFormsModule` is imported so we can use a reactive form.
- We define `cvForm` with three fields:
  - `name` (required)
  - `email` (required + email format)
  - `skills` (plain text)

### Step 3: Parse skills for preview
Still in `app.component.ts`, the `skillsList` getter:
- Reads `skills` text
- Splits by comma
- Trims spaces
- Removes empty values

This gives an array like `["Angular", "TypeScript", "CSS"]`.

### Step 4: Connect form fields in template
In `src/app/app.component.html`:
- `[formGroup]="cvForm"` binds the form to the TypeScript model.
- `formControlName` connects each input to a form field.
- Simple validation messages appear when name/email are invalid and touched.

### Step 5: Show live CV preview
Also in `app.component.html`:
- We directly read form control values for name/email.
- `@for` loops through `skillsList`.
- `@if` displays either the skills list or a placeholder message.

As users type, Angular updates the preview instantly.

### Step 6: Add beginner-friendly styling
In `src/app/app.component.css` and `src/styles.css`:
- Clean card layout with responsive grid
- Input focus states
- Error text and placeholder styles

## 3) Beginner exercises to try

1. Add a new field for **phone number**.
2. Add a new field for **summary**.
3. Add a **Download as PDF** button (advanced).
4. Save form data to **localStorage** so it stays after refresh.
