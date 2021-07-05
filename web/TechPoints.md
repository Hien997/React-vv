## ESLint

1. Install ESLint Extension
2. Add the settings into setting.json of VS Code

```
"eslint.probe": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "markdown"
  ],
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],

  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
```

## Router (src\routes.ts)

Define a URL match to a page component

```tsx
const EmployeeList = React.lazy(() => import('./containers/Employee/List'));

const routes = [
  {
    path: '/employees',
    exact: true,
    name: 'Employees',
    component: EmployeeList,
  },
];
```

## Define a menu(src_nav.js)

## HOC and Presentational and Container Component Pattern

For shared code between react and react native
https://hackernoon.com/code-reuse-using-higher-order-hoc-and-stateless-functional-components-in-react-and-react-native-6eeb503c665
https://scotch.io/courses/5-essential-react-concepts-to-know-before-learning-redux/presentational-and-container-component-pattern-in-react

## Container Component(src\containers)

Code all business logic in here

- call api, get data
- validation
- handle event
- render view component

## View Component (src\views)

Make layout/UI in here

- define props need to pass from container

## Models (src\state\models)

- One modle for one table

## API Models (src\state\api-models)

- define modle for request/response of apis

## API Urls (src\config\api-endpoints.ts)

- define api url

## Ducks (src\state\ducks)

- One ducks for one module

### Multi languages (public\locales\en)

(https://react.i18next.com/)

- One json file for one module

```tsx
const { t } = useTranslation('employee');

<CardHeader>
  <i className="icon-menu" />
  {t('Employees')} <div className="card-header-actions" />
</CardHeader>;
```
