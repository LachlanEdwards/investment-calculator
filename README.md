# Investment Calculator

> This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Start the Development Server

#### Prerequisites
Before getting started, ensure you have the following installed on your system:

- Node.js (version 18.17 or later)
- NPM (comes bundled with Node.js)

You can verify your installations by running:
```bash
node --version
npm --version
```

#### Installing Dependencies
Install all dependencies:

```bash
npm install
```
#### Starting the Development Server

To run the Next.js application in development mode:

```bash
npm run dev
```

This command will:

- Start the development server on http://localhost:3000
- Enable hot reloading for instant updates
- Provide detailed error messages and debugging information

#### Custom Port Configuration
To run the server on a different port:

```bash
npm run dev -- -p 3001
```

Or set the PORT environment variable:


```bash
bashPORT=3001 npm run dev
```

### Testing
#### Run All Tests

Execute all tests in the project:
```bash
npm test
```

#### Run Tests in Watch Mode

Automatically re-run tests when files change (ideal for development):
```bash
npm run test:watch
```

### Available Scripts

Here are the standard NPM scripts available for Next.js project:

| Script               | Command | Description |
|----------------------|---------|-------------|
| `npm run dev`        | `next dev` | Starts development server with hot reloading |
| `npm run build`      | `next build` | Creates optimized production build |
| `npm start`          | `next start` | Starts production server |
| `npm run lint`       | `next lint` | Runs ESLint for code quality checks |
| `npm run test`       | `next lint` | Runs all tests in the project |
| `npm run test:watch` | `next lint` | Automatically re-run tests when files change |

## Developer Notes

### Assumptions

1. Users are customers of Up Bank.
2. The maximum term for a (theoretical) Up Bank term deposit is 10 years.
3. The maximum amount you can deposit into a (theoretical) Up Bank term deposit is $5,000,000.
4. The only payment cycles offered are monthly, quarterly, yearly and at maturity.
5. The default investment rate is 1.10%.
6. The default investment term is 36 months (3 years).
7. The default payment cycle is at maturity.

### Trade-offs & Improvement Opportunities

1. The project has limited test coverage, focusing on calculator outputs. The test suites may be extended to cover the DOM, React behaviour (i.e. hooks and state), accessibility and support snapshots.
2. The DOM neglects accessibility and semantics.
3. UI components that don't afford error may be used i.e. slider controls for interest rate and investment term or select controls for payment cycles.
4. The interface for the Up API integration is a poor means of collecting sensitive information from the user in respect to user experience and security. It would be arguably more secure to store encrypted credentials server-side and proxy requests to the Up API to limit exposure to MITM (main-in-the-middle) attacks.
5. The interface could benefit from improved animations, transitions and styling.

### Design Decisions
1. TypeScript and React were decided as the "best" language for this use-case despite not being the developer's "strongest" language if the decision was based on skill alone. If the developer were to opt for their strongest language, C# (.NET) would have been the top candidate, however, the customer facing, lightweight, idempotent and stateless nature of the application made React a more appealing framework to use. C# could've been used to built a CLI (but that's a little boring) and Blazor has debatably questionable maturity and support as a front-end framework. React on TypeScript offers a similar type-safety to C# and TypeScript applications are generally more portable and maintainable due to the language's popularity and prevalence.
2. Boostrap was chosen as a UI library thanks to it's ability to accelerate the development of a clean, usable interface and pre-existing community support for use as React components. 
3. Next.js was chosen as a complimentary React framework to accelerate development and better the development experience, improve performance and afford future enhancements (like safer usage of the Up API or stateful features).
4. The Up API integration was implemented as a "stretch-goal" in the spirit of Up's disposition as a banking product that provides small, but thoughtful and helpful enhancements to improve the experience of everyday tools and interactions.