import { styles } from "../styles/appStyles"

export type EditorialDecorItem = {
  src: string
  top?: string | number
  bottom?: string | number
  left?: string | number
  right?: string | number
  width?: string
  height?: string
  rotate?: number
  opacity?: number
  centered?: boolean
}

export function EditorialDecor({ items }: { items: EditorialDecorItem[] }) {
  return (
    <div style={styles.editorialDecorLayer} aria-hidden="true">
      {items.map((item, index) => {
        const rotate = item.rotate ?? 0
        const transform = item.centered
          ? `translate(-50%, -50%) rotate(${rotate}deg)`
          : `rotate(${rotate}deg)`

        return (
          <img
            key={`${item.src}-${index}`}
            src={item.src}
            alt=""
            style={{
              ...styles.editorialDecorImage,
              top: item.top,
              bottom: item.bottom,
              left: item.left,
              right: item.right,
              width: item.width ?? "160px",
              height: item.height,
              opacity: item.opacity ?? 0.08,
              transform,
            }}
          />
        )
      })}
    </div>
  )
}
