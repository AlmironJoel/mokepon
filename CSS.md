# Flexbox en CSS

## ¿Qué es Flexbox?

Flexbox (Flexible Box Layout) es un modelo de diseño en CSS que permite distribuir elementos de forma flexible en contenedores, adaptándose automáticamente al tamaño disponible.

## Propiedades del Contenedor

## NOTA: Es necesario contar con el contenedor PADRE en el cual vamos activar flex-Box y luego en los elementos HIJOS podemos usar sus propiedades 

- **`display: flex`** - Activa flexbox en el contenedor

- **`flex-direction`** - Define la dirección (row, column, row-reverse, column-reverse)
- **`justify-content`** - Alinea elementos en el eje principal (flex-start, center, space-between, etc.)
- **`align-items`** - Alinea elementos en el eje cruzado (flex-start, center, stretch, etc.)
- **`flex-wrap`** - Permite envolver elementos (wrap, nowrap, wrap-reverse)
- **`gap`** - Espacio entre elementos

## Propiedades de los Elementos

- **`flex`** - Atajo para flex-grow, flex-shrink y flex-basis
- **`flex-grow`** - Define el crecimiento proporcional
- **`flex-shrink`** - Define la reducción proporcional
- **`flex-basis`** - Tamaño base del elemento
- **`align-self`** - Alinea un elemento específico

## Ejemplo Básico

```css
.contenedor {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
```
