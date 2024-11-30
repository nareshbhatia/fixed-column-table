# Fixed Column Table

A sample app showing how to style a table with fixed width columns. Also, how to
truncate cell contents to the width of its column. In the screenshot below, all
columns except the title column are fixed width. The title column takes up the
remaining width of the container. Also its contents are truncated to the width
of the column, showing ellipsis.

![Screenshot](assets/screenshot.png)

## Styling

For the table to honor fixed column widths, we need to set the following CSS
properties:

```css
table {
  /* required to fix column widths */
  table-layout: fixed;

  /* required to fix the table's width */
  width: 100%;
}
```

With the above setup, make sure that at least one column is not fixed width.
Otherwise the table will ignore all width specifications. If all columns need to
be fixed, then you must switch to `table-layout: auto` (see
[MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout))

For a column to truncate its content and show ellipsis, we need to set the
following CSS properties:

```css
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

You can see these styles in action in the
[MovieList styles](./src/components/MovieList/MovieList.css).

## Development Build

```shell
npm ci
npm run dev
```

Now point your browser to http://localhost:3000

## Production Build

```shell
npm ci
npm run build
npm run preview
```

Now point your browser to http://localhost:3000

## All Commands

```
npm ci                   # install dependencies
npm run build            # builds all workspaces
npm run clean            # deletes all build artifacts
npm run dev              # run the dev build
npm run fix              # lints, formats and attempts to fix any issues (requires `npm run build` has been ran)
npm run lint             # runs the linter on all workspaces, useful for debugging lint issues (generally `npm run fix` is preferred)
npm run preview          # run the prod build
```
