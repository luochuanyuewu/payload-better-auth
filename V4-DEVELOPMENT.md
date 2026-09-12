# Payload v4 development fork

This checkout targets Payload `4.0.0-canary.33` and Better Auth `1.7.2`.
The peer range deliberately names that canary; this is not a claim of support for
all v4 prereleases. Use Node >=24.15.0 and pnpm 10.33.0.

```sh
pnpm install
pnpm build
pnpm test
```

The adaptation moves server templates to `@payloadcms/ui/rsc`, uses Payload router
hooks, migrates Button/Banner props and theme tokens, handles dynamic user fields
under the stricter authenticated-user type, and disables automatic versioning for
generated auth collections. Login/reset-password tests mock the new router entry.

The sibling np-stack consumes this checkout through `file:../../../payload-better-auth`
in its app and CMS packages. After changing the bridge, rebuild it, then refresh
its installed copy from the np-stack root:

```sh
pnpm --filter @local/app --filter cms update @delmaredigital/payload-better-auth --offline
pnpm --filter @local/app build
pnpm --filter cms generate:importmap
```

Keep this sibling checkout available when installing np-stack. No npm package has
been published. `origin` points to the personal fork and `upstream` to the original
repository. Commits and pushes are separate from local development.
