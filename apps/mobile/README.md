# apps/mobile (placeholder)

Aquí vivirá, en una fase futura, una app Expo (React Native) para Tinterno.

**Todavía no se ha creado.** Este directorio es solo un marcador de lugar en el
andamiaje del monorepo — no se ha corrido `create-expo-app` ni se ha instalado
ninguna dependencia de Expo/React Native.

## Qué va a ir aquí

- Una app Expo (managed workflow) que reutilice la lógica y el contenido
  clínico de `packages/content` y `packages/engine`, igual que `apps/web`.
- Pantallas nativas para iOS/Android que consuman esos mismos paquetes
  compartidos, evitando duplicar dosis, fórmulas o algoritmos clínicos.
- Su propio `package.json` (dependencias de Expo) y `app.json`/`app.config.ts`
  cuando se inicie el trabajo real.

## Por qué está vacío por ahora

La prioridad actual es separar el contenido clínico y la lógica de cálculo
(`packages/content`, `packages/engine`) de la interfaz, y migrar la interfaz
web (`apps/web`) sin tocar el `index.html` que sigue en producción. La app
móvil se arranca después, cuando esos paquetes compartidos estén estables.

## Cómo se debería iniciar (referencia, no ejecutar todavía)

```
pnpm create expo-app apps/mobile
```

Y luego declarar sus dependencias internas como `workspace:*`:

```json
{
  "dependencies": {
    "@tinterno/content": "workspace:*",
    "@tinterno/engine": "workspace:*"
  }
}
```
